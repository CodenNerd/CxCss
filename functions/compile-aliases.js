const path = require("path");
const { compileClasses } = require("./compile-classes");
const config = require("./config-reader");
const { extractRules } = require("./extract-definition-rule");
const fs = require('fs');
const log = require("../utils/log");
const safelyWriteFileSync = require("../utils/safely-write-file-sync");

function getBreakpointWraps() {
    return Object.keys(config.breakpoints).filter(b => b !== 'default').reduce((obj, breakpoint) => ({...obj, [breakpoint]: { append: '}', prepend: `\n@media only screen and (min-width: ${config?.breakpoints?.[breakpoint]}) {`}}), {default: {append: '', prepend: ''}})
}

function interpretAlias(line) {
    try {
        const [alias, ...rest] = line.split(':').map(part => part.trim());
        const classnames = rest.join(':');
        const definitionsByBreakpoints = compileClasses(classnames.split(/\s+/), true)

        let finalDefinition = ''
        for (const breakpoint in definitionsByBreakpoints) {

            const definitions = definitionsByBreakpoints[breakpoint]
            let rules = ''
            for (const definition in definitions)  {
                rules += `${extractRules(definitions[definition])}`
            }
            const wraps = getBreakpointWraps()[breakpoint];
            finalDefinition += `${wraps.prepend} .${alias} { ${rules} } ${wraps.append}`
        }

        // const definition = `.${alias} { ${rules} }`
        // console.log({definition});
        return {
            alias,
            definition: `\n${finalDefinition?.trim()}\n`,
        };
    } catch (error) {
        return {
            alias: '',
            definition: ''
        }
    }

}



function compileClassNameAliases() {
    const input = getAliasesInput()
    const lines = input.trim().split('\n');
    const result = {};

    for (const line of lines) {
        const { alias, definition } = interpretAlias(line);
        result[alias] = definition;
    }

    safelyWriteFileSync('./.cxcss/aliases.cache.json', JSON.stringify(result, null, 2))
    return result;
}


function getAliasesInput() {
    const aliasesObjectAsString = JSON.stringify(config.aliases || {}).replaceAll(/[{"}]/gs, '').replaceAll(',', ' \n')
    let aliasesStringFromFile = ''
    if (config.aliasesFile) {
        try {
            aliasesStringFromFile = fs.readFileSync(config.aliasesFile)
        } catch (error) {
            log('Error accessing aliases file', 'warning')
        }        
    }

    return `
    ${aliasesObjectAsString}
    ${aliasesStringFromFile}
    `
}
// console.log(compileClassNameAliases())

module.exports = {
    compileClassNameAliases
}
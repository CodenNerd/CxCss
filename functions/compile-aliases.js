const path = require("path");
const { compileClasses } = require("./compile-classes");
const config = require("./config-reader");
const { extractRules } = require("./extract-definition-rule");
const fs = require('fs');
const log = require("../utils/log");

function interpretAlias(line) {
    try {
        const [alias, classnames] = line.split(':').map(part => part.trim());
        const definitions = compileClasses(classnames.split(/\s+/), true)
        let rules = ''
        for (const definition in definitions)  {
            rules += `${extractRules(definitions[definition])}`
        }
        const definition = `.${alias} { ${rules} }` 
        console.log({definition});
        return {
            alias,
            definition,
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
    console.log({__dirname, p: path.join(__dirname, '/../classes.cache/aliases.cache.json') })
    fs.writeFileSync(path.join(__dirname, '/../classes.cache/aliases.cache.json'), JSON.stringify(result, null, 2))
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
const fs = require('fs')
const config = require("./config-reader");
const { compilationCache } = require('../store');
const { getClassDefinitionFromCache, translateClassName } = require('./class-transpilers');
const { pseudoSelectors } = require('../store/pseudo-selectors');
const isValidCSS = require('../utils/is-valid-css');
const log = require('../utils/log');

function escapeClassName(classname) {
  const unallowedRegex = /[^a-zA-Z0-9-_]/g;
  const escapedClassname = classname.replace(unallowedRegex, match => '\\' + match);
  return escapedClassname;
}

function compileClasses(classNames, returnCached = false) {
  const compiledClasses = {}
  const compiledDefaultClasses = {};
  compiledClasses['default'] = compiledDefaultClasses

  classNames?.forEach(className => {
    let targetStore = compiledDefaultClasses;
    if (compilationCache[className]) {
      // log(`cxcss: ${className} <<< cache`)
      if (returnCached) {
        compiledDefaultClasses[className] = compilationCache[className];
      }
      return
    };

    const gPos = className.indexOf('g|');
    if ( gPos == 0) {

      const translatedClassName = translateClassName(className)
      if (isValidCSS(translatedClassName)) {
        compiledDefaultClasses[className] = translatedClassName;
      }

      return 
    }

    const classNameArray = className.split(':')
    let atRuleWrapperStart = []
    let atRuleWrapperEnd = []
    if (classNameArray.length !== 1) {
      classNameArray.forEach((c) => {
        if (config?.breakpoints?.[c] !== undefined) {
            atRuleWrapperStart.push(`@media only screen and (min-width: ${config?.breakpoints?.[c]}) { `)
            atRuleWrapperEnd.push(' }')
            compiledClasses[c] = compiledClasses[c] || {};
            targetStore = compiledClasses[c]
        }
        if (c.startsWith('@') && config?.layers?.find((layer) => layer == c.replace('@', ''))) {
          atRuleWrapperStart.push(`@layer ${c.replace('@', '')} { `)
          atRuleWrapperEnd.push(' }')
        }
    })
    }



    if (gPos !== -1) {
      const translatedClassName = `${atRuleWrapperStart.join(' ')}${translateClassName(className)}${atRuleWrapperEnd.join(' ')}`;
      if (isValidCSS(translatedClassName)) {
        targetStore[className] = translatedClassName;
      }
      return 
    }

    const sanitizedClassName = classNameArray[classNameArray.length - 1].replaceAll(/\!$/g, '');
    const isImportant = className.endsWith("!")
    const classDefinition = getClassDefinitionFromCache(sanitizedClassName);

    if (classDefinition) {
      const classNameModified = `.${escapeClassName(className)}${classNameArray.reduce((cumm, curr, i) => {
        if (i === classNameArray.length - 1) return cumm + '';
        return cumm + (pseudoSelectors[curr] || '')
      }, '')}`

      const ruleDefinition = classDefinition.replace(`.${sanitizedClassName}`, classNameModified)
      const cssString = `${atRuleWrapperStart.join(' ')}${ruleDefinition}${atRuleWrapperEnd.join(' ')}`
      targetStore[className] = isImportant ? cssString.replaceAll(';', ' !important;') : cssString;
    }
  });
  return compiledClasses;
}

module.exports = {
    compileClasses
}

/**
 * TODO:
 * layer  - @layer:bg-red
 * !important - bg-red! DONE
 * validate translation DONE
 * improve logs DONE
 */
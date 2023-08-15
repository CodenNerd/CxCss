const fs = require('fs')
const config = require("./config-reader");
const { compilationCache } = require('../store');
const { getClassDefinitionFromCache, translateClassName } = require('./class-transpilers');
const { pseudoSelectors } = require('../store/pseudo-selectors');

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
      if (returnCached) {
        compiledDefaultClasses[className] = compilationCache[className];
      }
      return
    };

    const gPos = className.indexOf('g|');
    if ( gPos == 0) {
      compiledDefaultClasses[className] = translateClassName(className);
      
      return 
    }

    const classNameArray = className.split(':')
    
    let breakpointWrapperStart = ''
    let breakpointWrapperEnd = ''
    if (classNameArray.length !== 1) {
      if (config?.breakpoints?.[classNameArray[0]] !== undefined) {
        console.log({brkpt: config?.breakpoints?.[classNameArray[0]] })

        breakpointWrapperStart += `@media only screen and (min-width: ${config?.breakpoints?.[classNameArray[0]]}) { `
        breakpointWrapperEnd += ' }'
      }
    }
    if (breakpointWrapperStart) {
      compiledClasses[classNameArray[0]] = compiledClasses[classNameArray[0]] ? compiledClasses[classNameArray[0]] : {};
      targetStore = compiledClasses[classNameArray[0]]
    }


    if (gPos !== -1) {
      targetStore[className] = `${breakpointWrapperStart}${translateClassName(className)}${breakpointWrapperEnd}`;
      return 
    }

    const sanitizedClassName = classNameArray[classNameArray.length - 1];
    const classDefinition = getClassDefinitionFromCache(sanitizedClassName);
    if (classDefinition) {
      const classNameModified = `.${escapeClassName(className)}${classNameArray.reduce((cumm, curr, i) => {
        if (i === classNameArray.length - 1) return cumm + '';
        return cumm + (pseudoSelectors[curr] || '')
      }, '')}`

      const ruleDefinition = classNameArray.length == 1 ? classDefinition : classDefinition.replace(`.${sanitizedClassName}`, classNameModified)
      targetStore[className] = `${breakpointWrapperStart}${ruleDefinition}${breakpointWrapperEnd}`;
    }
  });
  return compiledClasses;
}

module.exports = {
    compileClasses
}
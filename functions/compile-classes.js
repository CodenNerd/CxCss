const fs = require('fs')
const config = require("./config-reader");
const { compilationCache } = require('../store');
const { getClassDefinitionFromCache, translateClassName } = require('./class-transpilers');
const { pseudoSelectors } = require('../store/pseudo-selectors');


function compileClasses(classNames, returnPreviouslyCached = false) {
  const compiledClasses = {};

  classNames?.forEach(className => {
    // check and return from cache
    // console.log({compilationCache});
    if (compilationCache[className]) {
      console.log({ [className]: compilationCache[className] })
      if (returnPreviouslyCached) {
        compiledClasses[className] = compilationCache[className];
      }
      return
    };

    const gPos = className.indexOf('g|');
    if ( gPos == 0) {
      compiledClasses[className] = translateClassName(className);
      
      return 
    }

    const classNameArray = className.split(':')
    
    let breakpointWrapperStart = ''
    let breakpointWrapperEnd = ''
    if (classNameArray.length !== 1) {
      if (config?.breakpoints?.[classNameArray[0]] !== undefined) {
        breakpointWrapperStart += `@media only screen and (min-width: ${config?.breakpoints?.[classNameArray[0]]}) { `
        breakpointWrapperEnd += ' }'
      }
    }

    if (gPos !== -1) {
      compiledClasses[className] = `${breakpointWrapperStart}${translateClassName(className)}${breakpointWrapperEnd}`;
      return 
    }

    const sanitizedClassName = classNameArray[classNameArray.length - 1];
    const classDefinition = getClassDefinitionFromCache(sanitizedClassName);
    if (classDefinition) {
      const classNameModified = `[class~='${className}']${classNameArray.reduce((cumm, curr, i) => {
        if (i === classNameArray.length - 1) return cumm + '';
        return cumm + (pseudoSelectors[curr] || '')
      }, '')}`

      const ruleDefinition = classNameArray.length == 1 ? classDefinition : classDefinition.replace(`.${sanitizedClassName}`, classNameModified)
      compiledClasses[className] = `${breakpointWrapperStart}${ruleDefinition}${breakpointWrapperEnd}`;
    }
  });

  return compiledClasses;
}

module.exports = {
    compileClasses
}
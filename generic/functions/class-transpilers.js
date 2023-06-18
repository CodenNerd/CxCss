const config = require("./config-reader");
const path = require('path')
const fs = require('fs');
const { classPatterns } = require("../store/classes.patterns");

const previouslyComputed = {};
 
  
function getClassDefinitionFromCache(className) {
  const firstLetter = className.charAt(0).toLowerCase();
  const cacheFileName = `/../classes.cache/${firstLetter}.cache.json`;
  const cacheFilePath = path.join(__dirname, cacheFileName);

  if (fs.existsSync(cacheFilePath)) {
    console.log('');
    const cacheFileContent = fs.readFileSync(cacheFilePath, 'utf8');
    const cacheData = JSON.parse(cacheFileContent);
    return cacheData[className] || generateClassDefinitionFromPattern(className);
  }

  return generateClassDefinitionFromPattern(className);;
}

function generateClassDefinitionFromPattern (className) {
  console.log('Generating...', {className});
  if (previouslyComputed[className]) {
    return previouslyComputed[className];
  }

//   const firstLetter = className.charAt(0).toLowerCase();
//   const patternsFileName = `${config.location}/classes.patterns/${firstLetter}.patterns.json`;
//   const patternsFilePath = path.join(__dirname, patternsFileName);
  console.log('Got here');
    patternsData = classPatterns;

    for ( const pattern in patternsData ) {
      const _pattern = new RegExp(pattern)
      if (_pattern.test(className)) {
        const classDefinition = patternsData[pattern];
        const replacedDefinition = classDefinition.replace(
          /\$1/g,
          (match) => className.match(_pattern)[1]
        );
        previouslyComputed[className] = replacedDefinition;
        return replacedDefinition;
      }
    }
  // }

  return null
}

function translateClassName(className) {
  const cssClassName = className.replace(/^.*?(g\|)/, '').replaceAll('!', '!important').replaceAll('|', "{") + "}";
  return `[class~='${className}']${cssClassName[0] == ':' ? '' : '{'}${cssClassName}`;
}

module.exports = {
    getClassDefinitionFromCache,
    generateClassDefinitionFromPattern,
    translateClassName
}

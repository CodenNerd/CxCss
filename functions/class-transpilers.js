const config = require("./config-reader");
const path = require('path')
const fs = require('fs');
const { classPatterns } = require("../store/classes.patterns");
const { generateColorStyles } = require("./color-classes");

const previouslyComputed = {};
const colorClasses = generateColorStyles()
  
function getClassDefinitionFromCache(className) {
  const colorClass = colorClasses?.[className]
  if (colorClass) return colorClass;

  const firstLetter = className.charAt(0).toLowerCase();
  const cacheFileName = `/../classes.cache/${firstLetter}.cache.json`;
  const cacheFilePath = path.join(__dirname, cacheFileName);

  if (fs.existsSync(cacheFilePath)) {
    const cacheFileContent = fs.readFileSync(cacheFilePath, 'utf8');
    const cacheData = JSON.parse(cacheFileContent);
    return cacheData[className] || generateClassDefinitionFromPattern(className);
  }

  return generateClassDefinitionFromPattern(className);;
}

function generateClassDefinitionFromPattern (className) {
  console.log('Attempting pattern generation...', {className});
  if (previouslyComputed[className]) {
    return previouslyComputed[className];
  }

  patternsData = classPatterns;

  for ( const pattern in patternsData ) {
    const _pattern = new RegExp(pattern)
    if (_pattern.test(className)) {
      const classDefinition = patternsData[pattern];
      const replacedDefinition = classDefinition.replace(
        /\$(\d+)/g,
        (match, groupIndex) => className.match(_pattern)[groupIndex]
      );
      previouslyComputed[className] = replacedDefinition;
      return replacedDefinition;
    }
  }

  return null
}

function translateClassName(className) {
  console.log('Translating...');
  const cssClassName = className.replace(/^.*?(g\|)/, '').replaceAll('!', '!important').replaceAll('|', "{") + "}";
  return `[class~='${className}']${cssClassName[0] == ':' ? '' : '{'}${cssClassName}`;
}

module.exports = {
    getClassDefinitionFromCache,
    generateClassDefinitionFromPattern,
    translateClassName
}

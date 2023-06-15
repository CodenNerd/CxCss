const fs = require('fs');
const ts = require('typescript');
const path = require('path');
const config = require('./src/styles/generic/scripts/config-reader');
const classPatterns = require('./src/styles/generic/classes.patterns');
// const cheerio = require('cheerio');

const compilationCache = {}

function analyzeFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const fileExtension = filePath.split('.').pop();
  
    if (fileExtension === 'jsx' || fileExtension === 'tsx') {
      // JSX/TSX file analysis
      const classNames = new Set();
  
      const classAttributeRegex = /className=['"`]((?:[^'"`\r\n\\]|\\.|[\s\r\n])*)['"`]/g;
      let match;
  
      while ((match = classAttributeRegex.exec(fileContent)) !== null) {
        // console.log({match: match[1]});
        const classNamesText = match[1];
        const classNamesArray = classNamesText.split(/\s+/); // Split by whitespace
        classNamesArray.forEach(className => classNames.add(className));
      }
  
      return [...classNames];
    }

//   else if (fileExtension === 'html') {
//     // HTML file analysis
//     const $ = cheerio.load(fileContent);
//     const classNames = new Set();

//     $('[class]').each((_, element) => {
//       const classes = $(element).attr('class').split(' ');
//       classes.forEach(className => classNames.add(className));
//     });

//     return [...classNames];
//   }

  return [];
}

// const filePath = 'src/modules/views/login/Login.tsx';
// const classNames = analyzeFile(filePath);
// console.log(classNames);

let processedFiles = {};

function traverseDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);
  
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
  
      if (stats.isDirectory()) {
        traverseDirectory(filePath);
      } else if (stats.isFile()) {
        const fileExtension = path.extname(file);
  
        if (fileExtension === '.jsx' || fileExtension === '.tsx') {
          const classNames = analyzeFile(filePath);
          compileClasses(classNames)
          console.log(`File: ${filePath}`);
          console.log(`Class Names: ${classNames.join(', ')}`);
          console.log('-----------------------------------');
  
          // Update the processedFiles object with the latest timestamp
          processedFiles[filePath] = stats.mtimeMs;
        }
      }
    }
  }
  
  function watchDirectory(dirPath) {
    fs.watch(dirPath, { recursive: true }, (event, filename) => {
      console.log('Watching...', event);
      const filePath = path.join(dirPath, filename);
      const stats = fs.statSync(filePath);
  
      if (stats.isFile()) {
        const fileExtension = path.extname(filename);
  
        if (fileExtension === '.jsx' || fileExtension === '.tsx') {
          const lastProcessedTime = processedFiles[filePath] || 0;
  
          if (stats.mtimeMs > lastProcessedTime) {
            const classNames = analyzeFile(filePath);
            compileClasses(classNames)
            console.log(`File: ${filePath}`);
            console.log(`Class Names: ${classNames.join(', ')}`);
            console.log('-----------------------------------');
  
            processedFiles[filePath] = stats.mtimeMs;
          }
        }
      }
    });
  }

  const previouslyComputed = {};
  const outputCSSFile = config.output + 'index.css';

  const classModifiers = {

  }

  const pseudoSelectors = {
    "active": ":active",
    "checked": ":checked",
    "default": ":default",
    "disabled": ":disabled",
    "empty": ":empty",
    "enabled": ":enabled",
    "first-child": ":first-child",
    "first-of-type": ":first-of-type",
    "focus": ":focus",
    "hover": ":hover",
    "in-range": ":in-range",
    "invalid": ":invalid",
    "last-child": ":last-child",
    "last-of-type": ":last-of-type",
    "link": ":link",
    "not": ":not(...)",
    "nth-child": ":nth-child(...)",
    "nth-last-child": ":nth-last-child(...)",
    "nth-last-of-type": ":nth-last-of-type(...)",
    "nth-of-type": ":nth-of-type(...)",
    "only-child": ":only-child",
    "only-of-type": ":only-of-type",
    "optional": ":optional",
    "out-of-range": ":out-of-range",
    "read-only": ":read-only",
    "read-write": ":read-write",
    "required": ":required",
    "root": ":root",
    "target": ":target",
    "valid": ":valid",
    "visited": ":visited",
    "any-link": ":any-link",
    "blank": ":blank",
    "column": "::column",
    "current": ":current",
    "default-button": ":default-button",
    "defined": ":defined",
    "dir": ":dir(...)",
    "drop": ":drop",
    "future": ":future",
    "has": ":has(...)",
    "host": ":host",
    "host-context": ":host-context(...)",
    "indeterminate": ":indeterminate",
    "lang": ":lang(...)",
    "matches": ":matches(...)",
    "nth-column": ":nth-column(...)",
    "nth-last-column": ":nth-last-column(...)",
    "past": ":past",
    "placeholder-shown": "::placeholder-shown",
    "placeholder": "::placeholder",
    "slotted": "::slotted(...)",
    "user-invalid": ":user-invalid",
    "focus-within": ":focus-within",
    "focus-visible": ":focus-visible",
    "first-line": "::first-line",
    "first-letter": "::first-letter",
    "before": "::before",
    "after": "::after"
}


  function compileClasses(classNames) {
    const compiledClasses = {};
  
    classNames.forEach(className => {
      // check and return from cache

      if (compilationCache[className]) return;
 
      const gPos = className.indexOf('g|');
      if ( gPos == 0) {
        compiledClasses[className] = translateClassName(className);
        compilationCache[className] = compiledClasses[className];
        return 
      }

      const classNameArray = className.split(':')
      
      let breakpointWrapperStart = ''
      let breakpointWrapperEnd = ''
      if (classNameArray.length !== 1) {
        if (config.breakpoints[classNameArray[0]] !== undefined) {
          breakpointWrapperStart += `@media only screen and (min-width: ${config.breakpoints[classNameArray[0]]}) { `
          breakpointWrapperEnd += ' }'
        }
      }

      if (gPos !== -1) {
        compiledClasses[className] = `${breakpointWrapperStart}${translateClassName(className)}${breakpointWrapperEnd}`;
        compilationCache[className] = compiledClasses[className];
        return 
      }

      const sanitizedClassName = classNameArray[classNameArray.length - 1];
      console.log({sanitizedClassName, classNameArray});
      const classDefinition = getClassDefinitionFromCache(sanitizedClassName);
      if (classDefinition) {
        const classNameModified = `[class~='${className}']${classNameArray.reduce((cumm, curr, i) => {
          console.log({cumm});
          if (i === classNameArray.length - 1) return cumm + '';
          console.log({cumm, curr});
          return cumm + (pseudoSelectors[curr] || '')
        }, '')}`

        console.log({classNameModified});
        const ruleDefinition = classNameArray.length == 1 ? classDefinition : classDefinition.replace(`.${sanitizedClassName}`, classNameModified)
        compiledClasses[className] = `${breakpointWrapperStart}${ruleDefinition}${breakpointWrapperEnd}`;
      }
    });
  
    // Generate the CSS content
    let cssContent = '';
    for (const className in compiledClasses) {
      cssContent += `${compiledClasses[className]} \n`;
    }
  
    // Write the CSS content to the output file
    fs.writeFileSync(outputCSSFile, cssContent);
  
    return compiledClasses;
  }
  
  function getClassDefinitionFromCache(className) {
    const firstLetter = className.charAt(0).toLowerCase();
    const cacheFileName = `${config.location}/classes.cache/${firstLetter}.cache.json`;
    const cacheFilePath = path.join(__dirname, cacheFileName);
  
    if (fs.existsSync(cacheFilePath)) {
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

    const firstLetter = className.charAt(0).toLowerCase();
    const patternsFileName = `${config.location}/classes.patterns/${firstLetter}.patterns.json`;
    const patternsFilePath = path.join(__dirname, patternsFileName);
    console.log('Got here');
    // if (fs.existsSync(patternsFilePath)) {
      // const patternsFileContent = fs.readFileSync(patternsFilePath, 'utf8');
      // const patternsData = JSON.parse(patternsFileContent);

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
    const cssClassName = className.replace(/^.*?(g\|)/, '').replace('!', '!important').replaceAll('|', "{") + "}";
    return `[class~='${className}']${cssClassName[0] == ':' ? '' : '{'}${cssClassName}`;
  }

  const projectDirectory = config.watchDirectory || './'; 
  traverseDirectory(projectDirectory);
  watchDirectory(projectDirectory);



  /**
   * 
   * TODO: 
   * 
   * - Classname Chaining
   * - Optimise compilation
   * - Use single media queries 
   */
  
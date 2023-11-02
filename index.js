const config = require("./functions/config-reader");
const analyzeFile = require("./functions/analyze-file");
const { compileClasses } = require("./functions/compile-classes");
const {
  traverseDirectory,
  watchDirectory,
} = require("./functions/traverse-directory");
const fs = require("fs");
const { outputCSSFile, compilationCache } = require("./store");
const {
  addToCompilationCache,
  resetCompilationCache,
} = require("./functions/cache-manager");
const log = require("./utils/log");
const { compileClassNameAliases } = require("./functions/compile-aliases");
const deepMerge = require("./utils/deep-merge");

const projectDirectory = config.watchDirectory;

function runCompilation(filePath, previousCompilationObject = {}, ignoreCache = false) {
  const classNames = analyzeFile(filePath);
  const compiledClasses = compileClasses(classNames, ignoreCache);
  const cssObject = {}
  let cssContent = "";
  for (const breakpoint in compiledClasses) {
    if(!cssObject[breakpoint]) {
      cssObject[breakpoint] = ""
    }
    for (const className in compiledClasses[breakpoint]) {
      addToCompilationCache(className, compiledClasses[breakpoint][className]);
      const content = compilationCache[className] || compiledClasses[breakpoint][className] || ''
      if (content) cssObject[breakpoint] += `${content} \n`;
    }    
  }

  return cssObject;
}

function getOutputCssString(cssContentObject) {
  return ['default', ...Object.keys(config.breakpoints)].reduce((cumm, breakpoint) =>{ return cumm += `\n${cssContentObject[breakpoint] || ''}`}, "@layer base;\n")
}

function build() {
  resetCompilationCache();
  if (config.aliasesFile || Object.keys(config.aliases || {}).length) {
    compileClassNameAliases();
  }
  let globalCssContentObject = {}
  traverseDirectory(projectDirectory, (filePath) => {
    deepMerge(globalCssContentObject, runCompilation(filePath), true) ;
    deepMerge(globalCssContentObject, runCompilation(filePath), true);
  });    
  fs.writeFileSync(outputCSSFile, getOutputCssString(globalCssContentObject));
  console.log('----------------------------------------------')
  return globalCssContentObject;
}

function watch() {
  let globalCssContentObject = {}
  let currentFileCssContentObject = {}
  let currentFile = ''
  globalCssContentObject = build();
  if (config.aliasesFile || Object.keys(config.aliases || {}).length) {
    watchDirectory(config.aliasesFile, (filePath) => {
      const cssContent = compileClassNameAliases();
      build()
      log(`${Object.values(cssContent || {}).join(' \n ')}`, cssContent ? 'green' : 'info')
    });
  }
  
  watchDirectory(projectDirectory, (filePath) => {
    if (currentFile !== filePath) {
      currentFile = filePath
      deepMerge(globalCssContentObject, currentFileCssContentObject, true)
      currentFileCssContentObject = {}
    }
    const cssContentObject = runCompilation(filePath, currentFileCssContentObject);
    deepMerge(currentFileCssContentObject, cssContentObject, true)
    const cssContent = Object.values(cssContentObject || {}).toString()
    log(`cxcss: ${cssContent || '∅'} >>> ${outputCSSFile}`, cssContent ? 'green' : 'info')
    const globalCssContentObjectClone = JSON.parse(JSON.stringify(globalCssContentObject))
    fs.writeFileSync(outputCSSFile, getOutputCssString(deepMerge(globalCssContentObjectClone, currentFileCssContentObject, true)))
    // fs.appendFileSync(outputCSSFile, cssContent);
    // if (countToRecompilation >= 50) {
    //   resetCompilationCache();
    //   build();
    //   countToRecompilation = 0;
    // }
  });
}

function exec() {
  try {
    watch();
  } catch (error) {
    console.log({ error });
    exec();
  }
}

// exec()

module.exports = {
  exec,
  build,
  watch
};

/**
 *
 * TODO:
 *
 * - Classname Chaining
 * - Optimise compilation
 * - Use single media queries
 * - frames:from:mt-0 frames-from:bg-red frames:to:bg-green frames-to:mt-5
 * - from:mt-0 from:bg-red to:bg-green to:mt-5
 * - from:mt-0|bg-red to:bg-green|mt-5
 * - inspect inspect-focus inspect-with-border inspect-with-bg
 * 
 */

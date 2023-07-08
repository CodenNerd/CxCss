const config = require("./functions/config-reader");
const analyzeFile = require("./functions/analyze-file");
const { compileClasses } = require("./functions/compile-classes");
const {
  traverseDirectory,
  watchDirectory,
} = require("./functions/traverse-directory");
const fs = require("fs");
const { outputCSSFile } = require("./store");
const {
  addToCompilationCache,
  resetCompilationCache,
} = require("./functions/cache-manager");
const log = require("./utils/log");

const projectDirectory = config.watchDirectory;
let countToRecompilation = 0;

function runCompilation(filePath) {
  const classNames = analyzeFile(filePath);
  const compiledClasses = compileClasses(classNames);
  let cssContent = "";
  for (const className in compiledClasses) {
    addToCompilationCache(className, compiledClasses[className]);
    cssContent += `${compiledClasses[className]} \n`;
    countToRecompilation++;
  }
  return cssContent;
}

function build() {
  let globalCssContent = "";
  traverseDirectory(projectDirectory, (filePath) => {
    globalCssContent += runCompilation(filePath);
    globalCssContent += runCompilation(filePath);
  });    
  fs.writeFileSync(outputCSSFile, globalCssContent);
}

function watch() {
  watchDirectory(projectDirectory, (filePath) => {
    const cssContent = runCompilation(filePath);
    log(`${cssContent} >>> ${outputCSSFile}`, cssContent ? 'green' : 'info')
    fs.appendFileSync(outputCSSFile, cssContent);
    if (countToRecompilation >= 50) {
      resetCompilationCache();
      build();
      countToRecompilation = 0;
    }
  });
}

function exec() {
  try {
    build();
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

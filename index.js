const config = require(__dirname + "/./functions/config-reader");
const analyzeFile = require(__dirname + "/./functions/analyze-file");
const { compileClasses } = require(__dirname + "/./functions/compile-classes");
const {
  traverseDirectory,
  watchDirectory,
} = require(__dirname + "/./functions/traverse-directory");
const fs = require("fs");
const { outputCSSFile } = require(__dirname + "/./store");
const {
  addToCompilationCache,
  resetCompilationCache,
} = require(__dirname + "/./functions/cache-manager");

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
  });    
  fs.writeFileSync(outputCSSFile, globalCssContent);
}

function watch() {
  watchDirectory(projectDirectory, (filePath) => {
    const cssContent = runCompilation(filePath);
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
 */
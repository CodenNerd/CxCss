const config = require("../functions/config-reader");

const compilationCache = {}

const processedFiles = {};

const targetExtensions = [...new Set([".jsx", ".tsx", ".html", ".cx", ".vue", ...(config?.targetExtensions || [])])]
const outputCSSFile = (config.output || '') + 'index.css';

const targetAttributes = [...new Set(['className=', ...(config?.targetAttributes || [])])];

module.exports = {
    compilationCache,
    processedFiles,
    targetExtensions,
    outputCSSFile,
    targetAttributes
}

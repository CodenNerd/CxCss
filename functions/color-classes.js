const config = require("./config-reader");

function generateColorStyles() {
    const colorStyles = {};

    Object.entries(config.colors).forEach(([color, value]) => {
      colorStyles[`bg-${color}`] = `.bg-${color} { background-color: ${value}; }`;
  
      colorStyles[`text-${color}`] = `.text-${color} { color: ${value}; }`;
  
      colorStyles[`border-${color}`] = `.border-${color} { border-color: ${value}; }`;
    });
  
    return colorStyles;
}

module.exports = {
    generateColorStyles
}
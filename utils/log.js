// Function to console log a colored message with a checkmark or other symbol
function log(message, type = 'success') {
    const symbols = {
      reset: '',
      success: '\u2714', // Unicode character for checkmark
      warning: '\u26A0', // Unicode character for warning
      danger: '\u2716', // Unicode character for danger/cross mark
      info: '\u2139',
    };
  
    const colors = {
      reset: '\x1b[0m',
      success: '\x1b[32m',
      warning: '\x1b[33m',
      danger: '\x1b[31m',
      info: '\x1b[34m',
    };
  
    const symbolToUse = symbols[type] || symbols.success;
    const colorToUse = colors[type] || colors.success;
  
    const formattedMessage = `${colorToUse}${symbolToUse} ${message}${colors.reset}`;
  
    console.log(formattedMessage);
  }
  
  module.exports = log
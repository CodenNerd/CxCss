function deepMerge(target, source) {
    // Iterate over all properties in the source object
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        if (source[key] instanceof Object && target[key] instanceof Object) {
          // Recursively merge nested objects
          deepMerge(target[key], source[key]);
        } else {
          // Assign the value directly if it's not an object
          target[key] = source[key];
        }
      }
    }
  }

  
  module.exports = deepMerge
  
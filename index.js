const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let keys = Object.keys(collection)

      for (let i = 0; i < keys.length; i++) { callback(collection[keys[i]]) }
      return collection
    },

    map: function(collection, callback) {
      const modified = [];
      let keys = Object.keys(collection);

      for (let i = 0; i < keys.length; i++) {
        modified.push(callback(collection[keys[i]]))
      }
      return modified;
    },

    reduce: function(collection, callback, initialValue) {
      let result = !!initialValue ? initialValue : collection[0]
      let i = !!initialValue ? 0 : 1

      for (; i < collection.length; i++) {
        result = callback(result, collection[i])
      }
      return result;
    },

    find: function(collection, callback) {
      let found = undefined;
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i]) === true) { 
          found = collection[i]
          break;
        }
      }
      return found;
    },

    filter: function(collection, callback) {
      const matches = [];
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i]) === true) {
          matches.push(collection[i])
        }
      }
      return matches;
    },

    size: function(collection) {
      return Object.keys(collection).length;
    },

    first: function(collection, n = 1) {
      if (n === 1) {
        return collection[0];
      } else {
        let grabMultiple = [];
        for (let i = 0; i < n; i ++) {
          grabMultiple.push(collection[i])
        }
        return grabMultiple;
      }
    },

    last: function(collection, n = 1) {
      if (n === 1) {
        return collection[collection.length - 1]
      } else {
        let grabMultiple = [];
        for (let i = 1; i <= n; i++) {
          grabMultiple.unshift(collection[collection.length - i])
        }
        return grabMultiple;
      }
    },

    compact: function(collection) {
      const compacted = [];
      for (let i = 0; i < collection.length; i++) {
        if (!!collection[i]) {
          compacted.push(collection[i])
        }
      }
      return compacted;
    },

    sortBy: function(collection, callback) {
      
    },

    flatten: function(collection, singleLevel) {
      function flattenLevel(array) {
        let compiled = [];
          for(let i = 0; i < array.length; i++) {
              if (Array.isArray(array[i])) {
                  array[i].forEach(element => compiled.push(element))
              } else {
                 compiled.push(array[i]);   
              }
          }
          return compiled
      }
      if (singleLevel === true) {
        return flattenLevel(collection);
      } else {
        let flattened = collection;
        while(flattened.some( e => Array.isArray(e) )) {
          flattened = flattenLevel(flattened)
        }
        return flattened;
      }
    },

    uniq: function(collection, isSorted, callback) {
      let unique = [];

      if (isSorted) {
        let newUniq = collection[0];
        let next = collection [1];
        unique.push(newUniq);
        for (let i = 0; i < (collection.length - 1); i++) {
          if (newUniq !== next) {
            newUniq = next;
            next = collection[i + 2]
            unique.push(newUniq);
          } else {
            next = collection[i + 2]
          }
        }
      } else if (!!callback) {
        let returnVals = []
        for (let i = 0; i < collection.length; i++) {
          let returnVal = callback(collection[i])
          if ( !returnVals.includes(returnVal) ) {
            returnVals.push(returnVal);
            unique.push(collection[i]);
          }
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          if ( !unique.includes(collection[i]) ) {
            unique.push(collection[i])
          }
        }
      }
      return unique;
    },

    keys: function(object) {
      let keys = [];
      for (let ea in object) { keys.push(ea); }
      return keys
    },

    values: function(object) {
      let vals = [];
      for (let ea in object) { vals.push(object[ea]) }
      return vals;
    },

    functions: function(object) {
      let fns = []
      for (let ea in object) {
        if (typeof object[ea] === "function") { fns.push(ea) }
      }
      return fns.sort()
    },


  }
})()

fi.libraryMethod()

const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    // Iterate over collection, pass each el to cb, return original collection
    // Each invocation of cb has args el, i, collection (el is value for obj)
    each: function(collection, callback) {
      // Turn collection into an arr, if obj it's an arr of values
      let array = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()
      // For each el, run cb with that el
      for (const el of array) {callback(el)}
      // Return original collection
      return collection
    },

    // Iterate over collection, pass each el to cb, return new arr with new values (w/o modifying original collection)
    // Each invocation of cb has args el, i, collection (el is value for obj)
    map: function(collection, callback) {
      let array = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()
      // Initiate results arr for new values
      let results = []
      // Pass each i from arr, run cb with that i, and push into results
      for (let i = 0; i < array.length; i++) {
        results.push(callback(array[i]))
      }
      // Return new arr with new values (results)
      return results
    },

    // Aggregate collection into a single value
    // Acc is the initial value that each result of cb should add to
    // Each invocation of cb has args acc, current value, and collection
    reduce: function(collection, callback, acc) {
      let array = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()
      // If given no acc, default to first i in arr, and reset arr to begin at the next i
      if (!acc) {
        acc = array[0]
        array = array.slice(1)
      }
      // For each el, run cb with with args, and update acc
      for(let el of array) {acc = callback(acc, el, array)}
      // Return updated acc
      return acc
    },

    // Return first el in collection that matches predicate (then stop searching), else return undefined
    find: function(collection, predicate) {
      let array = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()
      // Test each el, if it matches predicate, return el
      for(let el of array) {if (!!predicate(el)) {return el}}
    },

    // Return all values in collection that match predicate
    filter: function(collection, predicate) {
      let array = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()
      // Initiate arr for matching els
      let results = []
      // Test each el, if it matches predicate, push into results
      for(let el of array) {if (!!predicate(el)) {results.push(el)}}
      return results
    },

    // Return size of passed in collection, should work for objs (number of keys)
    size: function(collection) {
      let array = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()
      return array.length
    },

    // Return first el or (optional) first n els of collection
    first: function(collection, n) {
      // If no n arg, return first i of arr, else return values 0 thru n
      return !n ? collection[0] : collection.slice(0, n)
    },

    // Return last el or (optional) last n els of collection
    last: function(collection, n) {
      // If no n arg, return last i of arr, else return values n thru end
      return !n ? collection[collection.length - 1] : collection.slice(collection.length - n)
    },

    // Return copy of arr with falsy values removed; do not modify original
    compact: function(array) {
      // Initiate array for true values
      let results = []
      // For each el, if el is true push to results
      for(let el of array) {!!el ? results.push(el) : undefined}
      return results
    },

    // Return arr of sorted ints or strs (ascending order); do not modify original
    sortBy: function(array, callback) {
      // Initiate results arr with all values to be sorted
      let results = array.slice(0)
      // Sort results arr
      return results.sort((a, b) => {
        return callback(a) - callback(b)
      })
    },

    // Return flattened arr from input nested arr
    // If (optional) single is true, only flatten single level
    flatten: function(array, single=false, results=[]) {
      // If arr isn't an arr, return results arr with all els in it
      if (!Array.isArray(array)) return results.push(array)
      // Push each arr el to result
      function pushArr(result, array) {
        for (let el of array) {
          result.push(el)
        }
      }
      // If single is true, push each el to results; if an el is an arr, push each value to results
      if (single) {
        for(let el of array) {
          Array.isArray(el) ? pushArr(results, el) : results.push(el)
        }
      } else {
      // If single is false, flatten arr
        for(let el of array) {
          this.flatten(el, false, results)
        }
      }
      return results
    },

    // Return arr with duplicate values removed
    uniq: function(array, sorted=false, callback=false) {
      // Filter els if arr is sorted
      if (sorted) {
        return array.filter((el, i) => {
          // If there's a cb, return el if cb doesn't match next el's cb
          if (callback) {
            return (callback(el) !== callback(array[i+1]))
          // Else return el if it doesn't equal the value of next el
          } else {
            return (el !== array[i+1])
          }
        })
      // Else if no cb, create new arr from array
      } else if (!callback) {
        return Array.from(new Set(array))
      // Else compare cb values, return arr of unique values
      } else {
        let results = []
        let unique = []
        for (let el of array) {
          const value = callback(el)
          if (results.indexOf(value) === -1) {
            results.push(value)
            unique.push(el)
          }
        }
        return Array.from(unique)
      }
    },

    // Return arr of obj keys
    keys: function(obj) {
      let keys = []
      for(const key in obj) {keys.push(key)}
      return keys
    },

    // Return arr of obj values
    values: function(obj) {
      let values = []
      for(const key in obj) {values.push(obj[key])}
      return values
    },

    // Return sorted collection of method names from obj
    functions: function(obj) {
      // Filter obj for keys that are a fn and sort those els
      return Object.keys(obj).filter(key => typeof(obj[key]) === 'function').sort()
    },


  }
})()

fi.libraryMethod()

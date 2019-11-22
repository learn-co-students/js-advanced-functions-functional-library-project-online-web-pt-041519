const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    // Perform callback function on collection and return original collection
    each: function(collection, callback) {
      // Turn collection into array
      let colArray = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()

      // Pass each array element to callback
      for (const el of colArray) { callback(el) }

      // Return original collection
      return collection
    },

    // Perform callback function on collection, return modified collection, but don't modify original collection
    map: function(collection, callback) {
      // Turn collection into array
      let colArray = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()

      // Set array to hold post-callback values
      let returnArr = []

      // Pass each array element to callback
      for (let ind = 0; ind < colArray.length; ind++) {
        returnArr.push(callback(colArray[ind])) 
      }

      // Return original collection
      return returnArr
    },

    // Perform callback function on collection, return accumulated value
    reduce: function(collection, callback, acc) {    
      // Turn collection into array
      let colArray = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()

      // If acc not passed in, set it to first collection value 
      if (!acc) {
        acc = colArray[0]
        colArray = colArray.slice(1)
      }

      // Iterate through collection, passing accumulator, element, and collection to callback
      for (let el of colArray) {
        acc = callback(acc, el, colArray)
      }
      return acc
    },

    // Return first item in collection that passes predicate test; else return undefined
    find: function(collection, predicate) {    
      // Turn collection into array
      let colArray = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()
      
      // iterate through, return
      for (let el of colArray) {
        if (!!predicate(el)) { return el }
      }
    },

    // Return array of all items that pass predicate test
    filter: function(collection, predicate) {  
      // Turn collection into array
      let colArray = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()

      // Set array to true values
      let returnArr = []        
      
      // iterate through, return items that pass test
      for (let el of colArray) {
        if (!!predicate(el)) { returnArr.push(el) }
      }
      return returnArr
    },

    // Return size of collection
    size: function(collection) { 
      // Turn collection into array
      let colArray = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()
      
      return colArray.length
    },

    // Return first element of array. If n, return first n elements.
    first: function(array, n) { 
      return !n ? array[0] : array.slice(0, n)
    },

    // Return last element of array. If n, return last n elements.
    last: function(array, n) { 
      return !n ? array[array.length-1] : array.slice(array.length-n)
    },

    // Return copy of array with all falsy values removed.
    compact: function(array) { 
      // Set array for true values
      let returnArr = []     

      // Iterate and populate array with true values
      for (let el of array) {
        !!el ? returnArr.push(el) : undefined
      }
      return returnArr
    },

    // Return sorted copy of array in ascending order based on callback values.
    sortBy: function(array, callback) { 
      // Set array for true values
      let returnArr = array.slice(0)

      // Sort by callback values
      return returnArr.sort(function(a, b){
        return callback(a) - callback(b)
      })
    },

    // Return flattened array from nested input. If shallow is true, only flatten one level deep.
    flatten : function(collection, shallow = false, returnArr=[]) {       
      // Return as array if collection isn't array
      if (!Array.isArray(collection)) return returnArr.push(collection)

      // Push array values onto memo
      function pushValues(memo, array) {
        for (let el of array) {
          memo.push(el)
        }
      }

      // Only flatten one level
      if (shallow) {
        for (let el of collection) {
          Array.isArray(el) ? pushValues(returnArr, el) : returnArr.push(el)
        }
      }
      // Else recursively flatten all nested items
      else {
        for (let el of collection) {
          this.flatten(el, false, returnArr)
        }
      }
      return returnArr
    },

    // Return array with no duplicates
    uniq: function(arr, isSorted=false, callback=false) { 

      // If array is sorted, compare side-by-side for uniqueness
      if (isSorted) {
        return arr.filter((el, index) => {
          if (callback) {
            return (callback(el) !== callback(arr[index+1]))
          } else {
            return (el !== arr[index+1])
          }
        })
      }
      // Else use Set if no callback
      else if (!callback) {
        return Array.from(new Set(arr))
      } 
      // Else compare callback values and return array based on unique values
      else {
        // const modifiedVals = new Set()
        // const uniqVals = new Set()
        let modifiedVals = []
        let uniqVals = []
        for (let val of arr) {
          const moddedVal = callback(val)
          // if (!modifiedVals.has(moddedVal)) {
          //   modifiedVals.add(moddedVal)
          //   uniqVals.add(val)
          // }
          if (modifiedVals.indexOf(moddedVal) === -1) {
            modifiedVals.push(moddedVal)
            uniqVals.push(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    // Return all object's keys as array
    keys: function(object) { 
      // Set array for keys
      let returnArr = []   

      // Iterate through object, push keys to array
      for (const key in object) {
        returnArr.push(key)
      }
      return returnArr
    },

    // Return all object's values as array
    values: function(object) { 
      // Set array for keys
      let returnArr = []   

      // Iterate through object, push keys to array
      for (const key in object) {
        returnArr.push(object[key])
      }
      return returnArr
    },

    // Return sorted list of all function names from input object
    functions: function(object) {
      return Object.keys(object).filter(key => typeof(object[key]) === 'function').sort()
    },
  }
})()

fi.libraryMethod()

fi.functions(fi);

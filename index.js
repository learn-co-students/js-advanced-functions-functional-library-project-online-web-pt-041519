const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
     // Perform callback function on collection and return original collection
      // Turn collection into array
      let colArray = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()

      // Pass each array element to callback
      for (const el of colArray) { callback(el) }

      // Return original collection
      return collection
    },

    map: function(collection, callback) {
      let colArray = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()
      // Set array to hold post-callback values
      let returnArr = []

      // Pass each array element to callback
      for(let i = 0; i < colArray.length; i++) {
        returnArr.push(callback(colArray[i]))
      }
      return returnArr
    },

    reduce: function(collection, callback, acc) {
      // Turn collection into array
      let colArray = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()
      
      // if not passed an accumulator, we'll set its starting point to 0 by default
      if (!acc) {
        acc = colArray[0]
        colArray = colArray.slice(1)
      }
      
      // iterate thru the collection 
      for(let el of colArray) {
        acc = callback(acc, el, colArray)
      }
      return acc
    },

    find: function(collection, predicate) {
      // Turn collection into array
      let colArray = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()

      for(let i = 0; i < colArray.length; i++) {
        let el = colArray[i]

        if ((predicate(el))) {
          return el
        }
      }
    },

    filter: function(collection, predicate) {
      // turn collection into array
      let colArray = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()
      let returnArr = []

      // iterate thru colArray, push any values that satisfy the predicate into returnArray
      for (let i = 0; i < colArray.length; i++) {
        let el = colArray[i]

        if ((predicate(el))) {
          returnArr.push(el)
        }
      }
      return returnArr
    },

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

    compact: function(array) {
      let returnArr = []

      for(let i = 0; i < array.length; i++) {
        let el = array[i]

        !!el ? returnArr.push(el) : undefined
      }
      return returnArr
    },

    sortBy: function(array, callback) {
      // return a copy of the original array 
      let returnArr = array.slice(0)
      
      return returnArr.sort(function(a,b) {
        return callback(a) - callback(b)
      })
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

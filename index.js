const fi = (function() {
  let collectionTest = function(collection) {
    return Array.isArray(collection) ? collection.slice() : Object.values(collection)
  }

  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection = collectionTest(collection) 

      newCollection.forEach(c => callback(c))
      
      // for(let i = 0; i < newCollection.length; i ++){
      //   callback(newCollection[i])
      // }

      return collection
    },

    map: function(collection, callback) {
      let newCollection = collectionTest(collection)
      let newArray = []

      newCollection.map( (c) => { newArray.push(callback(c)) })

      return newArray
    },

    reduce: function(collection, callback, accumulator) {
      let newCollection = collectionTest(collection)

      if (!accumulator) {
        accumulator = newCollection[0]
        newCollection = newCollection.slice(1)
      }

      return newCollection.reduce( (a, c) => { return callback(a, c) }, accumulator)
    },

    find: function(collection, predicate) {
      let newCollection = collectionTest(collection) 

      return newCollection.find(predicate)
    },

    filter: function(collection, predicate) {
      let newCollection = collectionTest(collection) 

      return newCollection.filter(predicate)
    },

    size: function(collection) {
      let newCollection = collectionTest(collection) 

      return newCollection.length
    },

    first: function(array, n) {
      if(!n) {
        return array[0]
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n) {
      let last = array[array.length - 1]

      if(!n) {
        return last
      } else {
        return array.slice(last - n)
      }
    },

    compact: function(array) {
      let filtered = array.filter(Boolean)
      return filtered
    },

    sortBy: function(array, callback) {
      let newArray = collectionTest(array) 
      return newArray.sort(function(a, b) { return callback(a) - callback(b) })
    },

    flatten: function(array, shallow) {
      if (shallow === true) {
        let result = array.reduce((acc, val) => acc.concat(val), [])
        return result
      } else {
        let result = array.reduce((acc, val) => acc.concat(Array.isArray(val) ? fi.flatten(val) : val), [])
        return result
      }
    },

    // storing the results of your callback in one array
    // actual array value in another array
    // comparison vs. array return purposes
    uniq: function(array, isSorted, callback) {
      let newArray = collectionTest(array) 
      let returnArray = [] 
      let callbackArray = []

      if(callback) {
        newArray.map(x => { callbackArray.push(callback(x))})
        
        for (var e of newArray) {
          const callbackVal = callback(e)
          if (callbackVal === e){
            returnArray.push(e)
          }
        }
        

        console.log(`callbackArray: ${callbackArray}`)
        console.log(`newArray: ${newArray}`)
        console.log(`returnArray: ${returnArray}`)
        console.log(`sorted returnArray: ${[...new Set(returnArray)]}`)
        
      } else {
        return [...new Set(newArray)] 
      }
    },

    keys: function(object){
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    },

    functions: function(object) {
      // let sorted = Object.keys(object).sort()
      // return sorted
    },

  }
})()

fi.libraryMethod()

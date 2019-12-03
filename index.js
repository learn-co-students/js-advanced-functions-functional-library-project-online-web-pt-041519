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

    },

    flatten: function(array, shallow) {
      if(shallow === true) {
        return array.reduce((acc, val) => acc.concat(val), [])
      }else {
        // return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
      }
    },

    uniq: function(array, [isSorted], [callback]) {

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

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

    find: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()

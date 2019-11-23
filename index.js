const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    // Iterate over collection, pass ea el to callback, return original collection
    // Ea invocation of callback has args el, i, collection (el is value for obj)
    each: function(collection, callback) {
      // Turn collection into an arr, if obj it's an arr of values
      let array = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()
      // For ea el of array, fire callback w that el
      for (const el of array) {callback(el)}
      // Return original collection
      return collection
    },

    // Iterate over collection, pass ea el to callback, return new arr w new values (w/o modifying original collection)
    // Ea invocation of callback has args el, i, collection (el is value for obj)
    map: function(collection, callback) {
      // Turn collection into an arr, if obj it's an arr of values
      let array = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()
      // Initiate results arr for new values
      let results = []
      // For ea el of array, fire callback w that el and push into results
      for (let i = 0; i < array.length; i++) {
        results.push(callback(array[i]))
      }
      // Return new arr w new values (results)
      return results
    },

    // Aggregate collection into a single value
    // Acc is the initial value that ea result of callback should add to
    // Ea invocation of callback has args acc, current value, and collection
    reduce: function(collection, callback, acc) {
      // Turn collection into an arr, if obj it's an arr of values
      let array = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()
      
    },

    functions: function(collection, predicate) {

    },


  }
})()

fi.libraryMethod()

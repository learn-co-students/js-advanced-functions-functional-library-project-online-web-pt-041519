const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
// Array || Object functions //
    each: function(collection, callback) {
      if(collection instanceof Array == false) {
        let obj = Object.values(collection)
        for(let x = 0; x < obj.length; x++) {
          callback(obj[x], Object.keys(collection)[x], collection)
        }
      }
      else {
        for(let x = 0; x < collection.length; x++) {
          callback(collection[x], x, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let coll = []
      if(collection instanceof Array == false) {
        let obj = Object.values(collection)
        for(let x = 0; x < obj.length; x++) {
          coll.push(callback(obj[x], Object.keys(collection)[x], collection))
        }
      }
      else {
        for(let x = 0; x < collection.length; x++) {
          coll.push(collection[x], x, collection)
        }
      }
      return coll
    },

    reduce: function(collection, callback, acc = null) {
      let x
      if(collection instanceof Array == false) {
        let obj = Object.values(collection)
        if(acc == null) {
          x = 1
          acc = obj[0]
        }
        else {
          x = 0
        }
        for(x; x < obj.length; x++) {
          acc = callback(acc, obj[x], collection)
        }
      }
      else {
        if(acc == null) {
          x = 1
          acc = collection[0]
        }
        else {
          x = 0
        }
        for(x; x < collection.length; x++) {
          acc = callback(acc, collection[x], collection)
        }
      }
      return acc
    },

    find: function(collection, predicate) {
      if(collection instanceof Array == false) {
        let obj = Object.values(collection)
        for(let x = 0; x < obj.length; x++) {
          if(predicate(obj[x]) == true) {
            return obj[x]
          }
        }
      }
      else {
        for(let x = 0; x < collection.length; x++) {
          if(predicate(collection[x]) == true) {
            return collection[x]
          }
        }
      }
    },

    filter: function(collection, predicate) {
      let arr = []
      if(collection instanceof Array == false) {
        let obj = Object.values(collection)
        for(let x = 0; x < obj.length; x++) {
          if(predicate(obj[x]) == true) {
            arr.push(obj[x])
          }
        }
      }
      else {
        for(let x = 0; x < collection.length; x++) {
          if(predicate(collection[x]) == true) {
            arr.push(collection[x])
          }
        }
      }
      return arr
    },

    size: function(collection) {
      if(collection instanceof Array == false) {
        let obj = Object.keys(collection)
        return obj.length
      }
      else {
        return collection.lenght
      }
    },
// Array ONLY functions //
    first: function(array, n = null) {
      if(n == null) {
        return array[0]
      }
      else {
        let arr = []
        for(let x = 0; x < n; x++) {
          arr.push(array[x])
        }
      return arr
      }
      
    },

    last: function(array, n = null) {
      if(n == null) {
        return array[(array.length - 1)]
      }
      else {
        let arr = []
        for(let x = 0; x < n; x++) {
          arr.push(array[array.length - (n - x)])
        }
        return arr
      }
    },

    compact: function(array) {
      let arr = []
      for(let x = 0; x < array.length; x++) {
        if(!array[x] === false) {
          arr.push(array[x])
        }
      }
      return arr
    },

    sortBy: function(array, callback) {
      let arr = [...array]
      return arr.sort((a, b) => callback(a) - callback(b))
    },

    flatten: function(array, shallow) {
      
    },

    uniq: function(array, isSorted, callback) {
      let arr
      if(isSorted == true) {
        let set = new Set
        for(let x = 0; x < array.length; x++) {
          set.add(array[x])
        }
        arr = Array.from(set)
      }
      else {
        let set = new Set
        let newArr = [...array].sort((a, b) => a - b)
        for(let x = 0; x < newArr.length; x++) {
          set.add(newArr[x])
        }
        arr = Array.from(set)
      }
      if(callback) {
        let set = new Set
        let newSet = new Set
        let newArr = arr.sort((a, b) => callback(a) - callback(b))
      	for(let x = 0; x < newArr.length; x++){
          let cb = callback(newArr[x])
          set.add(cb)
        	if(Array.from(newSet).length < Array.from(set).length) {
          	newSet.add(newArr[x])
          }
        }
        arr = Array.from(newSet).sort((a, b) => a - b)
      }
      return arr
    },
// Object ONLY function //
    keys: function(object) {
      let arr = []
      for(let key in object) {
        arr.push(key)
      }
      return arr
    },

    values: function(object) {
      let arr = []
      for(let key in object) {
        arr.push(object[key])
      }
      return arr
    },

    functions: function(object) {
      let arr = []
      for(let key in object) {
        if(typeof(object[key]) == 'function') {
          arr.push(key)
        }
      }
      return arr
    }

  }
})()

fi.libraryMethod()

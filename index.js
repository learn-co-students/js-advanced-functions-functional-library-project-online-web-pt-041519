const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newArr = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newArr.length; i++) {
        callback(newArr[i])
      }
      // Code below works as well:

      // if (Array.isArray(collection)) {
      //   for (let i = 0; i < collection.length; i++) {
      //     callback(collection[i])
      //   }
      // } else if (!Array.isArray(collection) && typeof(collection) === 'object')
      // {
      //   let valArr = Object.values(collection)
      //   for (let i = 0; i < valArr.length; i++) {
      //     callback(valArr[i])
      //   }
      // }
      return collection
    },

    map: function(collection, callback) {
      const finalArr = []
      const newArr = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newArr.length; i++) {
        finalArr.push(callback(newArr[i]))
      }
      return finalArr
    },

    reduce: function(collection, callback, acc=null) {
      const newArr = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      if (acc) {
        let num = acc
        for (let i = 0; i < newArr.length; i++) {
          num = callback(num, newArr[i])
        }
        return num
      } else {
        let num = newArr[0]
        for (let i = 1; i < newArr.length; i++) {
          num = callback(num, newArr[i])
        }
        return num
      }
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate) {
      let newArr = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          newArr.push(collection[i])
        }
      }
      return newArr
    },

    size: function(collection) {
      const newArr = (collection instanceof Array) ? collection.slice() : Object.keys(collection)
      return newArr.length
    },

    first: function(array, n=0) {
      if (n) {
        let newArr = []
        for (let i = 0; i < n; i++) {
          newArr.push(array[i])
        }
        return newArr
      } else { return array[0] }
    }, 

    last: function(array, n=0) {
      if (n) {
        let newArr = []
        for (let i = 1; i <= n; i++) {
          newArr.unshift(array[array.length - i])
        }
        return newArr
      } else { return array[array.length - 1] }
    },

    compact: function(array) {
      let newArr = []
      array.forEach( el => { if (el) { newArr.push(el) } })
      return newArr
    },

    sortBy: function(array, callback) {
      let newArr = []
      array.forEach( el => newArr.push(el) )
      newArr.sort((a, b) => callback(a) - callback(b))
      return newArr
    },

    flatten: function(array, shallow=false) {
      if (shallow) {
        let newArr = array.reduce((acc, val) => acc.concat(val), [])
        return newArr
      } else {
        let newArr = array.reduce((acc, val) => acc.concat(Array.isArray(val) ? fi.flatten(val) : val), [])
        return newArr
      }
    },

    uniqSorted: function(array, callback) {
      const sorted = [array[0]]
      for (let i = 1; i < array.length; i++) {
        if (sorted[i-1] !== array[i]) {
          sorted.push(array[i])
        }
      }
      return sorted
    },

    uniq: function(array, isSorted=false, callback=false) {
      if (isSorted) {
        return fi.uniqSorted(array, callback)
      } else if (!callback) {
        return Array.from(new Set(array))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of array) {
          const moddedVal = callback(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      const keys = []
      for (let key in obj) {
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      const vals = []
      for (let key in obj) {
        vals.push(obj[key])
      }
      return vals
    },

    functions: function(obj) {
      const funcs = []
      for (let key in obj) {
        if (typeof obj[key] === 'function') {
          funcs.push(key)
        }
      }
      return funcs.sort()
    }


  }
})()

fi.libraryMethod()



















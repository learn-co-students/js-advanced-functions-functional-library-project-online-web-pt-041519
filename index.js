const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCol = (typeof(collection)=== 'object') ? Object.values(collection) : collection.slice()
      for (let el of newCol){callback(el)}
      return collection
    },

    map: function(collection, callback) {
      const newCol = (typeof(collection)=== 'object') ? Object.values(collection) : collection.slice()
      let newArr = []
      for (let i = 0; i<newCol.length; i++){
        newArr.push(callback(newCol[i]))
      }
      return newArr
    },

    reduce: function(collection, callback, acc) {
      let newCol = (typeof(collection)=== 'object') ? Object.values(collection) : collection.slice()
      
      if (!acc){
        acc = newCol[0]
        newCol = newCol.slice(1)
      }

      for (let el of newCol){
        acc = callback(acc, el, newCol)
      }

      return acc

    },

    find: function(collection, predicate) {
      let newCol = (typeof(collection)=== 'object') ? Object.values(collection) : collection.slice() 
     
      for (let el of newCol) {
        if (!!predicate(el)) {return el}
      }
    },

    filter: function(collection, predicate) {
      let newCol = (typeof(collection)=== 'object') ? Object.values(collection) : collection.slice() 
      let newArr = []
      for (let el of newCol) {
        if (!!predicate(el)) {
          newArr.push(el)
        }
      }
      return newArr
    },

    size: function(collection) {
      let newCol = (typeof(collection)=== 'object') ? Object.values(collection) : collection.slice() 
      
      return newCol.length
    },

    first: function(array, n) {
      return !n ? array[0] : array.slice(0, n)
    },

    last: function(array, n) {
      return !n ? array[array.length-1] : array.slice(array.length-n)
    },

    compact: function(array){
      let newArr = []
      for (let i of array) {
        !!i ? newArr.push(i) :undefined
      }
      return newArr
     },
    
    sortBy: function(array, callback){
      let newArr = array.slice(0)
      return newArr.sort((a,b) => callback(a) - callback(b))

    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr = []) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let el of collection)
          Array.isArray(el) ? this.unpack(newArr, el) : newArr.push(el)
      } else {
        for (let el of collection) {
          this.flatten(el, false, newArr)
        }
      }
      return newArr
    },

    uniq: function(array, isSorted=false, callback=false) {
      if (isSorted){
        return array.filter((el, idx) => {
          if (callback) {
            return (callback(el) !== callback(array[idx+1]))
          } else {
            return (el !== array[idx+1])
          }
        })
      }
      else if (!callback) {
        return Array.from(new Set(array))
      } 
      else {
        let newValue = []
        let uniqValues = []
        for (let el of array) {
          const returnEl = callback(el)
          if (newValue.indexOf(returnEl) === -1) {
            newValue.push(returnEl)
            uniqValues.push(el)
          }
        }
        return Array.from(uniqValues)
      }
    },

    keys: function(object) {
      let newArr = []
      for (const key in object) {
        newArr.push(key)
      }
      return newArr
    },

    values: function(object) {
      let newArr = []
      for (const key in object) {
        newArr.push(object[key])

      }
      return newArr
    },

    functions: function(object) {
      return Object.keys(object).filter(key => typeof(object[key]) == 'function').sort()
    }

  }
})()

fi.libraryMethod()

fi.functions(fi)

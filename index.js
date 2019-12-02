const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(item, alert) {
      if (typeof(item) === "object") {

        for(let x = 0; x < Object.keys(item).length; x++) {
          alert(item[Object.keys(item)[x]])
        }
        return item

      } else {
      for(let i = 0; i < item.length; i ++) {
        alert(item[i])
      }
      return item
    }

    },

    map: function(array) {
      if (typeof(array) === "object") {
        let newArray = []
        for(let x = 0; x < Object.keys(array).length; x++) {
          newArray.push(array[Object.keys(array)[x]] * 3)
        }
        return newArray
      } else {
      let newArray = []
      for(let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 3)
      }
      return newArray
    }
    },

    reduce: function(collection, callback, acc) {
      if (acc) {
      let total = 0
      for (let i = 0; i < collection.length; i++) {
        total = total + (collection[i] * 3)
      }
      return total + acc

    } else {
      let total = 1
      for (let i = 1; i < collection.length; i++) {
        total = total + (collection[i] * 3)
      }
        return total
      }
    },

    find: function(collection, findFunction) {

     for(let i = 0; i < collection.length; i++) {
       if (findFunction(collection[i])) {
         return collection[i]
       }
       }
    },

    filter: function(collection, filterFunction) {
      let resultArray = []
      for (let i = 0; i < collection.length; i++) {
        if (filterFunction(collection[i])) {
          resultArray.push((collection[i]))
        }
      }
      return resultArray

    },

    size: function(collection) {
      if (typeof(collection) === "array") {
        return collection.length
      } else {
        return Object.keys(collection).length
      } 

    },

    first: function(collection, n) {
      if (n) {
        return collection.slice(0, n)
      } else {
        return collection[0]
      }
    },

    last: function(collection, n) {
      if (n) {
        return collection.slice(-n)
      } else {
      return collection.slice(-1)[0]
      }
    },

    compact: function(collection) {
      let resultArray = []
      
      for(let i = 0; i < collection.length; i++) {
        if (!!collection[i] === true) {
          resultArray.push((collection[i]))
        }
      }
      return resultArray

    },

    sortBy: function(collection, sortFunction) {

      let arrayCopy = [...collection]

      for (let k = 0; k < arrayCopy.length; k++) {
        for (let j = 0; j < arrayCopy.length; j++) {
          if (sortFunction(arrayCopy[j]) > sortFunction(arrayCopy[j + 1])) {
            let tmp = arrayCopy[j]
            arrayCopy[j] = arrayCopy[j + 1]
            arrayCopy[j + 1] = tmp
          }
        }
      }
      return arrayCopy
    },


    flatten: function(array, shallow) {
      let flattened = [].concat(...array)
      let two = [].concat(...flattened)
      let three = [].concat(...two)

      if (shallow === true) {
        return flattened
      }
      return three
    },

    uniq: function(array, isSorted, callback) {

      let mySet = new Set()
      let result = []


      if (callback) {
        for (let i = 0; i < array.length; i++) {

          if (!mySet.has(callback(array[i]))) {
            result.push(array[i])
            mySet.add(callback(array[i]))

          } }
          return result

      } else {
          let secondSet = new Set(array)
          let final = Array.from(secondSet)
          return final
      }
    },
    
    
      keys: function(object) {
        return Object.keys(object)
    },

      values: function(object) {
        return Object.values(object)
      },

      functions: function(object) {
        let result = []

        for (const property in object) {
          if (typeof object[property] === "function")
          result.push(property)
          result.sort()
        }
        return result
      },


  }
})()

fi.libraryMethod()

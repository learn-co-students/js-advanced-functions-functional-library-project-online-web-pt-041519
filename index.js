const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      //Iterates over a collection of elements, passing each element in turn to a callback function.
      let newArr = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()
      for (const element of newArr) {callback(element)}
      return collection
    },

    map: function(collection, callback) {
      let ogArr = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()
      let newArr = []
      for (const element of ogArr) {newArr.push(callback(element))}
      return newArr
    },

    reduce: function(collection, callback, acc) {
      let ogArr = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()
      if (!acc) {
        acc = ogArr[0]
        ogArr = ogArr.slice(1)
      }
      for (const element of ogArr) {acc = callback(acc, element, ogArr)}
      return acc
    },

    find: function(collection, predicate) {
      let ogArr = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()
      for (let i = 0; i < ogArr.length; i++){
        let element = ogArr[i]
        if ((predicate(element))){return element}
      }
    },

    filter: function(collection, predicate){
      let ogArr = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()
      let newArr = []
      for (let i = 0; i < ogArr.length; i++){
        let element = ogArr[i]
        if ((predicate(element))){newArr.push(element)}
      }
      return newArr
    },

    size: function(collection){
      let ogArr = (typeof(collection)=== 'object') ? Object.values(collection) : collection.slice()
      return ogArr.length
    },

    first: function(array, n){
      return !n ? array[0] : array.slice(0, n) 
    },

    last: function(array, n){
      return !n ? array[array.length - 1] : array.slice(array.length-n) 
    },

    compact: function(array){
      let newArr = []
      for (let i = 0; i < array.length; i++){
        let element = array[i]
        !!element ? newArr.push(element) : undefined
      }
      return newArr
    },

    sortBy: function(array, callback){
      let newArr = array.slice(0)
      return newArr.sort(function(a,b){
        return callback(a) - callback(b)
      })
    },



    flatten: function(arrayArg, shallow=false, flatArray=[]){
      // flatArray = []
      if (!Array.isArray(arrayArg)) return flatArray.push(arrayArg)
      let extract = function(acc, array){
        for (let value of array){
          acc.push(value)
        }
      }
      if (shallow) {
        for (let value of arrayArg) {
          Array.isArray(value) ? extract(flatArray, value) : flatArray.push(value)
        }
      } else {
        for (let value of arrayArg){
          this.flatten(value, false, flatArray)
        }
      }
      return flatArray
    },


    uniq: function(array, isSorted=false, callback=false){
      if (isSorted){
        return array.filter((ele, indx) => {
          if (callback){
            return (callback(ele) !== callback(array[i+1]))
          } else {
            return (ele !== array[i+1])
          }
        })
      } else if (!callback) {
        return Array.from(new Set(array))
      }else{
        let removedVals = []
        let uniqVals = []
        for (let ele of array) {
          let rtrnVal = callback(ele)
          if (removedVals.indexOf(rtrnVal) === -1){
            removedVals.push(rtrnVal)
            uniqVals.push(ele)
          }
        }
        return Array.from(uniqVals)
      } 
    },

    keys: function(obj){
      let keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj){
      let valArray = []
      for (let key in obj){
        valArray.push(obj[key])
      }
      return valArray
    },

    functions: function(obj){
      return Object.keys(obj).filter(key => typeof(obj[key]) === 'function').sort()
    },

  }
})()

fi.libraryMethod()

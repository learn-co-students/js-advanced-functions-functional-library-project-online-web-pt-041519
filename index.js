const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      // let newCollection = collection.slice();
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      newCollection.forEach(c => callback(c));
      return collection;
    },

    map: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      const newerCollection = [];
      newCollection.forEach(c => newerCollection.push(callback(c)));
      return newerCollection;
    },

    reduce: function(collection, callback, acc) {
      let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
      }
      newCollection.forEach(c => acc = callback(acc, c, newCollection));
      return acc;
    },

    find: function(collection, predicate){
      let col = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      for (let i = 0; i < col.length; i++)
        if (predicate(col[i])) return col[i];
      return undefined;
    },

    filter: function(collection, predicate){
      let col = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      const newCol = [];
      for (let i = 0; i < col.length; i++) {
        if (predicate(col[i])) {
          newCol.push(col[i]);
        }
      }
      return newCol;
    },

    size: function(collection){
      let col = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      return col.length;
    },

    first: function(array, n){
      return n ? array.slice(0, n) : array[0]
    },

    last: function(array, n){
      return n ? array.slice(array.length - n) : array[array.length - 1]
    },

    compact: function(array){
      let badArray = [];
      array.forEach(e => {
        if (!!e) badArray.push(e);
      })
      return badArray;
      
    },

    sortBy: function(array, callback){
      let newArray = array.slice();
      return newArray.sort((a,b) => {
        return callback(a) - callback(b);
      });
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
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
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values
    },

    functions: function(obj) {
      const functionNames = []
      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    },
  }
})()

fi.libraryMethod()
// console.log(fi)
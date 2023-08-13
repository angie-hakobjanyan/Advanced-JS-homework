/* 1,  */
function concatTwoArrays(arr1, arr2) {
  let concat = arr1.concat(arr2);
  return concat;
}

let concatinated = concatTwoArrays([1, 2, 3, 4], [5, 6, 7, 8, 9]);
console.log(concatinated);

/* 2, */
function creaqteAcronym(str) {
  let arrayOfWords = str.split(" ");

  let acro = arrayOfWords.reduce(
    (acc, firstLetter) => acc + firstLetter[0].toUpperCase(),
    ""
  );
  return acro;
}

let acronym = creaqteAcronym("Prisoner of War");
console.log(acronym);
/* 3,  */
function scoreTheWord(word) {
  let obj = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    l: 1,
    n: 1,
    r: 1,
    s: 1,
    t: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 6,
    x: 6,
    q: 7,
    z: 7
  };

  let letters = word.split("");

  let summedScore = letters.reduce((acc, letters) => (acc += obj[letters]), 0);

  return summedScore;
}

let score = scoreTheWord("hello");
console.log(score);

/* 4, . Write a function which returns array of usernames. */

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
    age: 56
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
    age: 54
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
    age: 52
  }
];

function getUserNames(users) {
  const userNames = users.reduce((names, objects) => {
    names.push(objects.username);
    return names;
  }, []);

  return userNames;
}

let userNames = getUserNames(users);
console.log(userNames);

/*5. Write a function which returns array of lengths of user names*/

function getUserNameLengths(userNames) {
  let lengths = userNames.reduce((length, names) => {
    length.push(names.length);
    return length;
  }, []);
  return lengths;
}
console.log(getUserNameLengths(userNames));

// 8. Write a function which remove users with language equals to 'ru'.

function removeRussionSpleakings(users) {
  let withoutRussions = users.reduce((noRussions, userInfo) => {
    if (!(userInfo.lang === "ru")) {
      noRussions.push(userInfo);
    }
    return noRussions;
  }, []);
  return withoutRussions;
}

console.log(removeRussionSpleakings(users));

// 9. Write a function which filters object by field.

function checkField(users, field) {
  let fieldTrue = users.reduce((austronauts, user) => {
    if (user[field] === true) {
      austronauts.push(user);
    }
    return austronauts;
  }, []);
  return fieldTrue;
}
console.log(checkField(users, "isAstronaut"));

/* 11. Write a function which calculates average age of users*/

const usersAge = users.reduce((age, user) => {
  age.push(user.age);
  return age;
}, []);
const summedAge = usersAge.reduce((sum, age) => (sum += age));
const averageAge = summedAge / usersAge.length;

/* 6. Write a function which parses string integers. If it's not possible to parse, then add null*/
function parseInteger(integers) {
  let parsed = integers.map((int) => {
    if (!isNaN(Number(int))) {
      int = Number(int);
      return int;
    }
    return null;
  });
  return parsed;
}

console.log(parseInteger(["1", "2", "34"])); // [1, 2, 34];
console.log(parseInteger(["1", "px", "2323"])); // [1, null, 2323];

/* 7. Given an array, return a new array that only includes the numbers.
 */

function getOnlyNumbers(mixedArray) {
  let onlyNumbers = mixedArray.reduce((arrayOfNums, element) => {
    if (!isNaN(Number(element)) && element && element !== true) {
      arrayOfNums.push(element);
    }
    return arrayOfNums;
  }, []);

  return onlyNumbers;
}
let numberArray = getOnlyNumbers([
  1,
  2,
  "a",
  true,
  {},
  undefined,
  55,
  false,
  "hi",
  null,
  166,
  NaN
]);
console.log(numberArray);

// 10. Given an array, return the sum of numbers that are 18 or over.
// const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];
// // 22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347

const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];
const eighteenPlus = arr.filter((num) => num > 18);
const sumEighteenPlus = eighteenPlus.reduce((sum, num) => (sum += num));
console.log(sumEighteenPlus);

// . Create a function that takes an array of numbers arr, a string str and return an array of numbers as
// per the following rules:
//   - "Asc" returns a sorted array in ascending order.
//   - "Desc" returns a sorted array in descending order.

function sortBy(arrayOfNums, str) {
  const asc = arrayOfNums.slice().sort((a, b) => a - b);
  const desc = arrayOfNums.slice().sort((a, b) => b - a);

  if (str === "Asc") return asc;
  if (str === "Desc") return desc;
}

console.log(sortBy([4, 3, 2, 1], "Desc"));

// -----------------------------------------------------------------------------------------------------

function push(array, element) {
  array[array.length] = element;
  return array;
}
console.log(push([5, 9, 6], 8));
//--------------------------------------------------------------------------------
function pop(array) {
  array.length = array.length - 1;
  return array;
}
console.log(pop([5, 9, 6]));
//--------------------------------------------------------------------------------
function unshift(array, element) {
  array[array.length] = null;

  for (let i = array.length - 1; i > 0; i--) {
    array[i] = array[i - 1];
  }

  array[0] = element;

  return array;
}

console.log(unshift([5, 2, 3, 1], 9));
//-------------------------------------------------------------------------------
function shift(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  array.length = array.length - 1;

  return array;
}

console.log(shift([1, 2, 3, 4, 5, 6]));

// --------------------------------------------------------------------------------

//callbackFnA function to execute for each element in the array. Its return value is discarded. The function is called with the following arguments:

//element The current element being processed in the array.

// index The index of the current element being processed in the array.

// array The array forEach() was called upon.

//callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.

//forEach() does not mutate the array on which it is called, but the function provided as callbackFn can.

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      callback(array[i], i, array);
    }
  }
}
const arrayofWords = [, "forEach", "seems", "to", , "be", "like", "for"];

console.log(
  forEach(arrayofWords, (element, index, array) => {
    console.log(`at ${index} : is ${element} in [${array}]`);
  })
);

// The index of the first element in the array that passes the test. Otherwise, -1.

/*callbackFn - A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise.
    
    callbackFn is invoked for every index of the array, not just those with assigned values. Empty slots in sparse arrays behave the same as undefined.*/

// element The current element being processed in the array.

// index The index of the current element being processed in the array.

// array The array findIndex() was called upon.

// You can search for undefined in a sparse array and get the index of an empty slot.
const someArray = [1, 9, 55, 88, 7];
function findIndex(array, callbackFn) {
  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}

console.log(
  findIndex(someArray, (element, index) => {
    return element > 11;
  })
);

//  returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

/*callbackFn A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise. The function is called with the following arguments:*/

//callbackFn is invoked for every index of the array, not just those with assigned values. Empty slots in sparse arrays behave the same as undefined.
let numbers = [11, 22, , 3, , 55, 666];
function find(array, findEvenNumber) {
  for (let i = 0; i < array.length; i++) {
    if (findEvenNumber(array[i], i, array)) return array[i];
  }
}

console.log(find(numbers, (number) => number % 2 === 0));

/*Return value
    true if callbackFn returns a truthy value for every array element. Otherwise, false.*/

/* callbackFn A function to execute for each element in the array. It should return a truthy value to indicate the element passes the test, and a falsy value otherwise. 
    
    callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.*/

function some(array, moreThan10) {
  for (let i = 0; i < array.length; i++) {
    if (i in array && moreThan10(array[i], i, array)) return true;
  }
  return false;
}

console.log(some(numbers, (number) => number > 10));

function every(array, moreThan10) {
  let result = true;

  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      if (!moreThan10(array[i], i, array)) {
        result = false;
      }
    }
  }

  return result;
}

console.log(every(numbers, (number) => number > 10));

// creates a new array populated with the results of calling a provided function on every element in the calling array.

// callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays. A sparse array remains sparse after map(). The indices of empty slots are still empty in the returned array, and the callback function won't be called on them.

// Mapped array contains undefined When undefined or nothing is returned:
// const numbers = [1, 2, 3, 4];
// const filteredNumbers = numbers.map((num, index) => {
//   if (index < 3) {
//     return num;
//   }
// });

// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]

function map(array, multiplyBy2) {
  let result = new Array(array.length);

  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      result[i] = multiplyBy2(array[i], i, array);
    }
  }
  return result;
}

console.log(
  map(numbers, (element, index, array) => {
    if (index > 1) return element * 2;
  })
);

//  creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

// A function to execute for each element in the array. It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.

// If no elements pass the test, an empty array will be returned.

//filter() will skip empty slots.
const moreThan10 = (number, index, array) => number > 10;

function filter(array, moreThan10) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (i in array && moreThan10(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(filter(numbers, moreThan10));

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

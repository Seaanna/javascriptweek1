// test
// highestNumber function challenge
var numbers = [-1, -4, -2, -20, -21];
var max = -25;

function highestNumber() {
  numbers.forEach(function(element){
    if (element > max) {
      max = element;
    }
  })
  console.log(max);
}
// Run function highestNumber()
highestNumber()

-------------------------------------------------

// lowestNumber function challenge
var numbers = [-1, -4, -2, -20, -21];
var max = -25;

function lowestNumber() {
  numbers.forEach(function(element){
    if (element < max) {
      max = element;
    }
  })
  console.log(max);
}
// Run function lowestNumber()
lowestNumber()

-------------------------------------------------

// smallestNumber function challenge
var numbers2 = [-9, -8, 2, -0.5, -1, 3, 10]
var absolute = -25

function smallestNumber() {
  numbers2.forEach(function(element){
    if (Math.abs(element) < Math.abs(absolute)) {
      absolute = element;
    }
  })
  console.log(absolute);
}
// Run function smallestNumber()
smallestNumber()

-------------------------------------------------

// Sum of the array function challenge
var numbers3 = [-1, 2, 3, 4.5, 7]
var sum = 0

function sumArray(){
  numbers3.forEach(function(element){
    sum = element + sum;
  })
  console.log(sum);
}
// Run function sum()
sumArray()

-------------------------------------------------

// mean function challenge
var numbers3 = [-1, 2, 3, 4.5, 7]
var sum = 0

function meanArray(){
  numbers3.forEach(function(element){
    sum = element + sum;
  })
  sum = sum / numbers3.length;
  console.log(sum);
}
// Run function sum()
meanArray()

-------------------------------------------------

// highestNumber function challenge
var numbers4 = [5, -4, 20, -20, -21];
var max = -25;

function indexHighestNumber() {
  numbers4.forEach(function(element){
    if (element > max) {
      max = element;
    }
  })
  console.log(numbers4.lastIndexOf(max));
}
// Run function highestNumber()
indexHighestNumber()

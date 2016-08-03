// function that finds the even numbers in an array and returns them in an array
var evenNumbers = [-1, 24, 7, -17, 20, -2];
function findEvens (){
  evenNumbers.forEach(function(element){
    if (element % 2 === 0){
      console.log(element);
    }
  })
}
// Run function evenNumbers()
findEvens()

-------------------------------------------------

// function that finds the odd numbers in an array and returns them in an array
var oddNumbers = [-1, 24, 7, -17, 20];
function findOdds (){
  oddNumbers.forEach(function(element){
    if (Math.abs(element) % 2 === 1){
      console.log(element);
    }
  })
}
// Run function evenNumbers()
findOdds()

-------------------------------------------------

// mapArray function takes in two arguments - an array and a function.
var numbers = [1, 2, 3, 4, 5];

function mapArray (array, func){
  var returnArray = [];
  array.forEach(function(e){
    returnArray.push(func(e));
  })
  return returnArray;
}

mapArray(numbers, function(y) { return 2*y })

-------------------------------------------------

// filterArray function takes in two arguments - an array and a function.
var numbers = [1, 2, 3, 4, 5];

function filterArray (array, func){
  var returnArray = [];
  array.forEach(function(e){
    if (func(e)) {
      returnArray.push(e);
    }
  })
  return returnArray;
}

filterArray(numbers, function(y) { return y>=4 })

[false, false, false, true, true]

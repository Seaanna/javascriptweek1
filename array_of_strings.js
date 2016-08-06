var vivian = ['chaoho', 'shanli', 'vivian', 'angela']
var remy = ['julien', 'monique', 'lemy']
// Sorts the vivian array by alphabetical order// test
vivian.sort();
// Reverses the remy array
remy.sort(function(a,b){
  return (a<b)*1 + (a>b)*-1;
})
// Try to figure out how to use .reverse to reverse a sorted array later


-------------------------------------------------

// function that adds two arrays together, then prints out the alphabetically sorted combined array
var vivian = ['chaoho', 'shanli', 'vivian', 'angela']
var remy = ['julien', 'monique', 'lemy']
function families (){
  var combined = vivian.concat(remy);
  console.log(combined.sort());
}
families()

-------------------------------------------------

// function that sorts the combined array in reverse alphabetical order
var combined = vivian.concat(remy);
combined.sort(function(a,b){
  return (a<b)*1 + (a>b)*-1;
})

-------------------------------------------------

// function that tells you if a name exists within the combined arrays
var vivian = ['chaoho', 'shanli', 'vivian', 'angela']
var remy = ['julien', 'monique', 'lemy']
var combined = vivian.concat(remy);
function nameExists(x){
  return x==='Bob';
}
combined.some(nameExists);

// story1
var carFun = car();
function car(make,model,year,color){
  return{
    a: make,
    b: model,
    c: year,
    d: color,
    getData: function() {return this.a +" "+this.b+" "+this.c+" "+this.d;}
  }
}
// input
var carFun= car ("asf","sf","asf","as");
carFun.getData();

// story2
var carFun = car();
function car(make,model,year,color){
  var speed = 17
  return{
    a: make,
    b: model,
    c: year,
    d: color,
    getData: function() {return this.a +" "+this.b+" "+this.c+" "+this.d;},
    getSpeed: function(){
      return speed;},
    accelerate: function(){
       speed = speed + 10;},
    brake: function(){
       speed = speed - 7;},
    }
}
// input
var carFun = car(1,2,3,4)
carFun.getSpeed()
carFun.accelerate()
carFun.getSpeed()

// story 3
var carFun = car();
function car(make,model,year,color){
  var speed = 17
  return{
    a: make,
    b: model,
    c: year,
    d: color,
    getData: function() {return this.a +" "+this.b+" "+this.c+" "+this.d;},
    getSpeed: function(){
      return speed;},
    accelerate: function(){
      while (speed<70){console.log(speed = speed +1);}
    },
    brake: function(){
      while(speed>0){console.log(speed = speed -1);}
    },
    rollerCoaster: function(){
      while (speed<70){console.log(speed = speed +1);}
      while (speed>0){console.log(speed = speed -1);}
    },
  }
}
// input
var carFun = car(1,2,3,4)
carFun.rollerCoaster()
// run rollerCoaster to do both loops at the same time

// story 4
// we did it :]




// story5
var carFun = car();
function car(make,model,year,color){
  var speed = 17
  return{
    a: make,
    b: model,
    c: year,
    d: color,
    getData: function() {return this.a +" "+this.b+" "+this.c+" "+this.d;},
    getSpeed: function(){
      return speed;},
    accelerate: function(){
      while (speed<85){console.log(speed = speed +1);}
    },
    brake: function(){
      while(speed>0){console.log(speed = speed -1);}
    },
    rollerCoaster: function(){
      while (speed<70){console.log(speed = speed +1);}
      while (speed>0){console.log(speed = speed -1);}
    },
    breakDownHill: function(){
      while(speed>0){
        console.log(speed=speed - (Math.floor((Math.random()*(speed/2))+1)));
      }
    }
  }
}
// input
var carFun = car(1,2,3,4)
carFun.breakDownHill()

'use strict'

console.log("hello world");

document.write("<h1> Object Demo </h1>");

const spaceship = {
  engine: "rocket",
  color: "Green",
  room: "cockpit",
  flying: function(){
    return("My Spaceship is powered by " + this.engine + " therefor it can fly!!!")
  }
}

console.log("my spaceship is", spaceship.color);

console.log(spaceship.flying());

document.write("<h2>", spaceship.flying(), "</h2>")
document.write("<h2> My spaceship is ", spaceship.color, " and has a ", spaceship.room, " for style and comfomort! <h2>")

function Icecream (flavor, dish, size){
  this.flavor = flavor;
  this.dish = dish;
  this.size = size;
}

Icecream.prototype.topping = "sprinkles"

const jaidynsIcecream = new Icecream ('coffee', 'cone', 'small');

const perlasIcecream = new Icecream ('carmel', 'cone', 'medium');

const tyisIcecream = new Icecream ('cookie dough', 'bowl', 'medium');

console.log(jaidynsIcecream);
console.log(perlasIcecream);
console.log(tyisIcecream, Icecream.prototype);
//Here we are generating the random name using npm tool
// var generateName = require('sillyname');
import generateName from "sillyname";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`)

//Here we are generating random super heroes name using npm tool
import superheroes from "superheroes";
const name = superheroes.random();
console.log(`I am ${name}!`)
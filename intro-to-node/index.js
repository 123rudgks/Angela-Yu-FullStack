const superheroes = require('superheroes');
const supervillains = require('supervillains');

let mySupervillainName = supervillains.random();
let mySuperheroName = superheroes.random();

console.log(mySuperheroName + " has fucked by " + mySupervillainName);
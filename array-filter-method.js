const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];
//***FILTER***
//1. Get characters with mass greater than 100
const characters100greater = characters.filter((character) => {
  return character.mass > 100;
});
console.log(characters100greater);
//2. Get characters with height less than 200
const characters200less = characters.filter((character) => {
  return character.height < 200;
});
console.log(characters200less);
//3. Get all male characters
const malecharacters = characters.filter((character) => {
  return character.gender === "male";
});
console.log("MALES");
console.log(malecharacters);
//4. Get all female characters
const femalecharacters = characters.filter((character) => {
  return character.gender === "female";
});

console.log("FEMALES");
console.log(femalecharacters);

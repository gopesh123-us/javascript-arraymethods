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
//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => {
  return acc + cur.mass;
}, 0);
console.log(totalMass);

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0);
console.log(totalHeight);

//3. Get total number of characters by eye color
const totalEyeColor = characters.reduce((acc, cur) => {
  if (cur.eye_color == "blue") {
    acc++;
  }
  return acc;
}, {});
console.log(totalEyeColor);

//4. Get total number of characters in all the character names
const totalNameCharacters = characters.reduce((acc, cur) => {
  return acc + cur.name.length;
}, 0);
console.log(totalNameCharacters);

const initialValue = 0;
const numbers = [5, 10, 15];
const reducer = (acc, cur) => {
  return acc + cur;
};

const total = numbers.reduce(reducer, initialValue);
console.log(total);

const startingValue = "Names: ";
const names = ["Gopesh", "Bhupesh", "Vaishali", "Kirti", "Shekhar"];
const reducerone = (greetings, curr) => {
  return (greetings = greetings + " " + curr);
};
const results = names.reduce(reducerone, startingValue);
console.log(results);

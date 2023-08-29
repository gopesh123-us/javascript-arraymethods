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

//4. Get total number of characters in all the character names

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

const numArray = [1, 2, [3, 5], [1, 2, [3, 4], 5], 6];

const flattenArray = (data) => {
  //initialValue
  const initialValue = [];
  return data.reduce((total, value) => {
    return total.concat(Array.isArray(value) ? flattenArray(value) : value);
  }, initialValue);
};

console.log(flattenArray(numArray));

//changing object structure using reduce method
//first - this is how to add a key and value to an object
obj = {};
obj["myname"] = "Gopesh Sharma";
obj["myage"] = 55;
console.log(obj);

//now final example from digital ocean;
//this is what server sends now
const pokemon = [
  { name: "charmander", type: "fire" },
  { name: "squirtle", type: "water" },
  { name: "bulbasaur", type: "grass" },
];

//this is what we can the server to send
const pokemonModified = {
  charmander: { type: "fire" },
  squirtle: { type: "water" },
  bulbasaur: { type: "grass" },
};

const getMapFromArray = (data) => {
  return data.reduce((acc, item) => {
    acc[item.name] = { type: item.type };
    return acc;
  }, {});
};

console.log(getMapFromArray(pokemon));

//exercies
//3. Get total number of characters by eye color
console.log("EXERCISE-3");

const initObj = {};
const mycharacters = characters;
const maptoArray = (acc, cur) => {
  if (acc[cur.eye_color]) {
    acc[cur.eye_color]++;
  } else {
    acc[cur.eye_color] = 1;
  }
  return acc;
};
const finalMap = mycharacters.reduce(maptoArray, initObj);
console.log(finalMap);

//4. Get total number of characters in all the character names
console.log("EXERCISE-4a");

const initialVal = {};
const totalcharacterreducer = (acc, item) => {
  acc[item.name] = item.name.length;
  return acc;
};
const totalchars = mycharacters.reduce(totalcharacterreducer, {});
console.log(totalchars);

console.log("EXERCISE-4b");
const sumofchars = mycharacters.reduce((acc, item) => acc + item.name.length, 0);
console.log(sumofchars);

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

//***MAP***
//1. Get array of all names
//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?

//***EVERY***
//1. Does every character have blue eyes?
const hasEyesBlue = characters.every((character) => {
  return character.eye_color === "blue";
});
console.log("has all blue eyes", hasEyesBlue);
//1b. Does every character have height less than 500?
const hasheightless500 = characters.every((item) => {
  return item.height < 500;
});
console.log("is all height less than 500", hasheightless500);

//2. Does every character have mass more than 40?
const allmess40 = characters.every((character)=>{
  return character.mass > 40;
});
console.log('all has mass more than 40', allmess40);

//3. Is every character shorter than 200?
const shorterthan200 = characters.every((character)=>{
  return character.height < 200;
});
console.log('is every character shorter than 200', shorterthan200);

//4. Is every character male?
const areAllMales = characters.every((character)=>{
  return character.gender === 'male';
});
console.log('are all males ',areAllMales);

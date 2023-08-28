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
  {
    name: "Gopesh Sharma",
    height: 188,
    mass: 55,
    eye_color: "green",
    gender: "male",
  },
];
//***MAP***
//1. Get array of all names
const allnames = characters.map((character) => {
  return character.name;
});
console.log(allnames);
//2. Get array of all heights
const allheights = characters.map((character) => {
  return character.height;
});
console.log(allheights);
//3. Get array of objects with just name and height properties
const nameHeightObjs = characters.map((character) => {
  return [{ name: character.name, height: character.height }];
});
console.log(nameHeightObjs);
//4. Get array of all first names
const firstNames = characters.map((character) => {
  return character.name.substring(0, character.name.indexOf(" "));
});
console.log(firstNames);

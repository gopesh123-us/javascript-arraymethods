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
    name: "Anakin Skywalker",
    height: 108,
    mass: 74,
    eye_color: "greeb-blue",
    gender: "female",
  },
  {
    name: "Gopesh Sharma",
    height: 188,
    mass: 55,
    eye_color: "green",
    gender: "male",
  },
];
//***SORT***
//1. Sort by mass
const sortedbymass = characters.sort((a, b) => a.mass - b.mass);
console.log(sortedbymass);

//2. Sort by height
const sortedbyheight = characters.sort((a, b) => a.height - b.height);

console.log(sortedbyheight);

//3. Sort by name
const sortedByName = characters.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  } else {
    return +1;
  }
});
console.log(sortedByName);

//4. Sort by gender
const byGender = characters.sort((a, b) => {
  if (a.gender === "female") {
    return -1;
  } else {
    return +1;
  }
});
console.log(byGender);

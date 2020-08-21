//1
const pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  //2
 const  getAge = pet =>new Date().getFullYear() - pet.bornOn;

//3
pets.forEach(pet=>{ 
pet.age=getAge(pet)

})
console.log(pets);
//4
let dogs = [];
dogs=pets.filter(pet => pet.type === 'dog');

console.log(dogs);

//5

let jasper=pets.find(pet=> pet.name==='Jasper');
console.log("Jasper is " + jasper.age + " years old");




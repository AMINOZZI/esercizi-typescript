//create object
const person: {
  name: string;
  age: number;
  // create a array
  hobbies: string[];
  // create a array with type inside
  role: [number, string];
} = {
  name: "Amedeo",
  age: 33,
  hobbies: ["Sports ,Cooking"],
  //use a tuple
  role: [2, "autore"],
};
person.role.push("admin");
console.log(person);

let favoriteActivities: string[];
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
favoriteActivities = ["Sports"];
console.log(person.name);
// ✅ variable declared successfully
//export {};

//nested
const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

//create object
const person = {
  //   name: string;
  //   age: number;
  // } = {
  name: "Amedeo",
  age: 33,
  hobbies: ["Sports ,Cooking"],
};
let favoriteActivities: string[];
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
favoriteActivities = ["Sports"];
console.log(person.name);
// ✅ variable declared successfully
export {};

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

//CREATE ENUM
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum PersonRole {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

//create object
const person: {
  name: string;
  age: number;
  // create a array
  hobbies: string[];
  // create a array with type inside
  role: [number, string];
  personRole: number;
} = {
  name: "Amedeo",
  age: 33,
  hobbies: ["Sports ,Cooking"],
  //use a tuple
  role: [2, "autore"],
  //INSERT IN OBJECT
  personRole: PersonRole.ADMIN,
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

if (person.personRole === PersonRole.ADMIN) {
  console.log("is ADMIN");
}

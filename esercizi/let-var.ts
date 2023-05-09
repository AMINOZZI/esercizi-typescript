const userName = "Ame";
//la definizione di costante è valore che non può essere riassegnato
let age = 30;
age = 29;

// let può essere riassegnata

//esempio di scope in var global deve essere assegnata fuori
//per accedervi
var result;
function aggiungi(a: number, b: number) {
  result = a + b;
  console.log(result);
  return result;
}

let isOld: boolean;
//esempio di if con let introduce il nuovo concetto di block scope all'interno del if
if (age > 20) {
  isOld = true;
  console.log(isOld);
}

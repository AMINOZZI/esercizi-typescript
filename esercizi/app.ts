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
  return result;
}

console.log(result);
let isOld: boolean;
//esempio di if
if (age > 20) {
  isOld = true;
  console.log(isOld);
}

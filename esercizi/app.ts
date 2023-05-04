let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "AME";
//se definisco una variabile con unKnown il tipo deve passare dentro un if
//per evitare che ci siano problemi di assegnazione
if (typeof userInput === "string") {
  userName = userInput;
}
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("an error occurred!", 500);

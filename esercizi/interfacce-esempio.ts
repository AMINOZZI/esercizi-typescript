//non esiste una trascrizione delle interfacce in javascript,la scrittura
//delle interfacce è puramente typescript

interface AddFn {
  (a: number, b: number): number;
}

interface Named {
  //segnado con il simbolo ? la proprietà può essere opzionale
  readonly name?: string;
}
// nella classe posso solo ereditare una volta mentre nelle interfacce posso ereditare da più interfacce
interface Greetable extends Named {
  greet(phrase: string): void;
}
class Person3 implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string): void {}
}

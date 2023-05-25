interface Named {
  readonly name: string;
}
// nella classe posso solo ereditare una volta mentre nelle interfacce posso ereditare da più interfacce 
interface Greetable extends Named {
  greet(phrase: string): void;
}
class Person2 implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string): void {}
}

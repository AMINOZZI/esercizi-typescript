abstract class Person {
  //Creo una classe Padre con la chiave abstract e posso derivare da quella classe una classe Lavoratori
  //Non possiamo creare un'istanza di una classe astratta.
  //la classe che estende deve definire tutti i metodi astratti
  //La seguente classe astratta dichiara un metodo astratto find include anche un metodo normale display.
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  display(): void {
    console.log(this.name);
  }

  abstract find(string): Person;
}

class Employee extends Person {
  empCode: number;

  constructor(name: string, code: number) {
    super(name); // must call super()
    this.empCode = code;
  }

  find(name: string): Person {
    // execute AJAX request to find an employee from a db
    return new Employee(name, 1);
  }
}

let emp: Person = new Employee("James", 100);
emp.display(); //James

let emp2: Person = emp.find("Steve");

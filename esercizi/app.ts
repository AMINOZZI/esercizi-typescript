// classe del oggetto con chiave e tipo
class Department {
  //variabile in sola lettura presente sono in typescript e non in js
  private readonly id: string;
  public name: string;
  //se definisco una classe private posso accervi solo all'interno della classe
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("department:" + this.name);
  }

  addEmployee(id, employee: string) {
    //this.id = id
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
  }
}

//istanza del oggetto
const accounting = new Department("Accounting");
accounting.addEmployee(this.id, "Ame");
accounting.addEmployee(this.id, "Mario");
//accounting.employees[2] = "Anna";

accounting.describe();
accounting.printEmployeeInformation();

// classe del oggetto con chiave e tipo
class Department {
  public name: string;
  //se definisco una classe private posso accervi solo all'interno della classe
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("department:" + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
  }
}

//istanza del oggetto
const accounting = new Department("Accounting");
accounting.addEmployee("Ame");
accounting.addEmployee("Mario");
//accounting.employees[2] = "Anna";

accounting.describe();
accounting.printEmployeeInformation();

// classe del oggetto con chiave e tipo
class Department {
  name: string;
  employees: string[] = [];

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
accounting.employees[2] = "Anna";

accounting.describe();
accounting.printEmployeeInformation();

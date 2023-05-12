// classe del oggetto con chiave e tipo
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}
//istanza del oggetto
const accounting = new Department("Accounting");
console.log(accounting);

class Person {
  //creo il membro protetto per la classe padre
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  //membro private posso accedere solo all'interno 
  private department: string;

  constructor(name: string, department: string) {
    //posso accedervi dalla super class all'inderno della classe che estendo
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());

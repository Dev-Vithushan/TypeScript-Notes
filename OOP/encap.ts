class Employee {
    name: string;
    salary: number;
  
    constructor(name: string, salary: number) {
      this.name = name;
      this.salary = salary;
    }
  }
  
  const employee = new Employee("Vithshan", 5000);
  console.log(employee.name);   // "John"
  employee.salary = 6000;       // Can directly modify the salary
  
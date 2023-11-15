/* 
Filename: sophisticated_code.js

Description: This code demonstrates an implementation of an employee management system. 
             It includes features such as adding, editing, and deleting employees, 
             calculating salaries, and generating reports. The code is designed to be 
             scalable and maintainable, utilizing advanced object-oriented programming 
             principles and design patterns.

Disclaimer: This code is for illustrative purposes only and may not include all necessary 
            validation checks or error handling. It should not be used in a production 
            environment without further testing and modifications. Use at your own risk.

*/

// Define Employee class
class Employee {
  constructor(id, name, position, salary) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  // Calculate employee's bonus based on position and salary
  calculateBonus() {
    let bonusPercentage = 0;

    switch (this.position) {
      case 'Manager':
        bonusPercentage = 0.2;
        break;
      case 'Supervisor':
        bonusPercentage = 0.15;
        break;
      case 'Assistant':
        bonusPercentage = 0.1;
        break;
      default:
        bonusPercentage = 0.05;
    }

    return this.salary * bonusPercentage;
  }
}

// Define EmployeeManagementSystem class
class EmployeeManagementSystem {
  constructor() {
    this.employees = [];
  }

  // Add a new employee
  addEmployee(id, name, position, salary) {
    const newEmployee = new Employee(id, name, position, salary);
    this.employees.push(newEmployee);
  }

  // Update an existing employee
  updateEmployee(id, name, position, salary) {
    const employee = this.findEmployeeById(id);
    if (employee) {
      employee.name = name;
      employee.position = position;
      employee.salary = salary;
    }
  }

  // Delete an employee by id
  deleteEmployee(id) {
    const index = this.findEmployeeIndexById(id);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }

  // Find an employee by id
  findEmployeeById(id) {
    return this.employees.find(employee => employee.id === id);
  }

  // Find the index of an employee by id
  findEmployeeIndexById(id) {
    return this.employees.findIndex(employee => employee.id === id);
  }

  // Calculate total salary of all employees
  calculateTotalSalary() {
    let totalSalary = 0;
    this.employees.forEach(employee => {
      totalSalary += employee.salary;
    });

    return totalSalary;
  }

  // Generate a report with employee information
  generateReport() {
    console.log('Employee Report:');
    console.log('----------------');

    this.employees.forEach(employee => {
      console.log(`ID: ${employee.id}`);
      console.log(`Name: ${employee.name}`);
      console.log(`Position: ${employee.position}`);
      console.log(`Salary: $${employee.salary}`);
      console.log('---');
    });
  }
}

// Usage example:

// Create an instance of the EmployeeManagementSystem
const empManagementSystem = new EmployeeManagementSystem();

// Add employees
empManagementSystem.addEmployee(1, 'John Doe', 'Manager', 5000);
empManagementSystem.addEmployee(2, 'Jane Smith', 'Supervisor', 4000);
empManagementSystem.addEmployee(3, 'Bob Johnson', 'Assistant', 3000);

// Update an employee
empManagementSystem.updateEmployee(2, 'Jane Johnson', 'Supervisor', 4500);

// Delete an employee
empManagementSystem.deleteEmployee(3);

// Calculate total salary
const totalSalary = empManagementSystem.calculateTotalSalary();
console.log(`Total Salary: $${totalSalary}`);

// Generate a report
empManagementSystem.generateReport();
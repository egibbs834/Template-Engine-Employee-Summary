class Employee {
    constructor(name, id, email, role) {
        this.name = name; 
        this.id = id; 
        this.email = email; 
        this.role = role;
    }

    getName() {
        return this.name; 
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role; 
    }
}

module.exports = Employee; 


// TODO: Write code to define and export the Employee class

// he first class is an `Employee` parent class with the following properties and
// methods:

//   * name
//   * id
//   * email
//   * getName()
//   * getId()
//   * getEmail()
//   * getRole() // Returns 'Employee'

{
  //inheritance that mean's extract of all about class from another class and set it to another classs.
  class Person {
    //we can do also
    // name:string;
    // age:number;
    // address:string;
    //we can also assign type then use on constructor. but we do that use parameter properties
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}
    //create method
    showSomething() {
      console.log("show something");
    }
  }

  //here i do use another class from this claa using extends---- its inheritance
  class Student extends Person {
    isStudent: boolean;

    constructor(
      name: string,
      age: number,
      address: string,
      isStudent: boolean
    ) {
      //need to call super causes super extract property value from another class like Person.
      super(name, age, address);
      this.isStudent = isStudent;
    }
    //create method
    showStudentData() {
      console.log(`${this.name} is student`);
    }
  }

  //then create instance with new keyword
  const instanceOfPerson = new Person("aban", 20, "hariyana");
  console.log(instanceOfPerson.showSomething());
  const instanceOfStudent = new Student("vumi",21,"hariyana",true);
  console.log(instanceOfStudent.showStudentData());
  //finally we can access any property or method from Person to Student/. causes we do inheritanse Person into Student.
}

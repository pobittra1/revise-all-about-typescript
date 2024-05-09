{
    //polymorphism---that means method's are same in another class also output type same but output is different- its polymorphism.
    class Person{
        //here as we can se that geetSlepp function in every class and return void but result is diferent like 8 hours, 7 hours , 6 hours --its polymorphism.
        getSleep():void{
            console.log("person is sleeping 8 hours");
        }
    }

    class Student extends Person{
        getSleep(): void {
            console.log("student is sleeping 7 hours");
        }
    }
    class Developers extends Person{
        getSleep(): void {
            console.log("developers are sleeping 6 hours");
        }
    }

    //call instance with func
    const getSleepingHours = (paramOfClass: Person)=>{
        paramOfClass.getSleep();
    }
    //create instance
    const person = new Person();
    const student = new Student();
    const developers = new Developers();

    //send data into func
    getSleepingHours(person);
    getSleepingHours(student);
    getSleepingHours(developers);
}
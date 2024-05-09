{
    //abstraction that mean's its like polymorphism. we can't see real implementaion but we can give an idea what is output

    {
        //abstraction with interface
        interface IVehicle {
            startEngine(): void;
            stopEngine():void;
        }

        //if i want to use type in class so we need to implements type.
        class Car implements IVehicle{
            startEngine(): void {
                console.log("engine is starting");
            }
            stopEngine(): void {
                console.log("engine is stopping");
            }
            //also we can use another method.
        } 
        console.log("output from interface abstract-------------------");
        //then create instance
        const toyota = new Car();
        toyota.startEngine();
        toyota.stopEngine();
    } 

    {
        //abstracton with abstract class
        //create abstract class / that means leader class. it's class following by another class.
        abstract class Vehicle {
            abstract startEngine():void;
            abstract stopEngine():void;
        }

        //then we need to extends leader class for use another class
        class Car extends Vehicle {
            startEngine(): void {
                console.log("car is starting");
            }
            stopEngine(): void {
                console.log("car is stopping");
            }
            //also we can use another method.
        }
        console.log("output from abstract class-----------------");

        //then create instance
        const toyota = new Car();
        toyota.startEngine();
        toyota.stopEngine();
    }
}
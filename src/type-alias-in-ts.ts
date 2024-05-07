{
  //type alias in ts
  {
    //create type alias that mean type of an data structure. use "type" keyword and name of first leter type alias should be capital leter. and before use I.
    type IUser = {
      name: string;
      age: number;
      address: string;
      isStudent: boolean;
      isAdult?: boolean; //optioanal tpye alias
    };

    //then use type alias
    const user: IUser = {
      //use type as object type
      name: "aban",
      age: 20,
      address: "hariyana",
      isStudent: true,
    };
    //console user
    console.log(user);
  }

  {
    //type alias in function
    //create type
    type IAddition = {
      (numOne: number, numTwo: number): number; // beffore : part is function params here and after : part is return type of a function.
    };

    //then use in a function this type
    const addition: IAddition = (numOne, numTwo) => {
      return numOne + numTwo;
    };
    //get data from type function
    const additionIs = addition(12, 5);
    console.log(additionIs);
  }
}

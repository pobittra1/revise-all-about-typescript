{
  //revise union and intersection type
  {
    //create type one
    type IPerson = {
      name: "aban";
      age: number;
      isStudent: "yes" | "no"; // string literal with union type.
      contactNo: string | number; // type with union type.
    };

    //create type 2
    type IExtraInfo = {
      address: string;
      gender: "male" | "female" | "others"; // string literal with union type. union type is male or female or others.
    };

    //concat type 1 and type 2 that mean's mix two types into one type or main type with &. it's ---INTERSECTION
    type IMainInfo = IPerson & IExtraInfo;

    //create data using type alias
    const student: IMainInfo = {
      name: "aban",
      age: 20,
      isStudent: "yes",
      contactNo: 2552732523,
      address: "hariyana",
      gender: "female",
    };
    console.log(student);
  }
}

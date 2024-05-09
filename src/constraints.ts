{
  //constraints that mean's we can validate generic data type. validate with direct assign data type or create another interface or type aliias.
  //example

  //create type of data
  type TData = {
    name: string;
    age: number;
    isStudent: boolean;
  };

  //here- T extends TData that means in T data type should be type as TData- we set data type of T that mean's its fixed type-its constraints
  const printData = <T extends TData>(paramOfData: T): void => {
    //destructure
    const { name, age, isStudent } = paramOfData;
    console.log(
      `her name is ${name}, her age is ${age}, and she is a student. it's ${isStudent}`
    );
  };

  //set data on type
  const data: TData = {
    name: "aban",
    age: 21,
    isStudent: true,
  };

  //call function
  printData(data);
}

{
  //constraints with keyof
  //that mean's we can also validate data type with any object of key.

  // in X we send obj and Y extends keyof X that's mean in Y should have key of X that mean's in Y should be "name" | "age" | "address".
  const getPropertyValOfObjKey = <X, Y extends keyof X>(
    paramOfObj: X,
    paramOfKey: Y
  ) => {
    return paramOfObj[paramOfKey];
  };

  const user = {
    name: "abna",
    age: 21,
    address: "hariyana",
  };
  const getVal = getPropertyValOfObjKey(user, "name");
  console.log(`name is ${getVal}`);
  const getValTwo = getPropertyValOfObjKey(user, "address");
  console.log(`address is ${getValTwo}`);
}

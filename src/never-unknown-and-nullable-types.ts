{
  //never, unknown and nullable types

  {
    //unknown
    const data: unknown = {
      name: "aban",
      age: 20,
    };
    //we cant do any operation with data causes it's unknown. so we need to ensure that its type. here is type assertion
    console.log(typeof data as Object); // type assertion and check type of data.
  }
  {
    //nullable
    //that means nullable type is null
    const data = (param: string | null) => {
      if (typeof param === "string") {
        console.log("its a string type");
      } else {
        console.log("its a nullable type");
      }
    };
    const resultOne = data("aban");
    const resultTwo = data(null);
  }

  {
    // //never
    // //that means never type cant return. it's infinity. never end. throw error
    // const throwError = (msg: string): never => {
    //   throw new Error(msg);
    // };

    // throwError("your code is'nt working"); // throw error causes its never type and we set customize error. so we need to comment it.
  }
}

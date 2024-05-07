{
  //about basics data types
  //there are two data types here.
  {
    //primitive data types
    //number
    const dataOfNumber: number = 12;
    //striing
    const dataOfString: string = "vumi";
    //boolean
    const dataOfBoolean: boolean = true;
    //null
    const dataOfNull: null = null;
    //undefined
    const dataOfUndefined: undefined = undefined;
    //symbol
    const dataOfSymbol = Symbol("symbol data");
  }
  {
    //non-primitive data types
    //array
    //same as string[], we can assign more data type of array like number array, boolean array, object array etc.
    const dataOfArray: string[] = ["vumi", "pobi"];
    //object
    //we need to set object property then can assign value.
    const dataOfObject: { name: string; age: number } = {
      name: "vumi",
      age: 12,
    };
    //tuple
    //that mean we can define more data types in array  and assign value following by index data type.
    const dataOfTuple: [string, number, boolean] = ["vumi", 12, true];
  }
}

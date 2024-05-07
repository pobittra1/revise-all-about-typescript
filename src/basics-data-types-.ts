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
    const dataOfArray: string[] = ["vumi", "pobi"];
    //object
    const dataOfObject: { name: string; age: number } = {
      name: "vumi",
      age: 12,
    };
    //tuple
    const dataOfTuple: [string, number, boolean] = ["vumi", 12, true];
  }
}

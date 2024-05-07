{
  /* //utilities type---- 
    1. pick type.
    2. omit type.
    3. required type.
    4. readonly type.
    5. record type.
    6. partial type.
*/

  {
    type IUser = {
      name: string;
      age: number;
      address: string;
      contactNo: string;
    };
    //Pick
    type typeOfPick = Pick<IUser, "name" | "age">; //that mean's name and age pick from IUser type and assign it into typeOfPick.
    //Omit
    type typeOfOmit = Omit<IUser, "age" | "address">; //opposite of Pick.
    //Required
    type typeOfRequired = Required<IUser>; // all value of IUser is required and assign it into typeOfRequired.
    //Readonly
    type typeOfReadonly = Readonly<IUser>; //all value is readonly
    //Record
    type typeOfRecord = Record<string, number>; //that mean's Record first parameter is key and second parameter value of this key.
  }
}

{
  //ternary, nullish coalescing in typescript.

  //nullish value is null or undefined. if i need on nullish value we can do this. its nullush coalescing.

  type IUser = {
    name: string;
    age: number;
    address: string;
    contactNo: null | undefined;
  };

  const user: IUser = {
    name: "aban",
    age: 20,
    address: "hariyana",
    contactNo: null,
  };

  const res = user.contactNo ?? "not found phone number"; //here is nullish coalescing with ??
  //or
  const resTwo = user.contactNo ? user.contactNo : "not found phone number"; //ternary
  console.log({ res, resTwo });

  //nullish coalescing operator
  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "not authentic";
  const result2 = isAuthenticated ? isAuthenticated : "not authentic";
  console.log({ result1 }, { result2 });
}

{
  //destructuring in ts
  {
    //destructuring with object
    const user: {
      name: string;
      age: number;
      address: string;
      quality: {
        isNurse: boolean;
        isStudent: boolean;
        isJob: boolean;
      };
    } = {
      name: "aban",
      age: 20,
      address: "hariyana",
      quality: {
        isNurse: true,
        isStudent: true,
        isJob: false,
      },
    };

    //this line is destructuring: objects
    const {
      name,
      age,
      quality: { isNurse, isJob }, // object in object
    } = user;
  }

  {
    //destructuring in array
    const persons: string[] = [
      "siki",
      "nikki",
      "thala",
      "aban",
      "kunjan",
      "narai",
    ];
    const [, , , love, ...meAndBro] = persons; // destructuring in array with rest operator. rest is meAndBro and love is aban, then first 3 comma of first 3 data of person.
    console.log(meAndBro, love);
  }
}

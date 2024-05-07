{
  //optional and literal types with object

  const dataOfobj: {
    name: string;
    age: number;
    address: string;
    contactNo?: string; // here is the optional operation. that mean's you give it i will want value. dont give it . no problem causes it's optional.
    gender: "women"; // it's literal type. you need to give value same as "women".
  } = {
    name: "aban",
    age: 18,
    address: "hariyana",
    // contactNo: "01712......" . it's optional
    gender: "women", //literal string
  };
}

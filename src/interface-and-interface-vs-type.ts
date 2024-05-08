{
  //interface, interface vs type

  //declare interface
  interface IPerson {
    name: string;
    age: number;
    address: string;
  }

  //concat two interface into one interface
  interface IMainPerson extends IPerson {
    gender: string;
  }

  //type vs interface
  //1. we can declare type using ={} but in interface just {}.
  //2. we can use type for all data type but interface only use for non-primitive data types.
  //3. we can concat type using intersection(&) but interface can contact using extends.
}

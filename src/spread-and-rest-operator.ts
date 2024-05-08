{
  //revise about spread and rest operator

  {
    //spread with array
    const arrOne: string[] = ["aban", "pinna", "anna"];
    const arrTwo: string[] = ["eri", "tera", "turi", "siki"];
    const mainArr: string[] = [...arrOne, ...arrTwo]; // here i contact two array in main array. (...arrTwo) mean's every single value of array will be separate.
    console.log(mainArr);
    // const mainArr:string[] = arrOne.splice(-1,0,...arrTwo); //same as previous but it's do change previous arr or reference.
  }

  {
    //spread with object
    const objOne = {
      name: "aban",
      age: 20,
    };
    const objTwo = {
      address: "hariyana",
      male: "women",
    };

    // here i contact two object in main object.
    const mainObj = {
      ...objOne,
      ...objTwo,
    };
  }

  {
    //rest parameter with function
    const restFunc = (...params: number[]): number => {
      // let prevVal: number = 0;
      const additionOfNumbers = params.reduce(
        (prevVal: number, currVal: number) => {
          return prevVal + currVal;
        }
      );
      return additionOfNumbers;
    };
    let result = restFunc(1, 2, 3, 4, 6, 4);
    console.log(result);
  }
}

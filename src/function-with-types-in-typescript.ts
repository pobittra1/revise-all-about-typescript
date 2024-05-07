{
  //function with type in typescripts
  {
    //normal function
    function addition(numOne: number, numTwo: number): number {
      return numOne + numTwo;
    }
    const resultOfAddition = addition(12, 5);
    console.log(resultOfAddition);
  }
  {
    //arrow function
    const substraction = (numOne: number, numTwo: number): number =>
      numOne - numTwo;

    const resultOfSubtraction = substraction(12, 5);
    console.log(resultOfSubtraction);
  }
}

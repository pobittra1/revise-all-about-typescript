"use strict";
{
    //about basics data types
    //there are two data types here.
    {
        //primitive data types
        //number
        const dataOfNumber = 12;
        //striing
        const dataOfString = "vumi";
        //boolean
        const dataOfBoolean = true;
        //null
        const dataOfNull = null;
        //undefined
        const dataOfUndefined = undefined;
        //symbol
        const dataOfSymbol = Symbol("symbol data");
    }
    {
        //non-primitive data types
        //array
        //same as string[], we can assign more data type of array like number array, boolean array, object array etc.
        const dataOfArray = ["vumi", "pobi"];
        //object
        //we need to set object property then can assign value.
        const dataOfObject = {
            name: "vumi",
            age: 12,
        };
        //tuple
        //that mean we can define more data types in array  and assign value following by index data type.
        const dataOfTuple = ["vumi", 12, true];
    }
}

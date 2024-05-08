{
    //type asser or type narrowing
    //that means we set type forcely when we know coming data type of unknown.

    //create unknown data type
    let data: unknown = "aban";
    //in this unknown type we can add anything
    data = 22;
    data = true;
    //but we don't want. so we need to forcely set type.
    let strData = data as string; //its a type assertion or type narrownig

    // strData = 12; //now we can't assign number causes it's string type alreasy forcely said that. that why shown error.
}
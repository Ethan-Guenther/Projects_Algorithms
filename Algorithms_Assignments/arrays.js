//Array Problem 1: PUSH TO FRONT

var newArray = [8,1,5,6,8,3,50,30];
var insert = 65;
//PROBLEM 1 FUNCTION
const  pushFront = (array, value) => 
{
    var pushArray = array;

    for(var i = pushArray.length -1; i >= 0; i--)
    {
        pushArray[i+1] = pushArray[i];
        console.log(`Count: ${i}: ${pushArray}`)
    }
    pushArray[0] = value;


    return pushArray;
}

//PROBLEM 2 FUNCTION
const popFront = (array) => {
    var popArray = array;
    console.log(`Front Value: ${popArray[0]}`);
    console.log(`Full Array: ${popArray}`)

    for(var i = 0; i < popArray.length; i++)
    {
        popArray[i] = popArray[i + 1];
    }
    popArray.length = popArray.length -1;

    console.log(`POPARRAY: ${popArray}`)
}

//PROBLEM 3 FUNCTION
const insertAt = (array, index, value) => {
    insertedArray = array;
    console.log(`Full Array: ${insertedArray}`);

    for(var i = insertedArray.length; i >= index; i--)
    {
        insertedArray[i] = insertedArray[i-1];
        console.log(insertedArray);
    }
    insertedArray[index] = value;
    console.log(`INSERTED ARRAY: ${insertedArray}`);
}


console.log("PUSH FRONT")
console.log(`value: ${insert}, array:${newArray}, ArrayLength: ${newArray.length}`);

var newArray = pushFront(newArray, insert);

console.log(`value: ${insert}, array:${newArray}`);

//Array Problem 2: POP FRONT 
console.log("POP FRONT");
popFront(newArray);

//Array Problem 3: INSERT AT
insertAt(newArray, 5, 8000);
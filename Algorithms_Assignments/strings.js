//String Problem 1: Remove Blanks from a string

var spacedString = 'DoY ou Kn ow T he Muff in m an';
var getDigitString = 'a123sd5fd4sdf84sdf65d99';
var acronym = 'Do you even know the muffin man';
var sArray = ['asdfasdfad','asd', 'as', 'a', 'asdf', 'asdfg'];
//String function for Problem 1
const removeBlanks = (stringBlanks) => {
    var cleanString = '';

    for(var i = 0; i < stringBlanks.length; i++)
    {
        if(stringBlanks[i] === " ")
        {
            
        }
        else
        {
            cleanString = cleanString + stringBlanks[i];
        }
    }
    console.log(cleanString)
}
//String Problem 2: Retain only digits from a string
const getDigits = (digitString) => {
    var justDigits = '';
    {
        for(var i = 0; i < digitString.length; i ++)
        {
            !isNaN(digitString[i]) ? justDigits = justDigits + digitString[i]
            : null; 
            console.log(`CleanUp String: ${justDigits}`)
        }
        console.log(justDigits)

    }

}
//String problem 3: Acronym- given a string Return only the first letter of the word capitalized
const getAcronym = (acronymString) => {
    let acrString = '';
    let acrArray = acronymString.split(" ");

    for(let i in acrArray)
    {
        if(acrArray.length > 0)
        {
            acrString += acrArray[i][0].toUpperCase()
        }
    }
    console.log(acrString)
}

//String Problem 4: return the number of non-space characters
const nonSpaceCount = (countString) => {
    let count = 0;
    for(i = 0; i < countString.length; i++)
    {
        if(countString[i] != " ")
        {
            count++;
        }
    }
    console.log(count);
}

//String Problem 5: Given an array of String and a numerical value, remove any String in the array
// with a length less than the value
const removeShortString = (stringArray, value) => {
    let shortArray = [];
    let index = 0;
    for(var i = 0; i < stringArray.length; i++)
    {
        if(stringArray[i].length >= value)
        {
            shortArray[index++] = stringArray[i];

        }
    }

    console.log(shortArray)
}

removeBlanks(spacedString);
getDigits(getDigitString);
getAcronym(acronym);
nonSpaceCount(spacedString);
removeShortString(sArray, 5);




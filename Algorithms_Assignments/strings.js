//String Problem 1: Remove Blanks from a string

var spacedString = 'DoY ou Kn ow T he Muff in m an';
var getDigitString = 'a123sd5fd4sdf84sdf65d99';
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

removeBlanks(spacedString);
getDigits(getDigitString);
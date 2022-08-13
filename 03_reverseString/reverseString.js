const reverseString = function(stringIn) {
    let stringOut = '';
    let stringLen = 0;
    stringLen = stringIn.length;
    let newLength = stringLen - 1;

    for (let i = 0; i < stringLen; i++)
    {
        stringOut += stringIn.substr(newLength, 1);
        newLength--;
    }

    return stringOut;
};

// Do not edit below this line
module.exports = reverseString;

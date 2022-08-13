const repeatString = function(stringIn, num) {
    let stringOut = '';
    for (let i = 0; i < num; i++)
    {
        stringOut += stringIn;
    }
    return stringOut;
};

// Do not edit below this line
module.exports = repeatString;

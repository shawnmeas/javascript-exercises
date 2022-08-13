const repeatString = function(stringIn, num) {
    if (num < 0) return "ERROR";
    let stringOut = '';
    for (let i = 0; i < num; i++)
    {
        stringOut += stringIn;
    }
    return stringOut;
};

// Do not edit below this line
module.exports = repeatString;

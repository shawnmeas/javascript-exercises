const sumAll = function(num1, num2) {
    if(!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if(num1 < 0 || num2 < 0) return "ERROR";
    let numOut = 0;

    firstNum = Math.min(num1, num2);
    secondNum = Math.max(num1, num2);
    for(let i = firstNum; i <= secondNum; i++)
    {
        numOut += i;
    }

    return numOut;
};

// Do not edit below this line
module.exports = sumAll;

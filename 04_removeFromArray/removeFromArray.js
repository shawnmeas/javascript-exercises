const removeFromArray = function(...args) {
    let arrayIn = args[0];
    let arrayOut = [];

    arrayIn.forEach((i) =>
    {
        if (!args.includes(i))
        {
            arrayOut.push(i);
        }
    });
    
    return arrayOut;
};

// Do not edit below this line
module.exports = removeFromArray;

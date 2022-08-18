const fibonacci = function(a) {
    if(a <= 0)
        return 'OOPS';

    let result = 0;
    let fiboNum = 1;
    let old;
    for(let i = 1; i < a; i++)
    {
        old = fiboNum;
        fiboNum = result + fiboNum;
        result = old;
    }
    return fiboNum;

};

// Do not edit below this line
module.exports = fibonacci;

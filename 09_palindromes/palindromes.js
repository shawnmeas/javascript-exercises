const palindromes = function (input) {
    let output = '';
    input = input.toLowerCase();
    input = input.replace(/[^a-z0-9]/gi, '');
    for(let i = input.length; i >= 0; i--)
        output = output + input.slice(i-1, i);

    if(output == input)
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = palindromes;

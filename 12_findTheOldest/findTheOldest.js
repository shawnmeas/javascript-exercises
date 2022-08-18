const findTheOldest = function(a) {
    let oldest = 0;
    let oldestIndex, age;
    for(let i = 0; i < a.length; i++)
    {
        if(a[i].yearOfDeath)
            age = a[i].yearOfDeath - a[i].yearOfBirth;
        else
            age = 2022 - a.[i].yearOfBirth;
        if(age > oldest)
        {
            oldest = age;
            oldestIndex = i;
        }
    }

    return a[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;

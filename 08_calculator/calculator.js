const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(a) {
  let result = 0;
  for(let i = 0; i < a.length; i++)
    result = result + a[i];
	return result;
};

const multiply = function(a) {
  let result = a[0];
  for(let i = 1; i < a.length; i++)
    result = result * a[i];
  return result;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
  if(a == 0)
    return 1;
  let result = 1;
  for(let i = a; i > 0; i--)
    result = result * i;
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

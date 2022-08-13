const ftoc = function(tempIn) {
  let tempOut;
  
  tempOut = (tempIn - 32) * (5/9);
  tempOut = Math.round(tempOut * 10) / 10;

  return tempOut;
};

const ctof = function(tempIn) {
  let tempOut;

  tempOut = (tempIn * (9/5) + 32);
  tempOut = Math.round(tempOut * 10) / 10;

  return tempOut;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

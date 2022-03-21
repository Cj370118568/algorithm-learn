/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var i = 0
  
  while(digits[digits.length-1-i]==9) {
    digits[digits.length-1-i]=0
    i++
  }
  if (i!=0) {
    
    if(i==digits.length) {
      digits.push(digits[i-1])
      digits[digits.length-i-1]=1
    } else {
      digits[digits.length-1-i] += 1
      // digits[digits.length-1] += 1
    }
  } else {
    digits[digits.length-1] += 1
  }

  return digits
};

var digits = [8,9,9,9]
console.log(plusOne(digits))
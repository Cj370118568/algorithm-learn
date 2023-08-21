/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
  if(target===start) return true;
  var canMove = false
  var process = function (start, target) {
    for(var i = 0; i < start.length; i++) {
      if(start[i]!== target[i]) return process(start[i+1], target[i+1]);
      else {
        if(target[i] === "R")
      }

  
  }
  canMove =  process(start, target);
  return canMove;
};

var start = "_L__R__R_", target = "L______RR"
console.log(canChange(start, target));
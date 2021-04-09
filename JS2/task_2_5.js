const checkForSpam = function(message) {
//let hello = 'hello pam world';
let ban1 = 'SPAM';
let ban2 = 'SALE';
let val;
let strH = message.toUpperCase();
if (strH.includes(ban1) || strH.includes(ban2)) 
{
  val = true;
} else
{
  val = false;
}
return val;
}
// console.log(val)
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

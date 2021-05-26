let salary = { 
  mango: 100,
  poly: 150,
  alfred: 80,
}

const countTotalSalary = function(salary) {
  let sal = Object.values(salary)
  let salLength = sal.length;
  let salAll = 0;
  for (let i=0; i<salLength; i+=1) 
    {
      salAll = salAll + sal[i];
    }
  // console.log(salAll);
  return salAll;
}
console.log(countTotalSalary({})); // 0
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330
console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400

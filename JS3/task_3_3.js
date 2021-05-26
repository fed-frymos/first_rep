const findBestEmployee = function(people) 
{
  let values = Object.values(people)
  let valuesLength = values.length;
  let val = values[0];
  let keys = Object.keys(people);
  let key = keys[0];
  for (let i=0; i<valuesLength; i+=1) 
  {
  // console.log(values)
    if (val < values[i]) 
    {
      val = values[i];
      key = keys[i];
      // console.log(key);
      // console.log(val);
    }
  }
  return `${val}: ${key}`
}
// console.log(`${val}: ${key}`);
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango
console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux

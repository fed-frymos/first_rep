
const logItems = function(array) {
  let arrLength = array.length;
  console.log(arrLength);
  for (let i = 0; i <= arrLength - 1; i = i + 1) {
    console.log(`${i+1} - ${array[i]}`)
  }
}
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);  
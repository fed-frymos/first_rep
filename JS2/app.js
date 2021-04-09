// let arrNumbers = [10, 20, 30, 40];
// let arrNames = ['vova', 'sara', 'bob'];
// let cartItems = ['apples', 'bananas', 'sumsumg', 'cake'];
// let arrlength = arrNumbers.length;
// console.log(cartItems[1]);
// console.log(cartItems[0]);
// console.log(cartItems[3]);
// console.log(cartItems);
// console.log(Array.isArray(arrNumbers));

// arrNames[2] = 'conor';
// console.log(arrNames);
// delete cartItems[2];
// console.log(cartItems);
// console.log(cartItems[2]);
// arrNames[20] = 'john';
// console.log(arrNames);
// console.log(arrNames[15]);

// let str = 'to be or not to be that is the question'
// console.log(str)
// let strToArr = str.split(' ')
// console.log(Array.isArray(strToArr))
// console.log(strToArr)
// let revArr = strToArr.reverse();
// let revStr = revArr.join(' ')
// console.log(revStr)

// Splice ARR 
//splice(startIdex, qty)
// let arrN = [10, 20, 30, 40, 50, 60, 70];
// console.log(arrN)
// console.log(arrN.length)

// let val = arrN.splice(); // [] удаляет все внутри массива
// let  val = arrN.splice(0); // copy если ноль то создает копию массива
// let  val = arrN.splice(1); //  10
// let  val = arrN.splice(2); // 10, 20
// let val = arrN.splice(3, 3);
// console.log(val)

// let cartItems = ['apples', 'bananas', 'potato'];
// cartItems.push('pizza');
// cartItems.push('gamburger');
// cartItems.push('qwe', 'asd', 100)
// console.log(cartItems)
/////////////////////////////////////////////////////////
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// console.log(user);
// user.mood = 'happy';
// console.log(user);
// user.premium = false;
// console.log(user);
////////////////////////////////
let likes = {
  good: 5,
  neutral: 30,
  bad: 2
}

let totalProps = 0;
for (let key in likes) {
  console.log(key)
  console.log(likes[key])
  console.log(`${key}: ${likes[key]}`)
  //totalProps += likes[key]
}
console.log(totalProps)

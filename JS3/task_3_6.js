
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];
  let TotalPrice;
  let proLength = products.length;
  // console.log(products[0].name);
  const calculateTotalPrice = function(allProdcuts, prod) {
    for (let i =0; i < proLength; i +=1)
    {
      if (products[i].name === prod)
      {
        console.log(products[i].name);
        TotalPrice = products[i].price * products[i].quantity;
      } 
    }
    return TotalPrice;
  }
  console.log(calculateTotalPrice(products, 'Радар')); // 5200
  console.log(calculateTotalPrice(products, 'Дроид')); // 2800
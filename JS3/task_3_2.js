const countProps = function(obj) {
    let Mas = Object.keys(obj);
  // console.log(likeMas);
  let MasLength = Mas.length;
  // console.log(likeMasLength);
  return MasLength;
  };
  
  console.log(countProps({})); // 0
  console.log(countProps({ name: 'Mango', age: 2 })); // 2
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
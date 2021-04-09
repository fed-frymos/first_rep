const calculateEngravingPrice = function(message, pricePerWord) {
    let arr = message.split(' ');
    let arrLength = arr.length;
    let priceAll = pricePerWord * arrLength;
    return (message, priceAll);
    }
    console.log(
        calculateEngravingPrice(
          'Proin sociis natoque et magnis parturient montes mus',
          10,
        ),
      ); // 80
      console.log(
        calculateEngravingPrice(
          'Proin sociis natoque et magnis parturient montes mus',
          20,
        ),
      ); // 160
      console.log(
        calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
      ); // 240
      console.log(
        calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
      ); // 120
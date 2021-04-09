const findLongestWord = function(stroka) {
    let arrStroka = stroka.split(' ');
    let arrLength = arrStroka.length;
    let maxItems = arrStroka[0].length;
    let Item = arrStroka[0];
    for (let i = 0; i <= arrLength-1; i+=1) 
    {
      if (arrStroka[i].length > maxItems) 
      {
        maxItems = arrStroka[i].length;
        Item = arrStroka[i];
      }
    }
    
    return Item;
    }
    console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
    console.log(findLongestWord('Google do a roll'));
    console.log(findLongestWord('May the force be with you'));
    
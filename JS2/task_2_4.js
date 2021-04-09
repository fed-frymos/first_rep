const formatString = function(strok) {
    let strLength = strok.length;
    console.log(strLength);
    let str;
    if (strLength > 40)
    {
      str = `${strok.slice(0, 40)}...`;
      //console.log(str);
    } else if (strLength <= 40)
    {
      str = strok;
      //console.log(str);
    }
  return str;
  }
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  console.log(formatString('Curabitur ligula sapien.'));
  console.log(
    formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
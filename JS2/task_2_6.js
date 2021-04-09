const numbers = [];
let input;
let sum = 0;
for (let i = 0; i < 1; i += 1) 
{
  input = prompt('ВВедите число: ');
  // console.log('!!!!input: ', input);
  if (input === null)
  {
    let numLeng = numbers.length;
  // console.log('numLeng: ',numLeng);
    for (let i = 0; i < numLeng; i += 1)
    {
      sum = sum + numbers[i];
    }
      console.log('Общая сумма чисел равна: ', sum);  
  } else 
  {
    if (!isNaN(input))
    {
      input = Number(input);
      console.log('input: ', input);
      numbers.push(input); 
  // numbers.push(8); 
      console.log('numbers: ', numbers);
      i -= 1;
    } else 
    {
      alert('Было введено не число, попробуйте еще раз!!');
      i -= 1;
    }
  }

}
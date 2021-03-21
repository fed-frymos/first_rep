// Задание 6
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, 
// пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к 
// общей сумме.
// При загрузке страницы пользователю предлагается в prompt ввести число. 
// Ввод добавляется к значению переменной total. Операция ввода числа продолжается 
// до тех пор, пока пользователь не нажмет кнопку Cancel в prompt. 
// После того как пользователь прекратил ввод нажав кнопку Cancel, 
// показать alert со строкой 'Общая сумма чисел равна [сумма]'. bell 
// Делать проверку того, что пользователь ввел именно число, а не произвольный 
// набор символов, не нужно. Если хочешь, в случае некорректного ввода, 
// показывай alert с текстом 'Было введено не число, попробуйте еще раз', 
// при этом результат prompt плюсовать к общей сумме не нужно, после чего 
// снова пользователю предлагается ввести число в prompt.
// let input; 
// let total = 0; (edited) 
let input; 
let total = 0; 
input = prompt("vvedi 4islo:");
console.log("peremennaya: ", input);
input = Number(input);
//console.log("tip peremennoy: ", typeof input);

for (total=input; input!=null; total+=Number(input)) {
//console.log(input);
console.log("vsego: ", total);
input = prompt("vvedi 4islo:");
console.log("tip peremennoy: ", typeof input);
console.log(input);
if (input===null) {
    alert("Общая сумма чисел равна " + total); 
    console.log("peremen", input);
}

}  
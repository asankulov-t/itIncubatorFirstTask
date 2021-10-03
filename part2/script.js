
//6
// Создать функцию superSum, которая будет в алерте показывать сумму ЛЮБЫХ двух чисел, переданных этой функции через параметры
document.getElementById('plus').addEventListener('click',function () {
    let valu1=document.getElementById('input1').value;
    let valu2=document.getElementById('input2').value;
    function superSum(value, value2){
        alert(Number(value)+Number(value2))
    }
    superSum(valu1,valu2)
})

//7
// Создать массив из чисел в перемешку (не отсортированы).
// С помощью цикла for найти максимальный и минимальный элементы в массиве
let some=document.onload=function (arr) {
    let min=arr[0];
    let max=arr[0];
    for (let i=0;i<arr.length;i++){
        if (max<arr[i]){
            document.getElementById('max').innerText=arr[i]
        }else if (min>=arr[i]){
            document.getElementById('min').innerText=arr[i]
        }
    }
}
some([15,55,66,-5])

//8
// Создать 2 переменные a и b… присвоить им любые значения.
// Потом программно поменять эти значения местами, не используя значения напрямую

let a='XXX';
let  b='YYY';
[a, b] = [b, a];
console.log(a)
console.log(b)

//9
// Оформить алгоритм поиска максимального числа в массиве как функцию findMax
// (чтобы можно было передавать в неё любой массив чисел, а на выходе она возвращала нам максимальное число из массива)

function findMax(arr) {

     let max=arr[0];
    let maxNum=0
    for (let i=0; i<arr.length;i++){
     if (max<arr[i]){
        maxNum=arr[i]
        }
    }
    return maxNum

}

console.log(findMax([55,20,66,100]))
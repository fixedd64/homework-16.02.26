// Задача 1

/*
    Создайте функцию calculate, которая возвращает результат арифметические операции + - * / 

    Создайте функции "sum" "sub" "muv" "div", которые возвращают результат арифетической операции,
    функции принимают два параметра:
        operand1 - число, операнд 1
        operand2 - число, операнд 2

    Функция calculate вызывает переданную функцию, передавая ей два числа в качестве аргументов, и возвращает результат.

    Функция calculate принимает парамеры
    x - число, операнд 1
    y - число, операнд 2
    fn - функция (callback), представляющая собой одну из арифметических операций (sum, sub, muv, div).
*/

// function sum(operand1, operand2) {
//     return operand1 + operand2;
// }

// function sub(operand1, operand2) {
//     return operand1 - operand2;
// }

// function muv(operand1, operand2) {
//     return operand1 * operand2;
// }

// function div(operand1, operand2) {
//     return operand1 / operand2;
// }

// function calculate(x, y, fn) {
//     return fn(x, y);
// }

// console.log(calculate(5, 4, sum)); // Вывод: 9
// console.log(calculate(5, 4, sub)); // Вывод: 1
// console.log(calculate(5, 4, muv)); // Вывод: 20
// console.log(calculate(5, 4, div)); // Вывод: 1.25


//------------------------------------------------------------------------------------------------------------


// Задача 2

/*
    Создайте функцию myFilter, которая возвращает отфильтрованый массив

    Функция myFilter принимает парамеры
    - arr - массив чисел, 
    - fn - функция (callback), odd, even, greaterThan5, lesserThan5, equal5.


    Создайте функции  odd, even, greaterThan5, lesserThan5, equal5, noEqual5, функции  возвращают true или false :

        even - проверяет явл ли значение(число) четным
        odd  - проверяет явл ли значение(число) НЕ четным

        greaterThan5 - проверяет явл ли  значение больше 5
        lesserThan5  - проверяет явл ли  значение меньше 5
        
        equal5   - проверяет явл ли  значение равно 5
        noEqual5 - проверяет явл ли  значение НЕ равно 5

    В зависимости от функции, которая передавалась функция возвращает отфильтрованый массив
*/

// let arr = [1,2,3,4,5,6,7,8,9]

// function even(num) {
//     return num % 2 === 0;
// }


// function odd(num) {
//     return num % 2 !== 0;
// }

// function greaterThan5(num) {
//     return num > 5;
// }

// function lesserThan5(num) {
//     return num < 5;
// }


// function equal5(num) {
//     return num === 5;
// }

// function noEqual5(num) {
//     return num !== 5;
// }

// function myFilter(arr, fn) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (fn(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }




// console.log(myFilter(arr, odd));  // [1,3,5,7,9]
// console.log(myFilter(arr, even)); // [2,4,6,8]

// console.log(myFilter(arr, greaterThan5)); // [6,7,8,9]
// console.log(myFilter(arr, lesserThan5));  // [1,2,3,4]

// console.log(myFilter(arr, equal5));   // [5]
// console.log(myFilter(arr, noEqual5)); // [1,2,3,4,6,7,8,9]



//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
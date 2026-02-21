// Перебирающие методы массивов

//------------------------------------------------------------------------------------------------------------

// let arr1 = [1,2,3,4,5,6,7,8,9]
// let arr2 = ["London", "Paris", "Berlin", "Rome"];
// let users = [
//   // [id, name,     age, isCar, address[city, country],    developer,    level,   salary]
//   [ 0, "Ivan",      25, true,  [ "Kyiv", "Ukraine" ],     "FrontEnd",  "Junior", 1200],
//   [ 1, "Oleh",      25, true,  [ "Kyiv", "Ukraine" ],     "FrontEnd",  "Junior", 1200],
//   [ 2, "Sofia",     30, false, [ "Kharkiv", "Ukraine"  ], "FullStack", "Senior", 3500],
//   [ 3, "Danil",     22, true,  [ "Kharkiv", "Ukraine"  ], "FrontEnd",  "Junior", 1700],
//   [ 4, "Maxym",     28, true,  [ "Kharkiv", "Ukraine"  ], "BackEnd",   "Junior", 1700],
//   [ 5, "Andrey",    35, false, [ "Kharkiv", "Ukraine"  ], "DevOps",    "Junior", 1700],
//   [ 6, "Anna",      29, false, [ "Lviv", "Ukraine" ],     "FrontEnd",  "Junior", 1500],
//   [ 7, "Artem",     26, true,  [ "Kyiv", "Ukraine" ],     "FullStack", "Middle", 3500],
//   [ 8, "Ivan",      24, false, [ "Lviv", "Ukraine" ],     "DevOps",    "Junior", 1700],
//   [ 9, "Igor",      27, true,  [ "Kharkiv", "Ukraine"  ], "FrontEnd",  "Junior", 1200],
//   [10, "Iryna",     33, true,  [ "Kharkiv", "Ukraine"  ], "BackEnd",   "Middle", 3500],
//   [11, "David",     31, true,  [ "Odessa", "Ukraine" ],   "BackEnd",   "Middle", 3500],
//   [12, "Andrey",    23, false, [ "Kharkiv", "Ukraine"  ], "DataBase",  "Senior", 4000],
//   [13, "Sofia",     30, true,  [ "Lviv", "Ukraine" ],     "BackEnd",   "Middle", 2500],
//   [14, "Roman",     29, true,  [ "Kharkiv", "Ukraine"  ], "FullStack", "Senior", 3800],
//   [15, "Mykola",    28, false, [ "Kharkiv", "Ukraine"  ], "BackEnd",   "Senior", 3200],
//   [16, "Katya",     26, false, [ "Odessa", "Ukraine" ],   "FrontEnd",  "Middle", 2000],
//   [17, "Oksana",    27, true,  [ "Kyiv", "Ukraine" ],     "DataBase",  "Middle", 2500],
//   [18, "Anastasia", 25, false, [ "Kharkiv", "Ukraine"  ], "DevOps",    "Junior", 3800],
//   [19, "Mykola",    22, true,  [ "Kharkiv", "Ukraine"  ], "FrontEnd",  "Senior", 3500],
//   [20, "Olena",     24, true,  [ "Kyiv", "Ukraine" ],     "FrontEnd",  "Junior", 1700],

// ]



//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------


// Перебирающие методы массивов find/findIndex, filter, sort, forEach, map, some/every, reduce,   keys/values/entries

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

// Перебирающие методы массивов принимают как параметр callback функцию, 
//   arr.method(callback)

// которая принимает до 3 параметров
//   arr.method(callback[currentValue, index, array])

// Перебирающие методы массивов принимают как параметр callback функцию, которая принимает до 3 параметров
// arr.method((element, index, array) => console.log(element, index, arrat))

// element - текущий обрабатываемый  элемент
// index - индекс текущего обрабатываемого элемента
// array - этот же массив, который перебираеться

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------



// Задача 1

/*
  Выведите каждый элемент массива с использованием  перебирающих методов (forEach или map)

*/

// let arr = [1,2,3,4,5,6,7,8,9];

// arr.map(element => console.log(element));




//------------------------------------------------------------------------------------------------------------

// Задача 2

/*
  Выведите суму элементов массива, с использованием перебирающих методов (forEach или map)

  **
  Используйте метод reduce
*/


// let arr = [1,2,3,4,5,6,7,8,9];
// let sum = 0;

// arr.map(item => sum += item);

// console.log(sum);


//------------------------------------------------------------------------------------------------------------



// Задача 3

/*
  Выведите новый массив, который содержит четные элементы массива, с использованием перебирающих методов (forEach или map )

  **
  Используйте метод reduce.
*/

// let arr = [1,2,3,4,5,6,7,8,9];

// const even = arr.reduce((acc, num) => {
//   if (num % 2 === 0) acc.push(num);
//   return acc;
// }, []);

// console.log(even);





//------------------------------------------------------------------------------------------------------------


// Задача 4

/*
  Выведите новый массив, который содержит НЕ четные элементы массива,  с использованием перебирающих методов (forEach или map )

  **
  Используйте метод reduce.
*/

// let arr = [1,2,3,4,5,6,7,8,9]

// const even = arr.reduce((acc, num) => {
//   if (num % 2 !== 0) acc.push(num);
//   return acc;
// }, []);

// console.log(even); 


//------------------------------------------------------------------------------------------------------------


// Задача 5

/*
  Выведите новый массив, который содержит элементы массива больше 5, с использованием перебирающих методов (forEach или map )

  **
  Используйте метод reduce.
*/

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let result = arr.reduce((acc, num) => {
//   if (num > 5) {
//     acc.push(num);
//   }
//   return acc;
// }, []);

// console.log(result); 



//------------------------------------------------------------------------------------------------------------


// Задача 6

/*
  Выведите новый массив, который содержит элементы массива меньше 5,  с использованием перебирающих методов (forEach или map )

  **
  Используйте метод reduce.
*/

// let arr = [1,2,3,4,5,6,7,8,9]

// let result = arr.reduce((acc, num) => {
//   if (num < 5) {
//     acc.push(num);
//   }
//   return acc;
// }, []);

// console.log(result); 



//------------------------------------------------------------------------------------------------------------

// Задача 7

/*
  Выведите элементы массива, если длина элемента больше 3 символов, с использованием перебирающих методов (forEach или map )
*/


// let arr = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Voluptatem', 'sequi']


// let result = arr.reduce((acc, item) => {
//   if (item.length > 6) {                      // поміняв на 6
//     acc.push(item);
//   }
//   return acc;
// }, []);

// console.log(result); 


//------------------------------------------------------------------------------------------------------------

// Задача 8

/*
  Выведите новый массив, если длина элемента (строки) больше 3 символов, с использованием перебирающих методов (forEach или map )

  **
  Используйте метод reduce для выполнения задачи.
*/


// let arr = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Voluptatem', 'sequi']

// let result = arr.reduce((acc, str) => {
//     if (str.length > 6) {                 // поміняв на 6
//         acc.push(str);
//     }
//     return acc;
// }, []);

// console.log(result); 





//------------------------------------------------------------------------------------------------------------

// Задача 9

/*
  Выведите новый массив, если длина элемента (строки) меньше или равно 3 символом, с использованием перебирающих методов (forEach или map )

  **
  Используйте метод reduce для выполнения задачи.
*/


// let arr = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Voluptatem', 'sequi']


// let result = arr.reduce((acc, str) => {
//     if (str.length <= 3) {                 
//         acc.push(str);
//     }
//     return acc;
// }, []);

// console.log(result); 


//------------------------------------------------------------------------------------------------------------

// Задача 10

/*
  Выведите новый массив, если длина элемента (строки) равна 5 символам, с использованием перебирающих методов (forEach или map )

  **
  Используйте метод reduce для выполнения задачи.
*/


// let arr = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Voluptatem', 'sequi']


// let result = arr.reduce((acc, str) => {
//     if (str.length == 5) {         
//         acc.push(str);
//     }
//     return acc;
// }, []);

// console.log(result); 



//------------------------------------------------------------------------------------------------------------

// Задача 11


/*
  Найдите в массиве город

  Выведите в консоль этот город, если искомый город отсутствует выведите  - Город <имя_города> не найден
*/

// let arr = ["London", "Paris", "Berlin", "Rome"];
// const findCity = "kharkiv"; //(london или kharkiv)

// let found = arr.reduce((acc, city) => {
//     if (city.toLowerCase() === findCity.toLowerCase()) {
//         return city;
//     }
//     return acc;
// }, null);

// if (found) {
//     console.log(found);
//     } else {
//     console.log(`City ${findCity} not found`);
// }

//------------------------------------------------------------------------------------------------------------

// Задача 12


/*
  Найдите первый город, имя которого больше 4 символов, если искомый город отсутствует выведите  - Город <имя_города> не найден

*/

// let arr = ["London", "Paris", "Berlin", "Rome"];

// let found = arr.reduce((acc, city) => {
// if (acc) return acc; 

// if (city.length > 4) {
//     return city;
// }

//     return null;
// }, null);

// if (found) {
//     console.log(found);
//     } else {
//     console.log("City not found");
// }



//------------------------------------------------------------------------------------------------------------

//*

// find

// Задача 13

/*
  Дан массив пользователей, который содержит вложенные массивы, смотреть ниже

  Каждый вложенный массив представляет пользователя, где каждое значение указывает на:
  id   - число, идентификатор пользователя  
  name - строка, имя пользователя  
  age  - число, возраст пользователя
  isCar  - булево, есть ли машина у пользователя 
  address [city, country] - массив, [город, страна] пользователя
  developer - строка, тип разработчика (FrontEnd, BackEnd, FullStack, DevOps, DataBase)
  level  - строка, уровень пользователя (Junior, Middle, Senior)
  salary - число, зарплата пользователя


  - Напишите код, который выводит первого пользователя по указанному id,
    если пользователя с указанным id (идентификатором) отсутствует, выведите - "Пользователь с id <id> не найден".
  
  - Напишите код, который выводит первого пользователя по указанному возрасту (age),
    если пользователя с указанным возрастом отсутствует, выведите - "Пользователь с возрастом <age> не найден".
  
  - Напишите код, который выводит первого пользователя, у которого есть машина (isCar равно true),
    если такого пользователя нет, выведите - "Пользователь с машиной не найден".
  
  - Напишите код, который выводит первого пользователя, у которого отсутствует машина (isCar равно false),
    если такого пользователя нет, выведите - "Пользователь с машиной не найден".
  
  - Напишите код, который выводит первого пользователя по указанному адресу city
    если пользователя с указанным адресом отсутствует, выведите - "Пользователь с адресом <city> не найден".
  
  - Напишите код, который выводит первого пользователя с указанным типом разработчика (typeDeveloper),
    если такого пользователя нет, выведите - "Пользователь с типом разработчика <developer> не найден".
  
  - Напишите код, который выводит первого пользователя с зарплатой (salary), большей или равной 2000.
    если такого пользователя нет, выведите - "Пользователь с зарплата разработчика <salary> не найден".
*/

// let users = [
//   // [id, name,     age, isCar, address[city, country], typeDeveloper,  level,   salary]
//     [ 0, "Ivan",      25, true,  [ "Kyiv", "Ukraine" ],     "FrontEnd",  "Junior", 1200],
//     [ 1, "Oleh",      25, true,  [ "Kyiv", "Ukraine" ],     "FrontEnd",  "Junior", 1200],
//     [ 2, "Sofia",     30, false, [ "Kharkiv", "Ukraine"  ], "FullStack", "Senior", 3500],
//     [ 3, "Danil",     22, true,  [ "Kharkiv", "Ukraine"  ], "FrontEnd",  "Junior", 1700],
//     [ 4, "Maxym",     28, true,  [ "Kharkiv", "Ukraine"  ], "BackEnd",   "Junior", 1700],
//     [ 5, "Andrey",    35, false, [ "Kharkiv", "Ukraine"  ], "DevOps",    "Junior", 1700],
//     [ 6, "Anna",      29, false, [ "Lviv", "Ukraine" ],     "FrontEnd",  "Junior", 1500],
//     [ 7, "Artem",     26, true,  [ "Kyiv", "Ukraine" ],     "FullStack", "Middle", 3500],
//     [ 8, "Ivan",      24, false, [ "Lviv", "Ukraine" ],     "DevOps",    "Junior", 1700],
//     [ 9, "Igor",      27, true,  [ "Kharkiv", "Ukraine"  ], "FrontEnd",  "Junior", 1200],
//     [10, "Iryna",     33, true,  [ "Kharkiv", "Ukraine"  ], "BackEnd",   "Middle", 3500],
//     [11, "David",     31, true,  [ "Odessa", "Ukraine" ],   "BackEnd",   "Middle", 3500],
//     [12, "Andrey",    23, false, [ "Kharkiv", "Ukraine"  ], "DataBase",  "Senior", 4000],
//     [13, "Sofia",     30, true,  [ "Lviv", "Ukraine" ],     "BackEnd",   "Middle", 2500],
//     [14, "Roman",     29, true,  [ "Kharkiv", "Ukraine"  ], "FullStack", "Senior", 3800],
//     [15, "Mykola",    28, false, [ "Kharkiv", "Ukraine"  ], "BackEnd",   "Senior", 3200],
//     [16, "Katya",     26, false, [ "Odessa", "Ukraine" ],   "FrontEnd",  "Middle", 2000],
//     [17, "Oksana",    27, true,  [ "Kyiv", "Ukraine" ],     "DataBase",  "Middle", 2500],
//     [18, "Anastasia", 25, false, [ "Kharkiv", "Ukraine"  ], "DevOps",    "Junior", 3800],
//     [19, "Mykola",    22, true,  [ "Kharkiv", "Ukraine"  ], "FrontEnd",  "Senior", 3500],
//     [20, "Olena",     24, true,  [ "Kyiv", "Ukraine" ],     "FrontEnd",  "Junior", 1700],

// ]

// let id = 0;
// let findId = users.find(item => item[0] === id);

// if (findId) {
//     console.log(findId);
// } else {
//     console.log(`User with ${id} isn't found`);
// }




// let age = 25; 
// let findAge = users.find(item => item[2] === age);

// if (findAge) {
//     console.log(findAge);
// } else {
//     console.log(`User with age ${age} not found`);
// }



// let car = true;
// let isCar = users.find(item => item[3] === car);

// if (isCar) {
//     console.log(isCar);
// } else {
//     console.log(`User doesn't have a car`);
// }




// let car = false;
// let isCar = users.find(item => item[3] === car);

// if (isCar) {
//     console.log(isCar);
// } else {
//     console.log(`User doesn't have a car`);
// }




// let city = "Lviv";
// let findCity = users.find(item => item[4][0].toLowerCase() === city.toLowerCase());

// if (findCity) {
//     console.log(findCity);
// } else {
//     console.log(`User with address ${city} not found`);
// }

// debugger



// let developer = "DevOps";
// let typeDeveloper = users.find(item => item[5].toLowerCase() === developer.toLowerCase());

// if (typeDeveloper) {
//     console.log(typeDeveloper);
// } else {
//     console.log(`User with ${developer} type not found`)
// }



// let salary = 2000;
// let countSalary = users.find(item => item[7] >= salary);

// if (countSalary) {
//     console.log(countSalary);
// } else {
//     console.log(`User with salary more then ${salary} not found`);
// }

//------------------------------------------------------------------------------------------------------------

//*

// findIndex

// Задача 14

/*
Дан массив пользователей, который содержит вложенные массивы

Каждый вложенный массив представляет пользователя, где каждое значение указывает на:
id   - число, идентификатор пользователя  
name - строка, имя пользователя  
age  - число, возраст пользователя
isCar  - булево, есть ли машина у пользователя 
address [city, country] - массив, [город, страна] пользователя
developer - строка, тип разработчика (FrontEnd, BackEnd, FullStack, DevOps, DataBase)
level  - строка, уровень пользователя (Junior, Middle, Senior)
salary - число, зарплата пользователя


- Напишите код, который выводит индекс первого пользователя по указанному id,
если пользователя с указанным id (идентификатором) отсутствует, выведите - "Пользователь с id <id> не найден".

- Напишите код, который выводит индекс первого пользователя по указанному возрасту (age),
если пользователя с указанным возрастом отсутствует, выведите - "Пользователь с возрастом <age> не найден".

- Напишите код, который выводит индекс первого пользователя, у которого есть машина (isCar равно true),
если такого пользователя нет, выведите - "Пользователь с машиной не найден".

- Напишите код, который выводит индекс первого пользователя по указанному адресу city,
если пользователя с указанным адресом отсутствует, выведите - "Пользователь с адресом <city> не найден".[4]

- Напишите код, который выводит индекс первого пользователя с указанным типом разработчика (typeDeveloper),
если такого пользователя нет, выведите - "Пользователь с типом разработчика <developer> не найден".[5]

- Напишите код, который выводит индекс первого пользователя с зарплатой (salary), большей или равной 2000.
если такого пользователя нет, выведите - "Пользователь с зарплата разработчика <salary> не найден".[7]
*/

// let users = [
//     // [id, name,     age, isCar, address[city, country], typeDeveloper,  level,   salary]
//     [ 0, "Ivan",      25, true,  [ "Kyiv", "Ukraine" ],     "FrontEnd",  "Junior", 1200],
//     [ 1, "Oleh",      25, true,  [ "Kyiv", "Ukraine" ],     "FrontEnd",  "Junior", 1200],
//     [ 2, "Sofia",     30, false, [ "Kharkiv", "Ukraine"  ], "FullStack", "Senior", 3500],
//     [ 3, "Danil",     22, true,  [ "Kharkiv", "Ukraine"  ], "FrontEnd",  "Junior", 1700],
//     [ 4, "Maxym",     28, true,  [ "Kharkiv", "Ukraine"  ], "BackEnd",   "Junior", 1700],
//     [ 5, "Andrey",    35, false, [ "Kharkiv", "Ukraine"  ], "DevOps",    "Junior", 1700],
//     [ 6, "Anna",      29, false, [ "Lviv", "Ukraine" ],     "FrontEnd",  "Junior", 1500],
//     [ 7, "Artem",     26, true,  [ "Kyiv", "Ukraine" ],     "FullStack", "Middle", 3500],
//     [ 8, "Ivan",      24, false, [ "Lviv", "Ukraine" ],     "DevOps",    "Junior", 1700],
//     [ 9, "Igor",      27, true,  [ "Kharkiv", "Ukraine"  ], "FrontEnd",  "Junior", 1200],
//     [10, "Iryna",     33, true,  [ "Kharkiv", "Ukraine"  ], "BackEnd",   "Middle", 3500],
//     [11, "David",     31, true,  [ "Odessa", "Ukraine" ],   "BackEnd",   "Middle", 3500],
//     [12, "Andrey",    23, false, [ "Kharkiv", "Ukraine"  ], "DataBase",  "Senior", 4000],
//     [13, "Sofia",     30, true,  [ "Lviv", "Ukraine" ],     "BackEnd",   "Middle", 2500],
//     [14, "Roman",     29, true,  [ "Kharkiv", "Ukraine"  ], "FullStack", "Senior", 3800],
//     [15, "Mykola",    28, false, [ "Kharkiv", "Ukraine"  ], "BackEnd",   "Senior", 3200],
//     [16, "Katya",     26, false, [ "Odessa", "Ukraine" ],   "FrontEnd",  "Middle", 2000],
//     [17, "Oksana",    27, true,  [ "Kyiv", "Ukraine" ],     "DataBase",  "Middle", 2500],
//     [18, "Anastasia", 25, false, [ "Kharkiv", "Ukraine"  ], "DevOps",    "Junior", 3800],
//     [19, "Mykola",    22, true,  [ "Kharkiv", "Ukraine"  ], "FrontEnd",  "Senior", 3500],
//     [20, "Olena",     24, true,  [ "Kyiv", "Ukraine" ],     "FrontEnd",  "Junior", 1700],
    
// ]


// let id = 3; 

// let idIndex = users.findIndex(item => item[0] === id);

// if (idIndex !== -1) {
//     console.log(idIndex);
// } else {
//     console.log(`User with id ${id} not found`);
// }


//   - Напишите код, который выводит индекс первого пользователя по указанному возрасту (age),
//     если пользователя с указанным возрастом отсутствует, выведите - "Пользователь с возрастом <age> не найден".

// let age = 28;
// let ageIndex = users.findIndex(item => item[2] === age);

// if (ageIndex !== -1) {
//     console.log(ageIndex);
// } else { 
//     console.log(`User with age ${age} not found`);
// }





//   - Напишите код, который выводит индекс первого пользователя, у которого есть машина (isCar равно true),
//     если такого пользователя нет, выведите - "Пользователь с машиной не найден".[3]

// let car = true;
// let carIndex = users.findIndex(item => item[3] === car);

// if (carIndex !== -1) {
//     console.log(carIndex)
// } else {
//     console.log(`User with car ${car} not found`)
// }





//   - Напишите код, который выводит индекс первого пользователя по указанному адресу city,
//     если пользователя с указанным адресом отсутствует, выведите - "Пользователь с адресом <city> не найден".[4]

// let city = "Lviv";
// let cityIndex = users.findIndex(item => item[4][0].toLowerCase() === city.toLowerCase());

// if (cityIndex !== -1) {
//     console.log(cityIndex)
// } else {
//     console.log(`User in ${city} not found`)
// }





//   - Напишите код, который выводит индекс первого пользователя с указанным типом разработчика (typeDeveloper),
//     если такого пользователя нет, выведите - "Пользователь с типом разработчика <developer> не найден".[5]
 
// let developer = "DevOps";
// let developerIndex = users.findIndex(item => item[5].toLowerCase() === developer.toLowerCase());

// if (developerIndex !== -1) {
//     console.log(developerIndex);
// } else {
//     console.log(`User with developer type ${developer} not found`)
// }



//   - Напишите код, который выводит индекс первого пользователя с зарплатой (salary), большей или равной 2000.
//     если такого пользователя нет, выведите - "Пользователь с зарплата разработчика <salary> не найден".[7]

// let salary = "1500";
// let salaryIndex = users.findIndex(item => item[7] === salary);

// if (salaryIndex !== -1) {
//     console.log(salaryIndex);
// } else {
//     console.log(`User with salary ${salary} not found`)
// }




//------------------------------------------------------------------------------------------------------------

// filter

// Задача 16 

/*
  - выведите новый массив, с отфилтроваными значениями, которые явл четными
  - выведите новый массив, с отфилтроваными значениями, которые явл НЕ четными
  - выведите новый массив, с отфилтроваными значениями, которые явл кратные 3


  ***
  Используйте метод reduce для выполнения задач.
*/

// let arr1 = [1,2,3,4,5,6,7,8,9];


// let isEven = arr1.filter(evenItem => evenItem % 2 === 0);

// if (isEven) {
//     console.log(isEven);
// } else {
//     console.log(`Numers are not even`)
// }



// let isOdd = arr1.filter(oddItem => oddItem % 2 !== 0);

// if (isOdd) {
//     console.log(isOdd);
// } else {
//     console.log(`Numers are not even`)
// }



// let isThree = arr1.filter(threeItem => threeItem % 3 === 0);

// if (isThree) {
//     console.log(isThree);
// } else {
//     console.log(`Numers are not multiples to three`)
// }

//------------------------------------------------------------------------------------------------------------


// filter

// Задача 17

/*
  - выведите новый массив, с отфилтроваными значениями, которые элементы явл положительными
  - выведите новый массив, с отфилтроваными значениями, которые элементы явл отрицательными


  ***
  Используйте метод reduce для выполнения задач.
*/

// let arr1 = [-1,1,2,-3,4,-5,6,-7,-8,9, -10]

// let isPositive = arr1.filter(positiveItem => positiveItem >= 0);

// if (isPositive) {
//     console.log(isPositive);
// } else {
//     console.log(`numbers are not positive`);
// }



// let isNegative = arr1.filter(negativeItem => negativeItem <= 0);

// if (isNegative) {
//     console.log(isNegative);
// } else {
//     console.log(`numbers are not negative`);
// }


//------------------------------------------------------------------------------------------------------------

// filter

// Задача 18

/*
  - Создайте новый массив с отфильтрованными значениями: длина (количество символов) элемента больше 4.
  - Создайте новый массив с отфильтрованными значениями: длина (количество символов) элемента меньше 4.
  - Создайте новый массив с отфильтрованными значениями: длина (количество символов) элемента равна 5 или 6.


  ***
  Используйте метод reduce для выполнения задач.
*/


// let arr = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Voluptatem', 'sequi']

// let moreFour = arr.filter(fourItem => fourItem.length >= 4)

// if (moreFour) {
//     console.log(moreFour)
// } else {
//     console.log(`No words have nore then 4 symbols`)
// }



// let lessFour = arr.filter(fourItem => fourItem.length <= 4)

// if (lessFour) {
//     console.log(lessFour)
// } else {
//     console.log(`No words have less then 4 symbols`)
// }



// let fiveSix = arr.filter(equalItem => equalItem.length === 5 || equalItem.length === 6);

// if (fiveSix) {
//     console.log(fiveSix)
// } else {
//     console.log(`No words are equal to 5 or 6 symbols`)
// }

//------------------------------------------------------------------------------------------------------------

// filter

// Задача 19

/*
  - выведите новый массив, с отфилтроваными значениями, если элемент (строка) начинается с символов -  l или s, или v
  - выведите новый массив, с отфилтроваными значениями, если элемент (строка) заканчиваеться на символовы - l или s

  ***
  Используйте метод reduce для выполнения задач.
*/


// let arr = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Voluptatem', 'sequi']



//------------------------------------------------------------------------------------------------------------

// filter

// Задача 20

/*
  - выведите новый массив, с отфилтроваными значениями, если элемент (строка)  содержать символы   - a или o
  - выведите новый массив, с отфилтроваными значениями, если элемент (строка) НЕ  содержать символы из массива   - a или o


  ***
  Используйте метод reduce для выполнения задач.
*/


// let arr = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Voluptatem', 'sequi']

// let hasAorO = arr.reduce((acc, item) => {
//     if (item.includes('a') || item.includes('o')) {
//         acc.push(item);
//     }
//     return acc;
// }, []);

// console.log(hasAorO);


// let noAorO = arr.reduce((acc, item) => {
//     if (!item.includes('a') && !item.includes('o')) {
//         acc.push(item);
//     }
//     return acc;
// }, []);

// console.log(noAorO);

//------------------------------------------------------------------------------------------------------------

//*

// filter

// Задача 21

/*
  Дан массив пользователей, который содержит вложенные массивы

  Каждый вложенный массив представляет пользователя, где каждое значение указывает на:
  id   - число, идентификатор пользователя  
  name - строка, имя пользователя  
  age  - число, возраст пользователя
  isCar  - булево, есть ли машина у пользователя 
  address [city, country] - массив, [город, страна] пользователя
  typeDeveloper - строка, тип разработчика (FrontEnd, BackEnd, FullStack, DevOps, DataBase)
  level  - строка, уровень пользователя (Junior, Middle, Senior)
  salary - число, зарплата пользователя

//   - Напишите код, который фильтрует пользователей по указанному id

//   - Напишите код, который фильтрует пользователей по id, возвращается массив пользователей c четными id.
//   - Напишите код, который фильтрует пользователей по id, возвращается массив пользователей c НЕ четными id.

//   - Напишите код, который фильтрует пользователей без указанного id, возвращается массив без пользователя c указанным id.

//   - Напишите код, который фильтрует пользователей по указанному id, возвращается массив пользователей с id больше 4 и меньше 11.
//   - Напишите код, который фильтрует пользователей по указанному id, возвращается массив пользователей с id больше 4 (включительно) и меньше 11 (включительно).
  
//   - Напишите код, который фильтрует пользователей по указанному возрасту (age).
//   - Напишите код, который фильтрует пользователей по указанному возрасту (age), возраст пользователя больше 25.
//   - Напишите код, который фильтрует пользователей по указанному возрасту (age), возраст пользователя меньше 25.
//   - Напишите код, который фильтрует пользователей по указанному возрасту (age), возраст пользователя больше 24 и меньше 30.


//   - Напишите код, который фильтрует пользователей, у которых есть машина (isCar равно true).
//   - Напишите код, который фильтрует пользователей, у которых отсутствует машина (isCar равно false).

  
//   - Напишите код, который фильтрует пользователей по указанному городу - city.

  
//   - Напишите код, который фильтрует пользователей по указанному типу разработчика (typeDeveloper).

  
//   - Напишите код, который фильтрует пользователей с зарплатой (salary), большей или равной 2000.
//   - Напишите код, который фильтрует пользователей с зарплатой (salary), меньшей 2000.
//   - Напишите код, который фильтрует пользователей с зарплатой (salary), равной 4000.


  ***
  Используйте метод reduce для выполнения задач. 

*/
//   - Напишите код, который фильтрует пользователей по указанному id


//   - Напишите код, который фильтрует пользователей по id, возвращается массив пользователей c четными id.
// let res = users.filter(item => item[0] % 2 === 0);

// console.log(res);
// debugger;


//   - Напишите код, который фильтрует пользователей по id, возвращается массив пользователей c НЕ четными id.

// let res = users.filter(item => item[0] % 2 !== 0);

// console.log(res);
// debugger;


//   - Напишите код, который фильтрует пользователей без указанного id, возвращается массив без пользователя c указанным id.
// let res = users.filter(item => item[0] !== 11);

// console.log(res);
// debugger;


// //   - Напишите код, который фильтрует пользователей по указанному id, возвращается массив пользователей с id больше 4 и меньше 11.
// let res = users.filter(item => item[0] > 4 && item[0] < 11);
// console.log(res); 
// debugger;


//   - Напишите код, который фильтрует пользователей по указанному id, возвращается массив пользователей с id больше 4 (включительно) и меньше 11 (включительно).
  
//   - Напишите код, который фильтрует пользователей по указанному возрасту (age).
// let res = users.filter(item => item[2] === 37);

// console.log(res);
// debugger;


//   - Напишите код, который фильтрует пользователей по указанному возрасту (age), возраст пользователя больше 25.
// let res = users.filter(item => item[2] > 25);

// console.log(res);
// debugger;


//   - Напишите код, который фильтрует пользователей по указанному возрасту (age), возраст пользователя меньше 25.
// let res = users.filter(item => item[2] < 25);

// console.log(res);
// debugger;


//   - Напишите код, который фильтрует пользователей по указанному возрасту (age), возраст пользователя больше 24 и меньше 30.
// let res = users.filter(item => item[2] > 24 && item[2] < 30);

// console.log(res);
// debugger;


//   - Напишите код, который фильтрует пользователей, у которых есть машина (isCar равно true).
// let res = users.filter(item => item[3]);
// let res = users.filter(function(item) {
//     return item[3]; 
// })

// console.log(res);
// debugger;

//   - Напишите код, который фильтрует пользователей, у которых отсутствует машина (isCar равно false).
// let res = users.filter(function(item) {
//     return !item[3];
// })

// console.log(res);
// debugger;
//   - Напишите код, который фильтрует пользователей по указанному городу - city.
// let city = "lviv";

// function myCityFilter(cityItem, city) {
//     return cityItem === city;
// } 

// let res = users.filter(function(item) {
//     return myCityFilter(item[4][0].toLowerCase(), city.toLowerCase())
// })

// console.log(res);
// debugger;


// let city = "lviv";

// function myCityFilter(cityItem, city) {
//     console.log(cityItem, city);
//     return cityItem === city;
// } 

// let res = users.filter(myCityFilter);

// console.log(res);
// debugger;

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let res = arr.map(Number.parseInt);
// console.log(res);
// debugger;

// let cities = ["Lviv","Odessa"]
// let _cities = cities.map(city => city.toLowerCase());

// let res = users.filter(function(item) {
//     return _cities.includes(item[4][0].toLowerCase());
    
// })

// console.log(res);
// debugger;

//   - Напишите код, который фильтрует пользователей по указанному типу разработчика (typeDeveloper).
// let res = users.filter(item => item[5].toLowerCase() === "DevOps".toLowerCase());
// console.log(res);
// debugger;


//   - Напишите код, который фильтрует пользователей с зарплатой (salary), большей или равной 2000.
// let res = users.filter(item => item[7] >= 2000);

// console.log(res);
// debugger;


//   - Напишите код, который фильтрует пользователей с зарплатой (salary), меньшей 2000.
// let res = users.filter(item => item[7] < 2000);

// console.log(res);
// debugger;


//   - Напишите код, который фильтрует пользователей с зарплатой (salary), равной 4000.
// let res = users.filter(item => item[7] === 4000);

// console.log(res);
// debugger;


//------------------------------------------------------------------------------------------------------------

// let users = [
//   // [id, name,     age, isCar, address[city, country],  typeDeveloper,    level,   salary]
//   [ 0, "Ivan",      25, true,  [ "Kyiv", "Ukraine" ],     "FrontEnd",  "Junior", 1200],
//   [ 1, "Oleh",      25, true,  [ "Kyiv", "Ukraine" ],     "FrontEnd",  "Junior", 1200],
//   [ 2, "Sofia",     30, false, [ "Kharkiv", "Ukraine"  ], "FullStack", "Senior", 3500],
//   [ 3, "Danil",     22, true,  [ "Kharkiv", "Ukraine"  ], "FrontEnd",  "Junior", 1700],
//   [ 4, "Maxym",     28, true,  [ "Kharkiv", "Ukraine"  ], "BackEnd",   "Junior", 1700],
//   [ 5, "Andrey",    35, false, [ "Kharkiv", "Ukraine"  ], "DevOps",    "Junior", 1700],
//   [ 6, "Anna",      29, false, [ "Lviv", "Ukraine" ],     "FrontEnd",  "Junior", 1500],
//   [ 7, "Artem",     26, true,  [ "Kyiv", "Ukraine" ],     "FullStack", "Middle", 3500],
//   [ 8, "Ivan",      24, false, [ "Lviv", "Ukraine" ],     "DevOps",    "Junior", 1700],
//   [ 9, "Igor",      27, true,  [ "Kharkiv", "Ukraine"  ], "FrontEnd",  "Junior", 1200],
//   [10, "Iryna",     33, true,  [ "Kharkiv", "Ukraine"  ], "BackEnd",   "Middle", 3500],
//   [11, "David",     31, true,  [ "Odessa", "Ukraine" ],   "BackEnd",   "Middle", 3500],
//   [12, "Andrey",    23, false, [ "Kharkiv", "Ukraine"  ], "DataBase",  "Senior", 4000],
//   [13, "Sofia",     30, true,  [ "Lviv", "Ukraine" ],     "BackEnd",   "Middle", 2500],
//   [14, "Roman",     29, true,  [ "Kharkiv", "Ukraine"  ], "FullStack", "Senior", 3800],
//   [15, "Mykola",    28, false, [ "Kharkiv", "Ukraine"  ], "BackEnd",   "Senior", 3200],
//   [16, "Katya",     26, false, [ "Odessa", "Ukraine" ],   "FrontEnd",  "Middle", 2000],
//   [17, "Oksana",    27, true,  [ "Kyiv", "Ukraine" ],     "DataBase",  "Middle", 2500],
//   [18, "Anastasia", 25, false, [ "Kharkiv", "Ukraine"  ], "DevOps",    "Junior", 3800],
//   [19, "Mykola",    22, true,  [ "Kharkiv", "Ukraine"  ], "FrontEnd",  "Senior", 3500],
//   [20, "Olena",     24, true,  [ "Kyiv", "Ukraine" ],     "FrontEnd",  "Junior", 1700],

// ]


//------------------------------------------------------------------------------------------------------------

// Задача 22
/*
  Напишите код, который сортирует массив(чисел) по возрастанию, от меньшего к большему
  Напишите код, который сортирует массив(чисел) по убыванию, от большего к меньшему
*/

// const arr = [1,3,2,10,20,15,11,40,4,5,7,70,60,50,9,80,8,90,100, 101]

// let res = arr.sort((a,b) => a - b);

// console.log(res);

// let res1 = arr.sort((b, a) => a - b);

// console.log(res1);


//------------------------------------------------------------------------------------------------------------

// Задача 23
/*
  Напишите код, который сортирует массив(строк) по возрастанию, в алфавитном порядке от A до Z
  Напишите код, который сортирует массив(строк) по убыванию, в алфавитном порядке от Z до A
*/

// const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// let res = fruits.sort((a, b) => a.localeCompare(b));

// console.log(res);


// let res1 = fruits.sort((a, b) => b.localeCompare(a));

// console.log(res1);


//------------------------------------------------------------------------------------------------------------

// Задача 24


/*
  Дан массив пользователей, который содержит вложенные массивы

  Каждый вложенный массив представляет пользователя, где каждое значение указывает на:
  id   - число, идентификатор пользователя  
  name - строка, имя пользователя  
  age  - число, возраст пользователя
  isCar  - булево, есть ли машина у пользователя 
  address [city, country] - массив, [город, страна] пользователя
  typeDeveloper - строка, тип разработчика (FrontEnd, BackEnd, FullStack, DevOps, DataBase)
  level  - строка, уровень пользователя (Junior, Middle, Senior)
  salary - число, зарплата пользователя

  - Напишите код, который сортирует пользователей по id, в порядке возростания
  - Напишите код, который сортирует пользователей по id в порядке убывания


  - Напишите код, который сортирует пользователей по  возрасту (age), в порядке возростания
  - Напишите код, который сортирует пользователей по  возрасту (age), в порядке убывания


  - **Напишите код, который сортирует пользователей по isCar, у которых есть машина (isCar - true), после у которых отсутствует машина (isCar - false).
  - **Напишите код, который сортирует пользователей по isCar, у которых отсутствует машина (isCar - false), после у которых есть машина (isCar - true).

  
  - Напишите код, который сортирует пользователей по городам (city), в алфавитном прядке от A до Z
  - Напишите код, который сортирует пользователей по городам (city), в алфавитном прядке от Z до A

  
  - Напишите код, который фильтрует пользователей по  типу разработчика (typeDeveloper), в алфавитном прядке от A до Z
  - Напишите код, который фильтрует пользователей по  типу разработчика (typeDeveloper), в алфавитном прядке от Z до A

  
  - Напишите код, который фильтрует пользователей по зарплате (salary), в порядке возростания
  - Напишите код, который фильтрует пользователей по зарплате (salary), в порядке убывания

*/

// let users = [
//   // [id, name,     age, isCar, address[city, country],    typeDeveloper,    level,   salary]
//     [ 0, "Ivan",      25, true,  [ "Kyiv", "Ukraine" ],     "FrontEnd",  "Junior", 1200],
//     [ 1, "Oleh",      25, true,  [ "Kyiv", "Ukraine" ],     "FrontEnd",  "Junior", 1200],
//     [ 2, "Sofia",     30, false, [ "Kharkiv", "Ukraine"  ], "FullStack", "Senior", 3500],
//     [ 3, "Danil",     22, true,  [ "Kharkiv", "Ukraine"  ], "FrontEnd",  "Junior", 1700],
//     [ 4, "Maxym",     28, true,  [ "Kharkiv", "Ukraine"  ], "BackEnd",   "Junior", 1700],
//     [ 5, "Andrey",    35, false, [ "Kharkiv", "Ukraine"  ], "DevOps",    "Junior", 1700],
//     [ 6, "Anna",      29, false, [ "Lviv", "Ukraine" ],     "FrontEnd",  "Junior", 1500],
//     [ 7, "Artem",     26, true,  [ "Kyiv", "Ukraine" ],     "FullStack", "Middle", 3500],
//     [ 8, "Ivan",      24, false, [ "Lviv", "Ukraine" ],     "DevOps",    "Junior", 1700],
//     [ 9, "Igor",      27, true,  [ "Kharkiv", "Ukraine"  ], "FrontEnd",  "Junior", 1200],
//     [10, "Iryna",     33, true,  [ "Kharkiv", "Ukraine"  ], "BackEnd",   "Middle", 3500],
//     [11, "David",     31, true,  [ "Odessa", "Ukraine" ],   "BackEnd",   "Middle", 3500],
//     [12, "Andrey",    23, false, [ "Kharkiv", "Ukraine"  ], "DataBase",  "Senior", 4000],
//     [13, "Sofia",     30, true,  [ "Lviv", "Ukraine" ],     "BackEnd",   "Middle", 2500],
//     [14, "Roman",     29, true,  [ "Kharkiv", "Ukraine"  ], "FullStack", "Senior", 3800],
//     [15, "Mykola",    28, false, [ "Kharkiv", "Ukraine"  ], "BackEnd",   "Senior", 3200],
//     [16, "Katya",     26, false, [ "Odessa", "Ukraine" ],   "FrontEnd",  "Middle", 2000],
//     [17, "Oksana",    27, true,  [ "Kyiv", "Ukraine" ],     "DataBase",  "Middle", 2500],
//     [18, "Anastasia", 25, false, [ "Kharkiv", "Ukraine"  ], "DevOps",    "Junior", 3800],
//     [19, "Mykola",    22, true,  [ "Kharkiv", "Ukraine"  ], "FrontEnd",  "Senior", 3500],
//     [20, "Olena",     24, true,  [ "Kyiv", "Ukraine" ],     "FrontEnd",  "Junior", 1700],

// ]


//   - Напишите код, который сортирует пользователей по id, в порядке возростания

// let res = users.sort((a, b) => a[0] - b[0]);

// console.log(res);
// debugger;

//   - Напишите код, который сортирует пользователей по id в порядке убывания

// let res = users.sort((b, a) => a[0] - b[0]);

// console.log(res);
// debugger;


//   - Напишите код, который сортирует пользователей по  возрасту (age), в порядке возростания

// let res = users.sort((a, b) => a[2] - b[2]);

// console.log(res);
// debugger;


//   - Напишите код, который сортирует пользователей по  возрасту (age), в порядке убывания

// let res = users.sort((b, a) => a[2] - b[2]);

// console.log(res);
// debugger;


// //   - **Напишите код, который сортирует пользователей по isCar, у которых есть машина (isCar - true), после у которых отсутствует машина (isCar - false).

// let res = users.sort((b, a) => a[3] - b[3]);

// console.log(res);
// debugger;

//   - **Напишите код, который сортирует пользователей по isCar, у которых отсутствует машина (isCar - false), после у которых есть машина (isCar - true).

// let res = users.sort((a, b) => a[3] - b[3]);

// console.log(res);
// debugger;

  
//   - Напишите код, который сортирует пользователей по городам (city), в алфавитном прядке от A до Z

// let res = users.sort((a, b) => a[4][0].localeCompare(b[4][0]))

// console.log(res);
// debugger;


//   - Напишите код, который сортирует пользователей по городам (city), в алфавитном прядке от Z до A

// let res = users.sort((a, b) => b[4][0].localeCompare(a[4][0]))

// console.log(res);
// debugger;

//   - Напишите код, который фильтрует пользователей по  типу разработчика (typeDeveloper), в алфавитном прядке от A до Z

// let res = users.sort((a, b) => a[5].localeCompare(b[5]));

// console.log(res);
// debugger;


//   - Напишите код, который фильтрует пользователей по  типу разработчика (typeDeveloper), в алфавитном прядке от Z до A

// let res = users.sort((a, b) => b[5].localeCompare(a[5]));

// console.log(res);
// debugger;


//   - Напишите код, который фильтрует пользователей по зарплате (salary), в порядке возростания

// let res = users.sort((a, b) => a[7] - b[7]);

// console.log(res);
// debugger;


//   - Напишите код, который фильтрует пользователей по зарплате (salary), в порядке убывания
// let res1 = users.sort((a, b) => b[7] - a[7]);

// console.log(res1);
// debugger;





//------------------------------------------------------------------------------------------------------------

// Задача 25

// map

/*
  Напишите код, котоырй выводит новый массив, где элементы массива умноженый на 2
*/

// let arr = [1,2,3,4,5,6,7,8,9]; 

// let res = arr.map(item => item * 2);

// console.log(res);
// Результат [2, 4, 6, 8, 10, 12, 14, 16, 18];


//------------------------------------------------------------------------------------------------------------

// Задача 26

// map

/*
  Напишите код, котоырй выводит новый массив, где элемент массива увеличен на +1, если явл четным
  Напишите код, котоырй выводит новый массив, где элемент массива уменьшен на -1, если явл НЕ четным
*/

// let arr1 = [1,2,3,4,5,6,7,8,9]

// const newArr1 = arr1.map(num => num % 2 === 0 ? num + 1 : num);

// console.log(newArr1);


// let arr2 = [1,2,3,4,5,6,7,8,9]

// const newArr2 = arr2.map(num => num % 2 !== 0 ? num - 1 : num);

// console.log(newArr2);

// Результат +1: [1, 3, 3, 5, 5, 7, 7, 9, 9]
// Результат -1: [0, 2, 2, 4, 4, 6, 6, 8, 8] 


//------------------------------------------------------------------------------------------------------------

// Задача 27

// map

/*
  Напишите код, котоырй выводит новый массив, где  элемент массива умноженый на 2, если явл четным
  Напишите код, котоырй выводит новый массив, где  элемент массива делен на 2, если явл НЕ четным
*/

// let arr = [1,2,3,4,5,6,7,8,9];

// const newArr1 = arr.map(num => num % 2 === 0 && num !== 0 ? num * 2 : num);

// console.log(newArr1);


// const newArr2 = arr.map(num => num % 2 !== 0 && num !== 0 ? num / 2 : num);

// console.log(newArr2);

// Результат *2: [1, 4, 3, 8, 5, 12, 7, 16, 9]
// Результат /2: [0.5, 2, 1.5, 4, 2.5, 6, 3.5, 8, 4.5]


//------------------------------------------------------------------------------------------------------------

// Задача 28

// map

/*
  Напишите код, котоырй выводит новый массив, где  элемент массива, первый символ записан в верхнем регистре
  Напишите код, котоырй выводит новый массив, где  элемент массива, первый символ и последний символы записан в верхнем регистре

*/

// let arr = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Voluptatem', 'sequi']

// Результат 1: ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Consectetur', 'Adipisicing', 'Elit', 'Voluptatem', 'Sequi']
// Результат 2: ['LoreM', 'IpsuM', 'DoloR', 'SiT', 'AmeT', 'ConsectetuR', 'AdipisicinG', 'EliT', 'VoluptateM', 'SequI']

//------------------------------------------------------------------------------------------------------------

// Задача 29


// map

/*
  Напишите код, котоырй выводит новый массив, где  элемент массива, первый символ записан в верхнем регистре, если позиция в массиве явл четным
  Напишите код, котоырй выводит новый массив, где  элемент массива, первый символ и последний символы записан в верхнем регистре, если позиция в массиве явл НЕ четным

*/

// let arr = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Voluptatem', 'sequi']

// Результат 1: ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Consectetur', 'Adipisicing', 'Elit', 'Voluptatem', 'Sequi']
// Результат 2: ['LoreM', 'IpsuM', 'DoloR', 'SiT', 'AmeT', 'ConsectetuR', 'AdipisicinG', 'EliT', 'VoluptateM', 'SequI']





//------------------------------------------------------------------------------------------------------------

// Задача 30

// map

/*
  Presentors | ReMapping 

  Дан массив пользователей, который содержит вложенные массивы

  Каждый вложенный массив представляет пользователя, где каждое значение указывает на:
  id   - число, идентификатор пользователя  
  name - строка, имя пользователя  
  age  - число, возраст пользователя
  isCar  - булево, есть ли машина у пользователя 
  address [city, country] - массив, [город, страна] пользователя
  typeDeveloper - строка, тип разработчика (FrontEnd, BackEnd, FullStack, DevOps, DataBase)
  level  - строка, уровень пользователя (Junior, Middle, Senior)
  salary - число, зарплата пользователя


  Напишите код, который создает новый массив, преобразуя каждого пользователя и оставляя только следующие данные в массиве:

  - [id, name, age, typeDeveloper, level, salary ]

*/

// let users = [
//   // [id, name,     age, isCar, address[city, country],    typeDeveloper,    level,   salary]
//   [ 0, "Ivan",      25, true,  [ "Kyiv", "Ukraine" ],     "FrontEnd",  "Junior", 1200],
//   [ 1, "Oleh",      25, true,  [ "Kyiv", "Ukraine" ],     "FrontEnd",  "Junior", 1200],
//   [ 2, "Sofia",     30, false, [ "Kharkiv", "Ukraine"  ], "FullStack", "Senior", 3500],
//   [ 3, "Danil",     22, true,  [ "Kharkiv", "Ukraine"  ], "FrontEnd",  "Junior", 1700],
//   [ 4, "Maxym",     28, true,  [ "Kharkiv", "Ukraine"  ], "BackEnd",   "Junior", 1700],
//   [ 5, "Andrey",    35, false, [ "Kharkiv", "Ukraine"  ], "DevOps",    "Junior", 1700],
//   [ 6, "Anna",      29, false, [ "Lviv", "Ukraine" ],     "FrontEnd",  "Junior", 1500],
//   [ 7, "Artem",     26, true,  [ "Kyiv", "Ukraine" ],     "FullStack", "Middle", 3500],
//   [ 8, "Ivan",      24, false, [ "Lviv", "Ukraine" ],     "DevOps",    "Junior", 1700],
//   [ 9, "Igor",      27, true,  [ "Kharkiv", "Ukraine"  ], "FrontEnd",  "Junior", 1200],
//   [10, "Iryna",     33, true,  [ "Kharkiv", "Ukraine"  ], "BackEnd",   "Middle", 3500],
//   [11, "David",     31, true,  [ "Odessa", "Ukraine" ],   "BackEnd",   "Middle", 3500],
//   [12, "Andrey",    23, false, [ "Kharkiv", "Ukraine"  ], "DataBase",  "Senior", 4000],
//   [13, "Sofia",     30, true,  [ "Lviv", "Ukraine" ],     "BackEnd",   "Middle", 2500],
//   [14, "Roman",     29, true,  [ "Kharkiv", "Ukraine"  ], "FullStack", "Senior", 3800],
//   [15, "Mykola",    28, false, [ "Kharkiv", "Ukraine"  ], "BackEnd",   "Senior", 3200],
//   [16, "Katya",     26, false, [ "Odessa", "Ukraine" ],   "FrontEnd",  "Middle", 2000],
//   [17, "Oksana",    27, true,  [ "Kyiv", "Ukraine" ],     "DataBase",  "Middle", 2500],
//   [18, "Anastasia", 25, false, [ "Kharkiv", "Ukraine"  ], "DevOps",    "Junior", 3800],
//   [19, "Mykola",    22, true,  [ "Kharkiv", "Ukraine"  ], "FrontEnd",  "Senior", 3500],
//   [20, "Olena",     24, true,  [ "Kyiv", "Ukraine" ],     "FrontEnd",  "Junior", 1700],

// ]

// Результат 
// [
//   //[id, name,  age,  typeDeveloper,    level,   salary]
//  [ 0,   "Ivan", 25,  "FrontEnd",   "Junior",  1200],
//  //....
// ]
//
//

//------------------------------------------------------------------------------------------------------------

// some

// Задача 31

/*
  Напишите код, который выводит true, есть ли хотябы 1 элемент возраст больше 25
  Напишите код, который выводит true, есть ли хотябы 1 элемент возраст меньше 25
  Напишите код, который выводит true, есть ли хотябы 1 элемент возраст равен 25
*/

//------------------------------------------------------------------------------------------------------------

// every

// Задача 32

/*
  Напишите код, который выводит true, где все элементы массива заплта больше 2000
  Напишите код, который выводит true, где все элементы массива заплта меньше 2000
  Напишите код, который выводит true, где все элементы массива заплта равен 2000
*/

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

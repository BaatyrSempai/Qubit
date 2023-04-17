// 1 ==========================================================

// let numOper = prompt(
//   "Введите номер операции: 1.Сложение 2.Вычитание 3.Умножение"
// );

// switch (numOper) {
//   case "1":
//     console.log("Сложение");
//     break;
//   case "2":
//     console.log("Вычитание");
//     break;
//   case "3":
//     console.log("Умножение");
//     break;
//   default:
//     console.log("Операция не определена");
//     break;
// }

// 2 ==========================================================

// const userName = prompt("Введите свое имя: ");

// switch (userName) {
//   case "Админ":
//     let password = prompt("Введите пароль: ");
//     if (password === "admin123") {
//       alert("Привет Админ!");
//     } else {
//       alert("Пока Админ!");
//     }
//     break;
//   case "Пользователь":
//     alert("Добро пожаловать пользователь!");
//     break;
// }

// 3 =============================================================

// const array = ['2'];

// if (!array.length) {
//   alert("Массив пустой")
// } else {
//   alert("В массиве есть элементы")
// }

// 4 ==============================================================

// function removeTriplets(arr) {
//   const countMap = {};

//   for (const item of arr) {
//     if (countMap.hasOwnProperty(item)) {
//       countMap[item]++;
//     } else {
//       countMap[item] = 1;
//     }
//   }

//   const result = [];

//   for (const item of arr) {
//     if (countMap[item] < 3) {
//       result.push(item);
//     }
//   }

//   return result;
// }

// const inputArray = [1, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5];
// const resultArray = removeTriplets(inputArray);
// console.log(resultArray);
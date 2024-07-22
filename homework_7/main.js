// homework_7.1
// Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
// console.log(sum(4)); // 4
// console.log(sum(6)); // 10
// console.log(sum(10)); // 20
// console.log(sum(7)); // 27
// let result = 0
// const getSum = (num) => {
//     return result = result + num
// }
// console.log(getSum(4)); // 4
// console.log(getSum(6)); // 10
// console.log(getSum(10)); // 20
// console.log(getSum(7)); // 27

// homework_7.2
// Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2).
// Функція повинна повертати результат (у середині функції не має бути консоль лога!)
// function addingNum(firstNum) {
//     return function (secondNum) {
//         return firstNum + secondNum
//     }
// }
// console.log(addingNum(5)(2))

// homework_7.3
// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу).
// Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше.
// Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації, то функція виводить в консоль останній введення користувача і завершує функцію.

// first option
(function () {
    let flag = true
    let counter = 1
    const counterMax = 10
    const minNum = 100
    let inputNum = prompt('Введите число больше ста')
    while (flag) {
        inputNum = Number(inputNum)
        if (inputNum > minNum && counter !== counterMax) {
            counter++
            inputNum = prompt('Введите число больше ста')
        }else if (inputNum < minNum) {
            inputNum = prompt('Введите число БОЛЬШЕ ста')
        }else if (isNaN(inputNum)) {
            inputNum = prompt('Это не число, введите число больше ста')
        }else{
            console.log(`Ваше последнее число: ${inputNum}`)
            flag = false
        }
    }
})();
// second option
(function () {
    let flag = true
    let counter = 1
    const counterMax = 10
    const minNum = 100
    let inputNum = prompt('Введите число больше ста')
    while (flag) {
        let lastInputNum = inputNum
        inputNum = Number(inputNum)
        if (counter === counterMax){
            alert(`Ваш последний ввод: ${lastInputNum}`)
            flag = false
        }else if (inputNum > minNum) {
            alert(`Ваше число: ${inputNum}`)
            flag = false
        }else if (inputNum < minNum) {
            counter++
            inputNum = prompt('Введите число БОЛЬШЕ ста')
        }else {
            counter++
            inputNum = prompt('Это не число, введите число больше ста')
        }
    }
})();





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
function addingNum(firstNum) {
    return function (secondNum) {
        return firstNum + secondNum
    }
}
console.log(addingNum(5)(2))




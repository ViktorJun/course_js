// homework_6.1
// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.
// let inputSentence = prompt('Введите предложение')
// let inputLetters = prompt('Введите буквы через пробел')
// inputLetters = inputLetters.split(' ')
// function deleteSymbol(string, inputLetters) {
//     let inputLettersStr = inputLetters.join('')
//     let result = ''
//     for (let i = 0; i < string.length; i++) {
//         if (inputLettersStr.indexOf(string[i]) === -1) {
//             result += string[i]
//         }
//     }
//     return result
// }
// console.log(deleteSymbol(inputSentence, inputLetters))

// homework_6.2
// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
// let inputArray = ['string', 2, true, 5, NaN, 11, null, '400']
// function average(array) {
//     let number = 0
//     let quantity = 0
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === 'number' && !isNaN(array[i])) {
//             number += array[i]
//             quantity += 1
//         }
//     }
//     return number / quantity
// }
// console.log(average(inputArray))

// homework_6.3
// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:
// const array = [1, 3, 4, 6, 2, 5, 7];
// removeElement(array,4);
// console.log(array); // Результат: [1, 3, 6, 2, 5, 7]
const inputArray = [1, 3, 4, 6, 2, 5, 7];
function removeElement(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            array.splice(i, 1);
            i--
        }
    }
    return array
}
console.log(removeElement(inputArray, 4))

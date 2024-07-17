// homework_6.1
// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.
let inputSentence = prompt('Введите предложение')
let inputLetters = prompt('Введите буквы через пробел')
inputLetters = inputLetters.split(' ')
function deleteSymbol(string, inputLetters) {
    let inputLettersStr = inputLetters.join('')
    let result = ''
    for (let i = 0; i < string.length; i++) {
        if (inputLettersStr.indexOf(string[i]) === -1) {
            result += string[i]
        }
    }
    return result
}
console.log(deleteSymbol(inputSentence, inputLetters))
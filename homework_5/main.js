// homework_5.1
// let num = 19.5
// while (num !== 30) {
//     num += 0.5
//     console.log(num)
// }

// homework_5.2
let dollar = 26
let uah = prompt(`Введите суму в долларах (1 доллар = ${dollar} грн)`)
if (!isNaN(Number(uah)) && uah !== null && uah.trim() !== '') {
    let convert = dollar * uah
    alert(`Результат конвертации: ${convert}`)
} else {
    alert(`Нужно ввести число`)
}

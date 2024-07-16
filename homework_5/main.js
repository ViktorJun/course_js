// homework_5.1
// let num = 19.5
// while (num !== 30) {
//     num += 0.5
//     console.log(num)
// }

// homework_5.2
// let dollar = 26
// let uah = prompt(`Введите суму в долларах (1 доллар = ${dollar} грн)`)
// if (!isNaN(Number(uah)) && uah !== null && uah.trim() !== '') {
//     let convert = dollar * uah
//     alert(`Результат конвертации: ${convert}`)
// } else {
//     alert(`Нужно ввести число`)
// }

// homework_5.3
// let number = prompt('Введите число')
// let flag = true
// let i = 0
// while (flag) {
//     i = ++i
//     let sqrt = i * i
//     if (Number.isInteger(sqrt)){
//         if (sqrt <= number && i <= 100) {
//             console.log(sqrt)
//         } else {
//             flag = false
//         }
//     }
// }

// homework_5.4
let number = prompt('Введите число')
number = parseInt(number);
function isPrime(num) {
    if (num <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
if (isPrime(number)) {
    console.log('простое число')
}else {
    console.log('не простое число')
}




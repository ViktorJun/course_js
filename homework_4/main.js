// homework_4.1
// let name = prompt(`Enter your name`)
// alert(`Hello, ${name}! How are you?`)

// homework_4.2
// let numb = prompt('Enter a three-digit number')
// numb = numb.split('')
// if (numb.length !== 3) {
//     alert('Enter a valid three-digit number')
// }else {
//     if (numb[0] === numb[1] && numb[1] === numb[2]) {
//         alert('All numbers are the same')
//     }else if (numb[0] === numb[1] || numb[0] === numb[2] || numb[1] === numb[2]) {
//         alert('There are identical numbers')
//     }else {
//         alert('No similarities')
//     }
// }

// homework_4.3
let age = prompt('Введи год рождения')
let city = prompt('В каком городе ты живешь?')
let sport = prompt('Твой любимый вид спорта?')
let sport_answer = 'Круто! Хочешь стать '
if (age === null) {
    alert('Жаль что вы не захотели вводить свой год рождения')
}else if (city === null) {
    alert('Жаль что вы не захотели вводить город в котором живете')
}else if (sport === null) {
    alert('Жаль что вы не захотели вводить свой любимый вид спорта')
}else {
    if (sport === 'баскетбол') {
        sport_answer += 'Майклом Джорданом?'
    }else if (sport === 'футбол') {
        sport_answer += 'Криштиану Роналдом?'
    }else if (sport === 'волейбол') {
        sport_answer += 'Эрвин Нгапетом?'
    }else {
        sport_answer = ''
    }
    age = 2024 - age
    if (city === 'Киев') {
        alert(`Тебе ${age} лет.\nТы живешь в столице Украины\n${sport_answer}`)
    }else if (city === 'Вашингтон') {
        alert(`Тебе ${age} лет.\nТы живешь в столице США\n${sport_answer}`)
    }else if (city === 'Лондон') {
        alert(`Тебе ${age} лет.\nТы живешь в столице Англии\n${sport_answer}`)
    }else {
        alert(`Тебе ${age} лет.\nТы живешь в городе ${city}\n${sport_answer}`)
    }
}

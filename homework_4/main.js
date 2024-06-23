// homework_4.1
// let name = prompt(`Enter your name`)
// alert(`Hello, ${name}! How are you?`)

// homework_4.2
let numb = prompt('Enter a three-digit number')
numb = numb.split('')
if (numb.length !== 3) {
    alert('Enter a valid three-digit number')
}else {
    if (numb[0] === numb[1] && numb[1] === numb[2]) {
        alert('All numbers are the same')
    }else if (numb[0] === numb[1] || numb[0] === numb[2] || numb[1] === numb[2]) {
        alert('There are identical numbers')
    }else {
        alert('No similarities')
    }
}

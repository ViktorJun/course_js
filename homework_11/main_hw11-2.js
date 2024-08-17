document.addEventListener('DOMContentLoaded', function() {
    const newDiv = document.createElement("div");
    newDiv.id = "myContainer";
    document.body.appendChild(newDiv);
    const container = document.querySelector('#myContainer');

    const text = document.createElement("p");
    text.innerText = 'Lorem ipsum dolor sit amet.';
    text.style.color = 'blue'

    const button = document.createElement("button");
    button.innerText = 'Change Color';

    container.appendChild(text);
    container.appendChild(button);

    let counter = 0
    button.onclick = function () {
        if (counter % 2 === 0) {
            text.style.color = 'red'
        }else {
            text.style.color = 'blue'
        }
        counter++
    }
});

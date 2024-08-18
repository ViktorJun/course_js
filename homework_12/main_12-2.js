document.addEventListener('DOMContentLoaded', function() {
    const newDiv = document.createElement("div");
    newDiv.id = "myContainer";
    document.body.appendChild(newDiv);
    const container = document.querySelector('#myContainer');

    const buttonFirst = document.createElement("button");
    buttonFirst.innerText = 'Button 1';
    const buttonSecond = document.createElement("button");
    buttonSecond.innerText = 'Button 2';
    const buttonThird = document.createElement("button");
    buttonThird.innerText = 'Button 3';

    container.appendChild(buttonFirst);
    container.appendChild(buttonSecond);
    container.appendChild(buttonThird);

    buttonFirst.id = "buttonFirst";
    buttonSecond.id = "buttonSecond";
    buttonThird.id = "buttonThird";

    function getCurrentButton(event) {
        const buttonId = event.target.id;
        const buttonText = event.target.textContent;
        if (buttonId !== container.id) {
            alert(`Кликнуто на кнопку: ${buttonText}`)
            console.log(buttonId)
        }
    }
    container.addEventListener('click', getCurrentButton)
});
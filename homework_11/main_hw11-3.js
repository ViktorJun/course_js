function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

}
document.addEventListener('DOMContentLoaded', function() {
    const newDiv = document.createElement("div");
    newDiv.id = "myContainer";
    document.body.appendChild(newDiv);
    const container = document.querySelector('#myContainer');

    const image = document.createElement('img');
    image.src = `images/${getRandomInt(1, 10)}.jpeg`
    const button = document.createElement('button');
    button.innerText = 'Change images';

    container.appendChild(image)
    container.appendChild(button)

    button.onclick = function () {
        image.src = `images/${getRandomInt(1, 10)}.jpeg`
    }

    document.querySelector('#myContainer').style.cssText= `
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 30px;
    `
    document.querySelector('button').style.cssText= `
        width: 250px;
        height: 100px;
        border: none;
        background-color: black;
        color: white;
        font-size: 22px;
        border-radius: 20px;
    `
    document.querySelector('img').style.cssText= `
        width: 400px;
        height: 400px;
    `
});

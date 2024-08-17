document.addEventListener('DOMContentLoaded', function() {
    const newDiv = document.createElement("div");
    newDiv.id = "myContainer";
    document.body.appendChild(newDiv);
    const container = document.querySelector('#myContainer');

    const buttonPromptLink = document.createElement("button");
    buttonPromptLink.innerText = 'Input link';
    const buttonLink = document.createElement("button");
    buttonLink.innerText = 'Follow the link';

    container.appendChild(buttonPromptLink);
    container.appendChild(buttonLink);
    buttonPromptLink.setAttribute('id', 'promptLink')
    buttonLink.setAttribute('id', 'link')
    let link = ''
    function getLink(event) {
        const buttonId = event.target.id;
        console.log(buttonId)
        if (buttonId === 'promptLink') {
            link = prompt('Enter your link')
        }else if (buttonId === 'link') {
            location.assign(link)
        }
    }
    container.addEventListener('click', getLink)
});
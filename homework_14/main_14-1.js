const container = document.createElement("section");
container.className = "team";
document.body.appendChild(container);
const containerTeam = document.querySelector('.team');

const containerWrapper = document.createElement("div");
containerWrapper.className = "wrapper";
containerTeam.appendChild(containerWrapper);
const wrapper = document.querySelector('.wrapper');

let currentSlide = 0;
const slides = [];
const totalSlides = 3;

function createSlider(imageSrc, name, position, subtitleText) {
    const containerSlider = document.createElement("div");
    containerSlider.className = 'team_slider';
    containerSlider.style.display = slides.length === 0 ? 'flex' : 'none';
    slides.push(containerSlider);
    wrapper.appendChild(containerSlider);

    const containerButtonBack = document.createElement('div');
    containerButtonBack.className = 'container_button';
    containerSlider.appendChild(containerButtonBack);

    const buttonBack = document.createElement('a');
    buttonBack.href = '#';
    buttonBack.className = 'button back';
    buttonBack.addEventListener('click', () => showSlide(currentSlide - 1));
    containerButtonBack.appendChild(buttonBack);

    const back = document.createElement('p');
    back.textContent = '<';
    buttonBack.appendChild(back);

    const containerSliderImage = document.createElement("div");
    containerSliderImage.className = "team_slider_image";
    containerSlider.appendChild(containerSliderImage);

    const teamImage = document.createElement("img");
    teamImage.className = "image";
    teamImage.src = imageSrc;
    containerSliderImage.appendChild(teamImage);

    const containerSliderContent = document.createElement("div");
    containerSliderContent.className = "team_slider_content";
    containerSlider.appendChild(containerSliderContent);

    const teamLink = document.createElement("a");
    teamLink.className = "title_link";
    teamLink.href = "#";
    teamLink.innerHTML = `
        команда
        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 2L8 6.5L3.5 11" stroke="#24A3FF" stroke-width="2"/>
        </svg>`;
    containerSliderContent.appendChild(teamLink);

    const blockSubtitle = document.createElement("div");
    blockSubtitle.className = "block_subtitle";
    const subtitle = document.createElement("h2");
    subtitle.className = "subtitle";
    subtitle.textContent = subtitleText;
    blockSubtitle.appendChild(subtitle);
    containerSliderContent.appendChild(blockSubtitle);

    const teamName = document.createElement("h3");
    teamName.className = "team_slider_content_name";
    teamName.textContent = name;
    containerSliderContent.appendChild(teamName);

    const teamPosition = document.createElement("p");
    teamPosition.className = "team_slider_content_position";
    teamPosition.textContent = position;
    containerSliderContent.appendChild(teamPosition);

    const containerButtonNext = document.createElement('div');
    containerButtonNext.className = 'container_button';
    containerSlider.appendChild(containerButtonNext);

    const buttonNext = document.createElement('a');
    buttonNext.href = '#';
    buttonNext.className = 'button next';
    buttonNext.addEventListener('click', () => showSlide(currentSlide + 1));
    containerButtonNext.appendChild(buttonNext);

    const next = document.createElement('p');
    next.textContent = '>';
    buttonNext.appendChild(next);
}

createSlider("alex_desktop.jpg", "Олександр Олександровський", "Керуючий партнер", "Ми звикли брати на себе відповідальність та завжди гарантуємо чесну, вчасну допомогу, навіть у ситуаціях, коли більшість безсилі.");
createSlider("olga.jpeg", "Ольга Іванова", "Менеджер проектів", "Наші клієнти завжди можуть розраховувати на нас у найважливіших моментах.");
createSlider("nikolay.jpeg", "Микола Петренко", "Фінансовий директор", "Ми контролюємо кожну деталь та завжди прагнемо досконалості у всьому, що робимо.");

const containerPaginator = document.createElement("div");
containerPaginator.className = "paginator";
wrapper.appendChild(containerPaginator);
for (let i = 0; i < totalSlides; i++) {
    const point = document.createElement("div");
    point.className = "point";
    if (i === 0) {
        point.classList.add("blue");
    }
    point.addEventListener('click', () => showSlide(i));
    containerPaginator.appendChild(point);
}


function updateButtons() {
    const prevButton = slides[currentSlide].querySelector('.button.back');
    const nextButton = slides[currentSlide].querySelector('.button.next');

    if (currentSlide === 0) {
        prevButton.classList.add('disabled');
        prevButton.style.pointerEvents = 'none';
    } else {
        prevButton.classList.remove('disabled');
        prevButton.style.pointerEvents = 'auto';
    }

    if (currentSlide === totalSlides - 1) {
        nextButton.classList.add('disabled');
        nextButton.style.pointerEvents = 'none';
    } else {
        nextButton.classList.remove('disabled');
        nextButton.style.pointerEvents = 'auto';
    }
}

function showSlide(index) {
    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    slides[currentSlide].style.display = 'none';
    slides[index].style.display = 'flex';
    currentSlide = index;

    const points = document.querySelectorAll('.paginator .point');
    points.forEach((point, i) => {
        if (i === currentSlide) {
            point.classList.add('blue');
        } else {
            point.classList.remove('blue');
        }
    });
    updateButtons();
}

updateButtons();

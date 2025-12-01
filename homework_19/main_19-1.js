const apiKey = 'APIKey';
let lat = '';
let lon = '';

const sectionWeather = document.createElement('section');
document.body.appendChild(sectionWeather);

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
sectionWeather.appendChild(wrapper);

const weatherInfo = document.createElement('div');
weatherInfo.className = 'weather-info';
wrapper.appendChild(weatherInfo);

const nameInfoCity = document.createElement('p');
nameInfoCity.className = 'weather-info_elements';
nameInfoCity.textContent = 'Город';
weatherInfo.appendChild(nameInfoCity);

const nameCity = document.createElement('p');
nameCity.className = 'weather-info_elements';
nameCity.textContent = '--';
weatherInfo.appendChild(nameCity);

const nameInfoTemp = document.createElement('p');
nameInfoTemp.className = 'weather-info_elements';
nameInfoTemp.textContent = 'Температура';
weatherInfo.appendChild(nameInfoTemp);

const temp = document.createElement('p');
temp.className = 'weather-info_elements';
temp.textContent = '--';
weatherInfo.appendChild(temp);

const nameInfoDescription = document.createElement('p');
nameInfoDescription.className = 'weather-info_elements';
nameInfoDescription.textContent = 'Описание погоды';
weatherInfo.appendChild(nameInfoDescription);

const descriptionWeather = document.createElement('p');
descriptionWeather.className = 'weather-info_elements';
descriptionWeather.textContent = '--';
weatherInfo.appendChild(descriptionWeather);

const nameInfoWind = document.createElement('p');
nameInfoWind.className = 'weather-info_elements';
nameInfoWind.textContent = 'Скорость ветра';
weatherInfo.appendChild(nameInfoWind);

const windSpeed = document.createElement('p');
windSpeed.className = 'weather-info_elements';
windSpeed.textContent = '--';
weatherInfo.appendChild(windSpeed);

const button = document.createElement('button');
button.textContent = 'Update';
wrapper.appendChild(button);

button.addEventListener('click', updateWeather)

async function getWeatherJSON() {
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    try {
        const responseWeather = await fetch(urlWeather);
        if (!responseWeather.ok) {
            throw new Error('error with weather');
        }
        const weather = await responseWeather.json();
        getWeather(weather)
    }catch (error) {
        console.error(`Problem ${error}`);
    }
}

async function updateWeather() {
    const position = await getPosition();
    if (position) {
        await getWeatherJSON()
    }else {
        console.log('Пользователь запретил использовать свою геолокацию')
    }
}

function getWeather(response) {
    nameCity.textContent = response.name;
    temp.textContent = response.main.temp;
    descriptionWeather.textContent = response.weather[0].description;
    windSpeed.textContent = response.wind.speed;
}

async function getPosition() {
    try {
        const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        return true
    } catch (error) {
        return false;
    }
}

(async function () {
    await updateWeather()
})();

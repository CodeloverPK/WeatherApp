const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');

const temp_real_value = document.getElementById('temp_real_value');
const temp_status = document.getElementById('temp_status');

const datahide=document.querySelector(".middle_layer");
const city_name = document.getElementById('city_name');

const getInfo = async(event) => {
    event.preventDefault(); // to stop submit loading of form page on ? query 

    const cityVal = cityName.value;
    if (cityVal === '') {
        city_name.innerText = `Plz write city name before you search`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f9f6ee8c519c8fb7b8b127a0c186ffe6`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_real_value.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;

            if (tempMood === 'Clear') { 
                temp_status.innerHTML=`<i class="fas fa-sun" style='color:#ed8d80'></i>`
            } else if (tempMood === 'Clouds') {
                temp_status.innerHTML = `<i class="fas fa-cloud" style="color : #daebf5" ></i>`
            } else if (tempMood === 'Rain') {
                temp_status.innerHTML=`<i class='fas fa-cloud-rain' style="color : #daebf5 " ></i>`
            } else {
                temp_status.innerHTML=`<i class="fas fa-sun" style='color:#ed8d80'></i>`
            }
            datahide.classList.remove('data_hide');
        } catch {
            city_name.innerText = `Plz enter city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);



// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key};
//https://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=f9f6ee8c519c8fb7b8b127a0c186ffe6
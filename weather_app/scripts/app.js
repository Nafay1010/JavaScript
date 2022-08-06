const cityform = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
//output to the UI
const updateUI = data => {
    //using normal method
    // const citydetails = data.citydetails;
    // const weatherdetails = data.weatherdetails;

    //using destructuring method
    const {citydetails, weatherdetails} = data;


    details.innerHTML = `
                <div class="text-muted text-uppercase text-center details">
                <h5 class="my-3 display-4">${citydetails.EnglishName}</h5>
                <div class="my-4">${weatherdetails.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weatherdetails.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>
                </div>
    `;

    if(card.classList.contains('d-none'))
    {
        card.classList.remove('d-none');
    }
    console.log(weatherdetails);
    //setting icon

    let iconsrc = `img/icons/${weatherdetails.WeatherIcon}.svg`;
    icon.setAttribute('src', iconsrc);
    //setting day/night picture

    //ternary operator
    let timeSrc = weatherdetails.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    // let timeSrc = null;
    //normal method
    // if(weatherdetails.IsDayTime)
    // {
    //     timeSrc = 'img/day.svg';
    // }
    // else{
    //     timeSrc = 'img/night.svg';
    // }

    time.setAttribute('src', timeSrc);
};
const updatecity = async (city) => {
    const citydetails = await getcity(city);
    const weatherdetails = await getweather(citydetails.Key);

    // return {
    //     citydetails : citydetails,
    //     weatherdetails : weatherdetails 
    // };
    //OR in the case where the property name is the same as the value you can do
    return{citydetails, weatherdetails};
};  

cityform.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();

    const city = cityform.city.value.trim();
    cityform.reset();

    updatecity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));   
})
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var weatherTypes = ['clear sky', 'few clouds', 'scattered clouds', 'broken clouds', 'shower rain', 'rain', 'thunderstorm', 'snow', 'mist', 'overcast clouds'];
var weatherTypeImgs = [
  'https://openweathermap.org/img/wn/01d.png',
  'https://openweathermap.org/img/wn/02d.png',
  'https://openweathermap.org/img/wn/03d.png',
  'https://openweathermap.org/img/wn/04d.png',
  'https://openweathermap.org/img/wn/09d.png',
  'https://openweathermap.org/img/wn/10d.png',
  'https://openweathermap.org/img/wn/11d.png',
  'https://openweathermap.org/img/wn/13d.png',
  'https://openweathermap.org/img/wn/50d.png',
  'https://openweathermap.org/img/wn/03d.png'
];

var apiKey = "3045dd712ffe6e702e3245525ac7fa38";

function conversion(val) {
  return (val - 273).toFixed(2);
}

function updateWeather() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + 'Pécs' + '&appid=' + apiKey)
    .then(res => res.json())
    .then(data => {
      var descrip = data['weather']['0']['description'];
      var temperature = data['main']['temp'];
      temp.innerHTML = `<img src="images/temperature.png" style="width: 50px;"> <span style="position: absolute; top: 8px;">${conversion(temperature)} C</span>`;

      var src = '';
      for (var i = 0; i < weatherTypes.length; i++) {
        if (descrip === weatherTypes[i]) {
          src = weatherTypeImgs[i];
          break;
        }
      }
      description.innerHTML = `<img style="position: relative; top: 18px;" src="${src}"><span>${descrip}<span>`;
    })
    .catch(err => alert('You entered the wrong city name'));
}


updateWeather();


setInterval(updateWeather, 600000);

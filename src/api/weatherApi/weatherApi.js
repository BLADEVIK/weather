export default function WeatherApi({ city }) {
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=e34759cd105b48cea3775556241507&days=6&q=${city}`
  ).then((res) => {
    if (res.status === 400) {
      return console.log("Нет такого города");
    } else {
      return res.json();
    }
  });
}

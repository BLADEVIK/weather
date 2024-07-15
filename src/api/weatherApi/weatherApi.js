export default function WeatherApi({city}) {
  return fetch(
    `https://api.weatherapi.com/v1/current.json?key=e34759cd105b48cea3775556241507&q=${city}&aqi=no`
  ).then((res) => {
    console.log(res.json());
  });
}

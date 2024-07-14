export default function WeatherApi() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Rostov,ua&appid=f0f3a5df2608a399b4c97723fbdd30a7&units=metric`
  ).then((res) => {
    console.log(res);

    return res.json();
  });
}

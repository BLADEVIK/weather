import { useState } from "react";
import WeatherApi from "../../api/weatherApi/weatherApi";

export default function CardItem() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  WeatherApi().then((res) => {
    setData(res);
    console.log(res);
  });
  return (
    <>
      <h1>Прогноз погоды</h1>
      <input
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Введите город"
        type="text"
      />
      
    </>
  );
}

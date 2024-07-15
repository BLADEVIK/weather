import { useEffect, useState } from "react";
import WeatherApi from "../../api/weatherApi/weatherApi";

export default function CardItem() {
  const [search, setSearch] = useState("Moscow");
  const [data, setData] = useState([]);
  useEffect(() => {
    WeatherApi({ city: search }).then((res) => {
      setData(res);
    });
  }, [search]);
  console.log(data);
  return (
    <>
      <h1>Прогноз погоды города</h1>
      <input
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Введите город"
        type="text"
      />
      <ul>{data && data.map((el) => <li key={el}>{el}</li>)}</ul>
    </>
  );
}

import axios from "axios";

export function loadDataCurrentWeatherForcast() {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=Kyiv,ua&appid=363299d73e8f928e961676fcc902625c`
    )
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.warn(err));
}

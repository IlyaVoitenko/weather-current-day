import { loadDataCurrentWeatherForcast } from "../API";
import { getDataCurrnet } from "../../store/createActions";

export function getDataCurrentWeatherForcast() {
  return (dispatch) => {
    loadDataCurrentWeatherForcast()
      .then((data) => dispatch(getDataCurrnet(data)))
      .catch((err) => console.warn(err));
  };
}

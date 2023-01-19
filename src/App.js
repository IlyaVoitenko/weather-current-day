import "./App.css";
import { useDispatch } from "react-redux";
import { getDataCurrentWeatherForcast } from "./components/thunk";

function App() {
  const dispatch = useDispatch();
  dispatch(getDataCurrentWeatherForcast());
  return <div className="App">fssdfsfd</div>;
}

export default App;

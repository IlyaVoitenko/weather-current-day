import React from "react";
import { getWeatherList } from "../selectors";
import { useSelector, useDispatch } from "react-redux";
import WeatherItem from "../WeatherItem";
import { getDataCurrentWeatherForcast } from "../../components/thunk";
import { useEffect } from "react";

const WeatherList = () => {
  const dispatch = useDispatch();

  const listWeatherData = useSelector(getWeatherList);
  useEffect(() => dispatch(getDataCurrentWeatherForcast()), [dispatch]);

  return (
    <div className="flex justify-center items-center max-w-sm rounded overflow-hidden shadow-lg w-1/3  ">
      {listWeatherData.map((item) => (
        <WeatherItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default WeatherList;

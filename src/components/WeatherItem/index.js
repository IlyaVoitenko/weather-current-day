import React from "react";
import NameCity from "./NameCity";
import TempData from "./TempData";
import WeatherDesck from "./WeatherDesck";

const WeatherItem = ({ item }) => {
  const { name, main, weather } = item || {};
  return (
    <div className=" bg-slate-600 flex text-white flex-col w-full mt-2 justify-center items-center">
      <NameCity name={name} />
      <TempData tempData={main} />
      <WeatherDesck weather={weather} />
    </div>
  );
};

export default WeatherItem;

import React from "react";
import WeatherList from "../WeatherList";
import LeftCard from "../LeftCard";
import RightCard from "../RightCard";

const Main = () => {
  return (
    <div className=" flex flex-col  items-center  justify-evenly ">
      <LeftCard />
      <RightCard />
      <WeatherList />
    </div>
  );
};

export default Main;

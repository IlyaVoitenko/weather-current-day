import React from "react";
import DisckItem from "./DisckItem";

const WeatherDesck = ({ weather }) => {
  return (
    <div>
      {weather.map((item, index) => (
        <DisckItem key={index} data={item} />
      ))}
    </div>
  );
};

export default WeatherDesck;

import React from "react";

const DisckItem = ({ data }) => {
  const { main, description, icon } = data || {};
  return (
    <div className=" flex flex-col justify-center items-center">
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt=""
        className="w-[50%]"
      />
      <p>{main}</p>
      <p>{description}</p>
    </div>
  );
};

export default DisckItem;

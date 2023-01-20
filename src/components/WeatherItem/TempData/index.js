import React from "react";

const TempData = ({ tempData }) => {
  console.log("temp :", tempData);
  const { temp } = tempData || {};
  const tempC = Math.round(temp - 273);
  return <div>{tempC}&ordm;</div>;
};

export default TempData;

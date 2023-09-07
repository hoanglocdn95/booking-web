import React from "react";

const CityItem = ({ data }) => {
  return (
    <>
      <div className="city__container--item">
        <img src={data.image} alt="" className="img" />
        <div className="title">
          <h1> {data.name} </h1>
          <h2>{data.subText}</h2>
        </div>
      </div>
    </>
  );
};

export default CityItem;

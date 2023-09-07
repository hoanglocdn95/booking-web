import React from "react";

const TypeOfHotelItem = ({ data }) => {
  return (
    <div className="type__container">
      <img src={data.image} alt="" className="type__container--img" />
      <div className="type__container--text">
        <h1>{data.name}</h1>
        <h2>{data.count} hotels</h2>
      </div>
    </div>
  );
};

export default TypeOfHotelItem;

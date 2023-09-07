import React from "react";
import { Link } from "react-router-dom";

const HotelItem = ({ data }) => (
  <div className="favorite__item">
    <img src={data.image_url} alt="" className="favorite__item--img" />
    <Link to="/detail">{data.name}</Link>
    <span className="favorite__item--city">{data.city}</span>
    <span className="favorite__item--price">Starting from $ {data.price}</span>
    <div className="favorite__item--rating">
      <button>{data.rate}</button>
      <span>{data.type}</span>
    </div>
  </div>
);

export default HotelItem;

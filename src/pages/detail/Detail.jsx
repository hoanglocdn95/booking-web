import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { DETAIL } from "../../constants/constants";

const Detail = () => {
  return (
    <div className="detail">
      <div className="detail__top">
        <div className="detail__top--left">
          <h1 className="title">{DETAIL.name}</h1>
          <div className="address">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{DETAIL.address}</span>
          </div>
          <span className="distance">{DETAIL.distance}</span>
          <span className="price-highlight">{DETAIL.price}</span>
        </div>
        <div className="detail__top--right">
          <button className="booknow">Reserve or Book Now!</button>
        </div>
      </div>

      <div className="detail__main">
        {DETAIL.photos.map((photo, index) => {
          return (
            <div className="detail__main--photo" key={`photo--${index}`}>
              <img src={photo} alt=" this is room pic" />
            </div>
          );
        })}
      </div>

      <div className="detail__bot">
        <div className="detail__bot--decription">
          <h1>{DETAIL.title}</h1>
          <p>{DETAIL.description}</p>
        </div>
        <div className="detail__bot--offer">
          <h1>Perfect for a 9-night stay!</h1>
          <span>
            Located in the real heart of Krakow, this property has an excellent location
            score of 9.8!
          </span>
          <h2>
            <b>$ {DETAIL.nine_night_price}</b> (9 nights)
          </h2>
          <button>Reserve or Book Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;

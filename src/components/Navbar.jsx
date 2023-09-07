import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPlane, faCar, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  const NAV_DATA = [
    {
      type: "Stays",
      icon: faBed,
      active: true,
    },
    {
      type: "Flights",
      icon: faPlane,
      active: false,
    },
    {
      type: "Car rentals",
      icon: faCar,
      active: false,
    },
    {
      type: "Attractions",
      icon: faBed,
      active: false,
    },
    {
      type: "Airport taxis",
      icon: faTaxi,
      active: false,
    },
  ];
  return (
    <div className="nav-container">
      <div className="top-section container">
        <div>
          <Link to="/">
            <h1>Booking Website</h1>
          </Link>
        </div>
        <div className="top-section-button">
          <Link to="#">Register</Link>
          <Link to="#">Login</Link>
        </div>
      </div>
      <ul className="navbar container">
        {NAV_DATA.map((item, index) => {
          return (
            <li
              key={`${item.type}-index`}
              className={`nav-item ${item.active && "active"} `}
            >
              <Link to="#">
                <FontAwesomeIcon icon={item.icon} color="white" />
                <h3>{item.type}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;

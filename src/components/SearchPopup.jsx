import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const SearchPopup = () => {
  const defaultOptions = {
    adult: 1,
    children: 0,
    room: 1,
  };
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [selectedData, setSelectedData] = useState(location.state.selectedDate);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options || defaultOptions);

  const handleChangeOption = (name, value) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="searchpopup">
      <h1 className="searchpopup__title">Search</h1>
      <div className="searchpopup__destination">
        <h4>Destination</h4>
        <input placeholder={destination} type="text" />
      </div>
      <div className="searchpopup__date">
        <h4>Check-in Date</h4>
        <input
          onClick={() => setOpenDate(!openDate)}
          value={`${format(selectedData[0].startDate, "MM/dd/yyyy")} to ${format(
            selectedData[0].endDate,
            "MM/dd/yyyy"
          )}`}
        />
        {openDate && (
          <DateRange
            onChange={(item) => setSelectedData([item.selection])}
            minDate={new Date()}
            ranges={selectedData}
          />
        )}
      </div>
      <div className="searchpopup__options">
        <h4>Options</h4>
        <div className="searchpopup__options--container">
          <div className="searchpopup__options--item">
            <label>
              Min price <small>per night</small>
            </label>
            <input type="number" />
          </div>
          <div className="searchpopup__options--item">
            <label>
              Max price <small>per night</small>
            </label>
            <input type="number" />
          </div>
          <div className="searchpopup__options--item">
            <label>Adult</label>
            <input
              type="number"
              min={1}
              placeholder={options.adult}
              onChange={(e) => {
                handleChangeOption("adult", e.target.value);
              }}
            />
          </div>
          <div className="searchpopup__options--item">
            <label>Children</label>
            <input
              type="number"
              min={0}
              placeholder={options.children}
              onChange={(e) => {
                handleChangeOption("children", e.target.value);
              }}
            />
          </div>
          <div className="searchpopup__options--item">
            <label>Room</label>
            <input
              type="number"
              min={1}
              placeholder={options.room}
              onChange={(e) => {
                handleChangeOption("room", e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <button className="searchpopup__button">Search</button>
    </div>
  );
};

export default SearchPopup;

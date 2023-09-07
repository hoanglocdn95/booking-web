import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { faBed, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [selectedDate, setSelectedDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleChangeOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/search", { state: { destination, selectedDate, options } });
  };

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__container--title">
          A lifetime of discounts? It's Genius.
        </h1>
        <p className="header__container--desc">
          Get rewarded for your travels - unlock instant savings of 10% or more with a
          free account
        </p>
        <button className="header__container--btn">Sign in / Register</button>
        <div className="header__container--search">
          <div className="search__item">
            <FontAwesomeIcon icon={faBed} className="search__item--icon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="search__item--input"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="search__item">
            <FontAwesomeIcon icon={faCalendarDays} className="search__item--icon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="search__item--text"
            >{`${format(selectedDate[0].startDate, "dd/MM/yyyy")} to ${format(
              selectedDate[0].endDate,
              "dd/MM/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setSelectedDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={selectedDate}
                className="search__item--date"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="search__item">
            <FontAwesomeIcon icon={faPerson} className="search__item--icon" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="search__item--text"
            >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
            {openOptions && (
              <div className="search__item--option">
                <div className="option__item">
                  <span className="option__item--text">Adult</span>
                  <div className="option__item--amount">
                    <button
                      disabled={options.adult <= 1}
                      className="btn-amount"
                      onClick={() => handleChangeOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="amount">{options.adult}</span>
                    <button
                      className="btn-amount"
                      onClick={() => handleChangeOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="option__item">
                  <span className="option__item--text">Children</span>
                  <div className="option__item--amount">
                    <button
                      disabled={options.children <= 0}
                      className="btn-amount"
                      onClick={() => handleChangeOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="amount">{options.children}</span>
                    <button
                      className="btn-amount"
                      onClick={() => handleChangeOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="option__item">
                  <span className="option__item--text">Room</span>
                  <div className="option__item--amount">
                    <button
                      disabled={options.room <= 1}
                      className="btn-amount"
                      onClick={() => handleChangeOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="amount">{options.room}</span>
                    <button
                      className="btn-amount"
                      onClick={() => handleChangeOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="search__item">
            <button className="btn-submit" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

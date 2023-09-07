import CityItem from "../../components/CityItem";
import Form from "../../components/Form";
import HotelItem from "../../components/HotelItem";
import TypeOfHotelItem from "../../components/TypeOfHotelItem";
import { CITY_LIST, TYPE_OF_HOTEL, FAVORITE_HOTEL } from "../../constants/constants";

const renderSectionCity = () => {
  return CITY_LIST.map((item, index) => {
    return (
      <div key={`itemCity--${index}`}>
        <CityItem data={item} />
      </div>
    );
  });
};

const renderSectionHotelType = () => {
  return TYPE_OF_HOTEL.map((item, index) => (
    <div key={`${item.name}--${index}`}>
      <TypeOfHotelItem data={item} />
    </div>
  ));
};

const renderHotelFavorite = () => {
  return FAVORITE_HOTEL.map((item, index) => (
    <div key={`${item.name}--${index}`}>
      <HotelItem data={item} />
    </div>
  ));
};
const Home = () => {
  return (
    <div className="homeBody">
      <section className="city__container">{renderSectionCity()}</section>

      <section className="hoteltype__container">
        <h1 className="hoteltype__container--title">Browse by property type</h1>
        <div className="hoteltype__container--box">{renderSectionHotelType()}</div>
      </section>
      <section className="hotel__favorite">
        <h1 className="hotel__favorite--title">Homes guests love</h1>
        <div className="hotel__favorite--box">{renderHotelFavorite()}</div>
      </section>
      <section className="form">
        <Form />
      </section>
    </div>
  );
};

export default Home;

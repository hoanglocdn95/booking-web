const SearchListItem = ({ data }) => {
  return (
    <div className="searchlist__item">
      <img src={data.image_url} alt="anh phong" className="searchlist__item--img" />
      <div className="searchlist__item--desc">
        <h1 className="searchlist__item--desc-title">{data.name}</h1>
        <span className="searchlist__item--desc-distance">
          {" "}
          {data.distance} from center
        </span>
        <span className="searchlist__item--desc-tag">{data.tag}</span>
        <span className="searchlist__item--desc-subtitle">{data.description}</span>
        <span className="searchlist__item--desc-features">{data.type}</span>
        {data.free_cancel && (
          <span className="searchlist__item--desc-cancel">
            <div>Free cancellation</div>
            <div>You can cancel later, so lock in this great price today!</div>
          </span>
        )}
      </div>
      <div className="searchlist__item--details">
        <div className="rating">
          <span> {data.rate_text} </span>
          <div> {data.rate} </div>
        </div>
        <div className="sub__detail">
          <span className="price">$ {data.price} </span>
          <p className="taxop">Includes taxes and fees</p>
          <button className="button">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;

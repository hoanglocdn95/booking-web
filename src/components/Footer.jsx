const FOOTER_DATA = [
  {
    col_number: 1,
    col_values: ["Countries", "Regions", "Cities", "Districts", "Airports", "Hotels"],
  },
  {
    col_number: 2,
    col_values: ["Homes", "Apartments", "Resorts", "Villas", "Hostels", "Guest houses"],
  },
  {
    col_number: 3,
    col_values: [
      "Unique places to stay",
      "Reviews",
      "Unpacked: Travel articles",
      "Travel communities",
      "Seasonal and holiday deals",
    ],
  },
  {
    col_number: 4,
    col_values: [
      "Car rental",
      "Flight Finder",
      "Restaurant reservations",
      "Travel Agents",
    ],
  },
  {
    col_number: 5,
    col_values: [
      "Curtomer Service",
      "Partner Help",
      "Careers",
      "Sustainability",
      "Press center",
      "Safety Resource Center",
      "Investor relations",
      "Terms & conditions",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__list">
        {FOOTER_DATA.map((column, index) => {
          return (
            <ul className="footer__list--column" key={`column--${column.col_number}`}>
              {column.col_values.map((value, index) => {
                return <li key={`column--item--${value}--${index}`}>{value}</li>;
              })}
            </ul>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;

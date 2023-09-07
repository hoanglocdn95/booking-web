import { useLocation } from "react-router-dom";
import SearchPopup from "../../components/SearchPopup";
import SearchList from "../../components/SearchList";

const Search = () => {
  const location = useLocation();
  let state = location.state;
  return (
    <div className="search">
      <SearchPopup />
      <SearchList />
    </div>
  );
};

export default Search;

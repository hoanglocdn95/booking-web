import React from "react";
import { SEARCH_LIST } from "../constants/constants";
import SearchListItem from "./SearchListItem";

function SearchList() {
  return (
    <section className="searchlist">
      {SEARCH_LIST.map((item, index) => {
        return (
          <div key={`searchitem--${index}`}>
            <SearchListItem data={item} />
          </div>
        );
      })}
    </section>
  );
}

export default SearchList;

import React from "react";
import SearchResult from "./SearchResult";

const SearchResults = ({ searchResult }) => {
  return (
    <div className="pt-4 ">
      <div>
        <SearchResult
          id={searchResult.id}
          title={searchResult.title}
          price={searchResult.price}
          quantity={searchResult.quantity}
          location={searchResult.location}
          description={searchResult.description}
          category={searchResult.category}
        />
      </div>
    </div>
  );
};

export default SearchResults;

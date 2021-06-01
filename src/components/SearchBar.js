import { React, useRef } from "react";
import SearchResults from "./SearchResults";

const SearchBar = ({ searchResults, searchTerm, searchKeyword }) => {
  const inputEl = useRef("");

  const getSearchTerm = () => {
    searchKeyword(inputEl.current.value);
  };

  const renderProductList =
    searchResults === ""
      ? ""
      : searchResults.map((searchResult) => {
          return (
            <SearchResults searchResult={searchResult} key={searchResult.id} />
          );
        });

  return (
    <div>
      <div className="flex justify-center w-3/4 m-auto h-20 h-1/6 m-0    ">
        <div className="flex w-1/2 h-10 content-center  ">
          <input
            ref={inputEl}
            type="text"
            value={searchTerm}
            onChange={getSearchTerm}
            className=" w-full h-13 border-solid border-2 border-light-blue-500"
            placeholder="검색어를 입력하세요."
          />

          <svg
            className="content-center"
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-center w-3/4 m-auto h-20 h-1/6 m-0 ">
        <div className="flex">
          {renderProductList.length > 0 ? renderProductList : ""}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

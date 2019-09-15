import React from "react";
import CustomRadio from "../Shared/CustomRadio";

const SearchListMenu = React.memo(({ handleChange, filterBy }) => {
  return (
    <div className="text-center my-5">
      <CustomRadio
        value="all"
        label="All"
        id="customRadio1"
        handleChange={handleChange}
        filterBy={filterBy}
      />
      <CustomRadio
        value="tv"
        label="TV Shows"
        id="customRadio2"
        handleChange={handleChange}
        filterBy={filterBy}
      />
      <CustomRadio
        value="movie"
        label="Movies"
        id="customRadio3"
        handleChange={handleChange}
        filterBy={filterBy}
      />
      <CustomRadio
        value="person"
        label="People"
        id="customRadio4"
        handleChange={handleChange}
        filterBy={filterBy}
      />
    </div>
  );
});

export default SearchListMenu;

import React from "react";
import CustomRadio from "./CustomRadio";

function SearchListMenu(props) {
  return (
    <div className="text-center my-5">
      <CustomRadio
        value="all"
        label="All"
        id="customRadio1"
        handleChange={props.handleChange}
        filterBy={props.filterBy}
      />
      <CustomRadio
        value="tv"
        label="TV Shows"
        id="customRadio2"
        handleChange={props.handleChange}
        filterBy={props.filterBy}
      />
      <CustomRadio
        value="movie"
        label="Movies"
        id="customRadio3"
        handleChange={props.handleChange}
        filterBy={props.filterBy}
      />
      <CustomRadio
        value="person"
        label="People"
        id="customRadio4"
        handleChange={props.handleChange}
        filterBy={props.filterBy}
      />
    </div>
  );
}

export default SearchListMenu;

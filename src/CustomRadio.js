import React from "react";
import "./CustomRadio.css";

function CustomRadio(props) {
  return (
    <div className="custom-control custom-radio custom-control-inline">
      <input
        checked={props.filterBy === props.value}
        value={props.value}
        onChange={props.handleChange}
        type="radio"
        id={props.id}
        name={props.id}
        className="custom-control-input"
      />
      <label className="custom-control-label" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
}

export default CustomRadio;

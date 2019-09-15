import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

const InputField = React.memo(props => {
  const [searchText, setSearchText] = useState("");
  const searchQuery = queryString.parse(props.location.search);

  useEffect(() => {
    if (searchQuery.query) {
      setSearchText(searchQuery.query);
    }
  }, [searchQuery.query]);

  const handleChange = e => {
    setSearchText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchText.length > 2) {
      props.history.push({
        pathname: "/search",
        search: `?query=${searchText}`
      });
    }
  };
  return (
    <div className="text-center mt-5">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={searchText}
            onChange={handleChange}
            className="form-control"
            placeholder={props.placeholder}
            aria-label={props.placeholder}
            aria-describedby="button-addon2"
            autoFocus
          />
          <div className="input-group-append">
            <button className="btn btn-outline-success" type="submit" id="button-addon2">
              {props.buttonText}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
});

export default withRouter(InputField);

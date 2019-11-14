import React, { useState, useEffect } from "react";
import KeywordItem from "./KeywordItem";
import Loading from "../Shared/Loading";
import { Link } from "react-router-dom";
import { mediaHelper } from "../../Utils/Network";
import Dropdown from "react-bootstrap/Dropdown";
import queryString from "query-string";
import SadFace from "../Shared/SadFace";
import axios from "axios";
import "./Keyword.css";

function Keyword({ match, location }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const parsedQuery = queryString.parse(location.search);

  // We check on first mount if url has any keyword related parameters and if so, download items
  // Also download items on media type change which is changed by dropdown

  useEffect(() => {
    window.scrollTo(0, 0);
    const getItems = async () => {
      setIsLoading(true);
      const response = await axios.get(
        mediaHelper.mediaWithKeyword(parsedQuery.type, match.params.id)
      );
      setItems(response.data.results);
      setIsLoading(false);
    };
    getItems();
  }, [parsedQuery.type, match.params.id]);

  if (!items.length === 0 && isLoading === false) return <SadFace />;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="py-5">
            <div className="container text-center p-0">
              <Dropdown>
                <Dropdown.Toggle variant="outline-info btn-sm" id="dropdown-basic">
                  {parsedQuery.type === "tv" ? "TV Shows" : "Movies"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to={{ pathname: match.url, search: `?type=movie` }}>
                    Movies
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as={Link} to={{ pathname: match.url, search: `?type=tv` }}>
                    TV Shows
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          {items.length > 0 && <KeywordItem items={items} type={parsedQuery.type} />}
        </>
      )}
    </>
  );
}

export default Keyword;

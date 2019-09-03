import React, { useState, useEffect } from "react";
import CastList from "./CastList";
import Subtitle from "./Subtitle";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import SadFace from "./SadFace";
import { getCasts, getItem } from "./Prova";
import queryString from "query-string";
import "./ItemInfo.css";

const ItemInfo = ({ location, selectedItem, scrollTo }) => {
  const [item, setItem] = useState({});
  const [casts, setCasts] = useState([]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState(false);
  const searchQuery = queryString.parse(location.search);

  useEffect(() => {
    setIsDownloading(true);
    getItem(searchQuery.details, setItem, setError);
    getCasts(searchQuery.details, setCasts, setIsDownloading, setError);
  }, [searchQuery.details]);

  useEffect(() => {
    if (item.id) {
      selectedItem(item);
    }
  }, [item, selectedItem]);

  return (
    <div>
      {isDownloading && <Loading />}
      {isDownloading === false && error && <SadFace />}
      {isDownloading === false && item.id && (
        <div className="item__container">
          <CastList casts={casts} from="movies" />
          <Subtitle text="Details" />
          <ItemDetail item={item} scrollTo={scrollTo} />
        </div>
      )}
    </div>
  );
};

export default ItemInfo;

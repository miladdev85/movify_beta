import React, { useState, useEffect } from "react";
import { getRecommendations } from "./Prova";
import { withRouter } from "react-router-dom";
import MediaListItem from "./MediaListItem";
import Subtitle from "./Subtitle";

function MediaRecs({ match, location }) {
  const [items, setItems] = useState([]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState(false);
  const type = match.url.includes("/tv/") ? "tv" : "movie";

  useEffect(() => {
    getRecommendations(type, match.params.id, setItems, setIsDownloading, setError);
  }, [match.params.id]);

  return (
    <>
      <Subtitle text={"Recommendations"} />
      <MediaListItem from={type} items={items} col="col-6 col-lg-2 pb-2" imgHeight="200px" />
    </>
  );
}

export default withRouter(MediaRecs);

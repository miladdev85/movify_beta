import React from "react";
import TvListItem from "./TvListItem";

function TvRecs({ recs }) {
  return (
    <div className="container">
      <div className="row">
        <TvListItem items={recs} col="col-6 col-lg-2" imgHeight="200px" />
      </div>
    </div>
  );
}

export default TvRecs;

import React from "react";
import TvListItem from "./TvListItem";

function TvRecs({ recs }) {
  return (
    <div className="container">
      <div className="row">
        <TvListItem items={recs} col="col-6 col-lg-2 pb-3 p-1" imgHeight="240px" />
      </div>
    </div>
  );
}

export default TvRecs;

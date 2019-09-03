import React from "react";
import TvListItem from "./TvListItem";

function TvRecs({ recs }) {
  return (
    <div className="container">
      <div className="row">
        <TvListItem items={recs} col="col-6 col-lg-4 pl-0 pr-2" imgHeight="180px" />
      </div>
    </div>
  );
}

export default TvRecs;

import React from "react";
import TvListItem from "./TvListItem";

function TvRecs({ recs }) {
  return (
    <div className="container">
      <div className="row">
        <TvListItem items={recs} col="col-6 col-lg-2 pl-0 pb-2 " imgHeight="220px" />
      </div>
    </div>
  );
}

export default TvRecs;

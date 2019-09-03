import React from "react";
import TvListItem from "./TvListItem";

function TvRecs({ recs }) {
  return <TvListItem items={recs} col="col-6 col-lg-2 pb-2" imgHeight="200px" />;
}

export default TvRecs;

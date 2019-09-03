import React from "react";
import queryString from "query-string";
import { withRouter } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = React.memo(props => {
  const parsedQuery = queryString.parse(props.location.search);
  const modifyGenre = id => {
    props.history.push({
      search: queryString.stringify({ ...parsedQuery, genre: id })
    });
    props.scrollTo();
  };

  return (
    <div className="row detail__container">
      <div className="col-lg-7 mb-3">
        <img
          src={
            props.item.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${props.item.backdrop_path}`
              : "https://imgcld.yatra.com/ytimages/image/upload/t_mobiledetailsimg/v1/default.jpg"
          }
          className="img-fluid rounded"
          alt={`${props.item.title}`}
        />
      </div>
      <div className="col d-flex flex-column text-muted">
        <h4>
          {props.item.title}
          <small> ({props.item.release_date.substring(0, 4)})</small>
        </h4>
        <div className="row">
          <div className="col-3">
            <span
              className={`mr-auto badge badge-pill badge-${
                props.item.vote_average < 6.3 ? "secondary" : "success"
              } p-2 rating`}
            >
              Rating: {props.item.vote_average}
            </span>
          </div>
          <div className="col-9 d-flex flex-wrap">
            {props.item.genres.map(genre => (
              <span
                key={genre.id}
                className="badge badge-pill badge-light genre__badge p-2 m-1"
                onClick={() => modifyGenre(genre.id)}
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
        {/* <div className="d-flex flex-wrap mt-1 mb-3 ram">
         
          
        </div> */}

        <h5 className="mt-2">Overview</h5>
        <span className="item__text pt-3">{props.item.overview}</span>
        <div className="d-flex justify-content-end mt-auto">
          <i className="fas fa-chevron-up scroll__up" onClick={props.scrollTo} />
        </div>
      </div>
    </div>
  );
});

export default withRouter(ItemDetail);

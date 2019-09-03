import React from "react";
import { Link } from "react-router-dom";
import "./People.css";

function PopularPeople(props) {
  return (
    <div className="container">
      <h3 className="mt-5 mb-4">Popular People</h3>
      <div className="row">
        {props.people.length > 0 &&
          props.people.map(person => (
            <div key={person.id} className="col p-2 m-1 people__list ">
              <div className="" style={{ width: "12rem" }}>
                <Link className="people__link text-reset" to={`/people/${person.id}`}>
                  <img
                    src={`http://image.tmdb.org/t/p/original${person.profile_path}`}
                    className="img-fluid popular_people_img rounded"
                    alt={person.name}
                  />

                  <div>
                    <span className="m-0">{person.name}</span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PopularPeople;

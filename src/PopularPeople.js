import React from "react";
import { Link } from "react-router-dom";
import "./People.css";
import pop_img from "./pop_img_no.png";

function PopularPeople({ people }) {
  return (
    <div className="container">
      <h3 className="mt-5 mb-4">Popular People</h3>
      <div className="row">
        {people.length > 0 &&
          people.map(person => (
            <div key={person.id} className="col-6 col-md-4 col-lg-3 col-xl-2 pb-3 people__list">
              <div className="">
                <Link className="people__link text-reset" to={`/people/${person.id}`}>
                  <img
                    src={
                      person.profile_path
                        ? `https://image.tmdb.org/t/p/original${person.profile_path}`
                        : pop_img
                    }
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

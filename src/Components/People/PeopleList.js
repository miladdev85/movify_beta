import React from "react";
import { Link } from "react-router-dom";
import Image from "../Shared/Image";

const PeopleList = ({ people }) => {
  return (
    <>
      {people.map(person => (
        <div key={person.id} className="col-6 col-md-4 col-lg-3 col-xl-2 pb-3">
          <div>
            <Link className="people__link text-reset brightness" to={`/people/${person.id}`}>
              <Image
                source={person.profile_path}
                type="popular"
                alt={person.name}
                className="rounded people__image"
              >
                <span className="m-0">{person.name}</span>
              </Image>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default PeopleList;

import React, { useState, useEffect } from "react";
import GenericModal from "../GenericModal";
import Image from "../Shared/Image";

const PeopleBiography = ({ person }) => {
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const maxLength = 800;

  useEffect(() => {
    if (person.biography.length > maxLength) {
      setShowButton(true);
    }
  }, [person.biography.length]);

  // Logic for how biography text should be displayed based on text length and weither or not modal is open

  const biographyText = text => {
    if (showModal) {
      return text;
    } else if (text.length > maxLength) {
      const exp = new RegExp(`^([\\s\\S]{${maxLength}}\\S*)[\\s\\S]*`);
      return `${text.replace(exp, "$1")} ...`;
    } else if (text.length > 0 && text.length < maxLength) {
      return text;
    } else {
      return `We don't have a biography for ${person.name}`;
    }
  };
  return (
    <div className="bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-3 mt-3 imdb__container">
            <a
              href={`https://www.imdb.com/name/${person.imdb_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                source={person.profile_path}
                type="person"
                alt={person.name}
                className="imdb__image rounded"
              />
              <div className="imdb__back">
                <i className="fas fa-external-link-alt fa-2x text-white pb-1" />
                <p className="imdb__text">Show IMDB Profile</p>
              </div>
            </a>
          </div>
          <div className="col my-4">
            <h1 className="font-weight-bold">{person.name}</h1>
            <h5 className="font-weight-bold my-4">Biography</h5>
            <pre>{biographyText(person.biography)}</pre>

            <div className="d-flex justify-content-center">
              {showButton && (
                <i
                  className="fas fa-chevron-circle-down arrow__down"
                  onClick={() => setShowModal(true)}
                />
              )}
              <GenericModal
                show={showModal}
                onHide={() => setShowModal(false)}
                person={person}
                title="Biography"
                maintitle={person.name}
                textcontent={biographyText(person.biography)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleBiography;

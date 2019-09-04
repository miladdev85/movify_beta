import React from "react";

function PeopleInfo({ person }) {
  return (
    <div className="d-none d-md-block col-3 detail__box">
      <p className="font-weight-bold mt-3">Personal Info</p>
      <p className="mb-1 personal__title">Known For</p>
      <p className="small mb-2 personal__text">{person.known_for_department}</p>
      <p className="mb-1 personal__title">Gender</p>
      <p className="small mb-2 personal__text">{person.gender === 1 ? "Female" : "Male"}</p>
      <p className="personal__title mb-1">Birthday</p>
      <p className="small personal__text mb-2">{person.birthday}</p>
      <p className="personal__title mb-1">Place of Birth</p>
      <p className="personal__text small mb-2">{person.place_of_birth}</p>
    </div>
  );
}

export default PeopleInfo;

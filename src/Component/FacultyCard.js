import React from "react";

const FacultyCard = ({
  id,
  name,
  subject,
  email,
  phone,
  image,
  classId,
  courseId,
}) => {
  return (
    <div className="card mb-4">
      <img src={image} className="card-img-top" alt={name} style={{ objectFit: "contain", height: "300px" }}/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Email:</strong> {email}
          <br />
          <strong>Phone:</strong> {phone}
        </p>
        <p className="card-text">
          <strong>Subject:</strong> {subject}
          <br />
          <strong>Class:</strong> {classId}
          <br />
          <strong>Course:</strong> {courseId}
        </p>
      </div>
    </div>
  );
};

export default FacultyCard;

import React from 'react'
import { customFetch } from '../Utils';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';

export const loader = async () => {
  const res = await customFetch.get("/student");
  // console.log(res);
  return { allStudents: res.data };
};

export const Students = () => {
  const {allStudents} =useLoaderData();
  // console.log(allStudents);
  return (
    <div className="container mt-4">
      <h2>Students</h2>

      <div className="row mt-4">
        {allStudents.map((student) => (
          <div key={student.id} className="col-md-4">
            <Link to={`/students/${student.id}`} className="card-link text-decoration-none">
              <div className="card mb-4">
                <img
                  src={student.image}
                  className="card-img-top"
                  alt={student.name}
                  style={{ objectFit: "fill", height: "300px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{student.name}</h5>
                  <p className="card-text">
                    <strong>Age:</strong> {student.age}
                    <br />
                    <strong>Class:</strong> {student.classId}
                  </p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Marks:</strong>
                    </li>
                    {Object.entries(student.marks).map(([subject, mark]) => (
                      <li key={subject} className="list-group-item">
                        {subject}: {mark}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

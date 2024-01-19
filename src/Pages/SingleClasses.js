import React from "react";
import { customFetch } from "../Utils";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

export const loader = async ({ params }) => {
  const res = await customFetch.get(`/class/${params.id}`);
  const allStudents = await customFetch.get("/student");
  const allTeachers = await customFetch.get("/teacher");

  // Filter students based on the classId
  const studentsInClass = allStudents.data.filter(
    (student) => student.classId === res.data.classId
  );

  // Filter teachers based on the classId
  const teachersInClass = allTeachers.data.filter(
    (teacher) => teacher.classId === res.data.classId
  );

  // Combine the class data with the filtered students and teachers
  const classWithStudentsAndTeachers = {
    ...res.data,
    students: studentsInClass,
    teachers: teachersInClass,
  };
  //   console.log(classWithStudentsAndTeachers);
  return { data: classWithStudentsAndTeachers };
};

export const SingleClasses = () => {
  const { data } = useLoaderData();
  // const data = res
  console.log(data);
  return (
    <div className="container mt-4">
      <h2>{data.name}</h2>

      {/* Subjects Section */}
      <div className="row mt-4">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Subjects</h5>
              <ul className="list-group list-group-flush">
                {data.courseID?.map((course, index) => (
                  <li key={index} className="list-group-item">
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Faculties Section */}
      <div className="row mt-4">
        <h2>Faculties</h2>
        {data.teachers.map((teacher) => (
          <div key={teacher.id} className="col-md-4">
            <Link
              to={`/faculties/${teacher.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card mb-4">
                <img
                  src={teacher.image}
                  className="card-img-top"
                  alt={teacher.name}
                  style={{ objectFit: "fill", height: "300px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{teacher.name}</h5>
                  <p className="card-text">
                    <strong>Email:</strong> {teacher.email}
                    <br />
                    <strong>Phone:</strong> {teacher.phone}
                  </p>
                  <p className="card-text">
                    <strong>Subject:</strong> {teacher.subject}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Students Section */}
      <div className="row mt-4">
        <h2>Students</h2>
        {data.students?.map((student) => (
          <div key={student.id} className="col-md-4">
            <Link
              to={`/students/${student.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card mb-4">
                <img
                  src={student.image}
                  className="card-img-top"
                  alt={student.name}
                  style={{ objectFit: "fill", height: "350px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{student.name}</h5>
                  <p className="card-text">
                    <strong>Age:</strong> {student.age}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

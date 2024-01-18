import React from "react";
import { customFetch } from "../Utils";
import { useLoaderData } from "react-router-dom";
import {StudentCard} from "../Component";

export const loader = async ({ params }) => {
  const { id } = params;
  const res = await customFetch.get(`/teacher/${id}`);
  const response = await customFetch.get("/student");
  return { teacher: res.data, students: response.data };
};

const SingleFaculty = () => {
  const { teacher, students } = useLoaderData();
  const { subject, phone, name, image, id, email, classId } = teacher;

  const newStudents = students.filter((student) => {
    return student.classId === classId;
  });

  console.log(newStudents);

  return (
    <>
      <section>
        <div className="single-grid ">
          <img className="single-image" src={image} alt={name} />
          <div className="single-content">
            <h1 className="movie-title">{name}</h1>
            <h4 className="movie-genre">{subject}</h4>
            <p className="movie-year">Teaching {classId}th Class</p>
            <p className="movie-plot">{email}</p>
            <p className="movie-plot">{phone}</p>
          </div>
        </div>
        <div>
          {newStudents.length !== 0 ? (
            <div className="student-list">
              <h1>Students</h1>
              <div className="student-list-container">
              {newStudents.map((student)=>{
                return <StudentCard key={student.id} {...student} subject={subject} />
              })}
              </div>
            </div>
          ) : (
            <div>
              <h1>No students enrolled</h1>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SingleFaculty;

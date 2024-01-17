import React from "react";
import { Link } from "react-router-dom";
import { customFetch } from "../Utils";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const res = await customFetch.get("/class");
  const response = await customFetch.get("/student");
  return { batches: res.data, students:response.data };
};

const Classes = () => {
  const { batches,students } = useLoaderData();
  console.log(batches);

  return (
    <div className="container mt-4">
      <h2>Classes</h2>
      <div className="row">
        {batches.map((batch)=>{
          const {id,name,courseID,classId} = batch;

          console.log(classId);
          const classStudents = students.filter((student)=>student.classId === classId);
          console.log(classStudents);

          return(
            <>
             <div key={id} className="col-md-4 mb-4">
            <Link
              to={`/classes/${id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            > 
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">Courses: {courseID.length}</p>
                  <p className="card-text">
                    Students: {classStudents?.length}
                  </p>
                </div>
              </div>
            </Link>
          </div>
            </>
          )
        })}
      </div>
    </div>
  );
};

export default Classes;
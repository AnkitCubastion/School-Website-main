import React from "react";
import { Link } from "react-router-dom";
import { customFetch } from "../Utils";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const res = await customFetch.get("/class");
  return { batches: res.data };
};

const Classes = () => {
  const { batches } = useLoaderData();

  return (
    <div className="container mt-4">
      <h2>Classes</h2>
      <div className="row">
        {batches.map((batch) => (
          <div key={batch.id} className="col-md-4 mb-4">
            <Link
              to={`/classes/${batch.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            > 
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{batch.name}</h5>
                  <p className="card-text">Courses: {batch.courseIDs.length}</p>
                  <p className="card-text">
                    Students: {batch.studentIDs.length}
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

export default Classes;

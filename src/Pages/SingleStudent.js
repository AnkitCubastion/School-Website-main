import React from 'react'
import { customFetch } from '../Utils';
import { useLoaderData } from 'react-router';
import FacultyCard from '../Component/FacultyCard';


export const loader = async ({ params }) => {
  const res = await customFetch.get(`/student/${params.id}`);
  const allTeachers = await customFetch.get("/teacher");
  console.log(params);
  // Filter teachers based on the classId
  const teachersInClass = allTeachers.data.filter(
    (teacher) => teacher.classId === res.data.classId
  );

  // Combine the class data with the filtered students and teachers
  const StudentWithTeachers = {
    ...res.data,
    teachers: teachersInClass,
  };
  // console.log(StudentWithTeachers);
  return { data: StudentWithTeachers };
};



export const SingleStudent = () => {
  const { data } = useLoaderData();
  // console.log(data);
  return (
    <section className="container mt-4">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={data.image}
              className="img-fluid rounded-start"
              alt={data.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{data.name}</h1>
              <h4 className="card-text">Grade: {data.classId}th</h4>
              <p className="card-text">Age: {data.age}</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Marks:</strong>
                </li>
                {Object.entries(data.marks).map(([subject, mark]) => (
                  <li key={subject} className="list-group-item">
                    {subject}: {mark}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        {data.teachers.length !== 0 ? (
          <div className="faculty-list-container row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {data.teachers.map((teacher) => {
              return (
                <div key={teacher.id} className="col mb-4">
                  <FacultyCard {...teacher} />
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h1>No teachers assigned</h1>
          </div>
        )}
      </div>
    </section>
  );
}

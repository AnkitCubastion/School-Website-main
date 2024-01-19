import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FeildInput } from "../Component";
import { customFetch } from "../Utils";
import { toast } from "react-toastify";
import { useLoaderData, Link } from "react-router-dom";
import ResultFilter from "../Component/ResultFilter";
import {
  setClassNum,
  setSearchRes,
  setSortRes,
} from "../Feature/Result/ResultSlice";

export const loader = async () => {
  const response = await customFetch.get("/student");
  return { students: response.data };
};

const Result = () => {
  const dispatch = useDispatch();
  const { students } = useLoaderData();
  let [filteredState, setFilteredState] = useState(students);
  const { classNum, searchRes, sortRes } = useSelector(
    (store) => store.resultState
  );
  let [markVal, setMarkVal] = useState(0);
  const onChange = (e) => {
    setMarkVal(e.target.value);
  };
  const { studentMark } = useSelector((store) => store.resultState);
  const { age, classId, id, image, marks, name, subject, userId, teacher } =
    studentMark;

  const handleSubmit = async () => {
    const res = await customFetch.patch(
      `/student/${id}`,
      JSON.stringify({
        marks: { ...marks, [`${subject}`]: markVal },
      })
    );
    console.log(res);
    window.location.reload();
    toast.success("Marks added Succesfully");
  };

  const searchFun = () => {
    let newArr = filteredState.filter((student) => {

      console.log(1,searchRes,sortRes,classNum);

      const firstName = student.name.split(" ")[0];
      const lastName = student.name.split(" ")[1];

      if (searchRes && classNum) {
        return (
          (firstName?.toLowerCase() === searchRes?.toLowerCase() ||
            lastName?.toLowerCase() === searchRes?.toLowerCase()) &&
          student?.classId === classNum
        );
      } else if (searchRes) {
        return (
          firstName?.toLowerCase() === searchRes?.toLowerCase() ||
          lastName?.toLowerCase() === searchRes?.toLowerCase()
        );
      } else if (classNum) {
        return student?.classId === classNum;
      } else {
        return true;
      }
    });

    if (sortRes === "low") {
      newArr = [...newArr].sort(function (a, b) {
        return a?.marks?.English +
          a?.marks?.Hindi +
          a?.marks?.Mathematics +
          a?.marks?.Science >
          b?.marks?.English +
            b?.marks?.Hindi +
            b?.marks?.Mathematics +
            b?.marks?.Science
          ? 1
          : -1;
      });
    }

    else if (sortRes === "high"){
      newArr = [...newArr].sort(function (a, b) {
        return a?.marks?.English +
          a?.marks?.Hindi +
          a?.marks?.Mathematics +
          a?.marks?.Science >
          b?.marks?.English +
            b?.marks?.Hindi +
            b?.marks?.Mathematics +
            b?.marks?.Science
          ? -1
          : 1;
      });
    }

    setFilteredState(newArr);
  };
  const reset = () => {
    dispatch(setClassNum({ grade: 0 }));
    dispatch(setSearchRes({ search: "" }));
    dispatch(setSortRes({ sort: "" }));
    setFilteredState(students);
  };


  return (
    <>
      <section>
        <div className="single-grid ">
          <img className="single-image" src={image} alt={name} />
          <div className="single-content">
            <h1 className="movie-title">Marks for {name}</h1>
            <h4 className="movie-genre"> In {subject} Exam out of 100</h4>
            <FeildInput
              label={`Marks given by ${teacher}`}
              value={markVal}
              type="number"
              onChange={onChange}
            />
            <button className="btn btn-success m-4" onClick={handleSubmit}>
              Submit Marks
            </button>
          </div>
        </div>
        {/* filter section */}
        <div className="filter-section">
          <ResultFilter eventFun={searchFun} reset={reset} />
        </div>
        {/* cards result */}
        <div className="movies-grid">
          {filteredState.map((student) => {
            const { id, image, age, name, classId, marks, userId } = student;
            let sum = 0;
            for (let key in marks) {
              sum += parseInt(marks[key]);
            }
            return (
              <div
                key={id}
                className="card w-100 shadow-lg transition duration-300"
              >
                <Link to={`/students/${id}`}>
                  <figure className="grid-figure">
                    <img src={image} alt={name} className="grid-image" />
                  </figure>
                </Link>
                <div className="card-body d-flex-column align-items-center justify-content-center text-center ">
                  <h5 className="card-title text-uppercase fw-bold grid-custom-des ">
                    {name}
                  </h5>
                  <h6 className="grid-custom-des">
                    {" "}
                    Hindi : {marks.Hindi} / 100
                  </h6>
                  <h6 className="grid-custom-des">
                    {" "}
                    English : {marks.English} / 100
                  </h6>
                  <h6 className="grid-custom-des">
                    {" "}
                    Mathematics : {marks.Mathematics} / 100
                  </h6>
                  <h6 className="grid-custom-des">
                    {" "}
                    Science : {marks.Science} / 100
                  </h6>
                  <h6 className="grid-custom-des"> Total Marks : {sum} </h6>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Result;

/*<h4 className="movie-genre">{subject}</h4>
<p className="movie-year">Teaching {classId}th Class</p> */

/*  <div className="movies-grid">
        {filteredState.map((student) => {
          const { id, image, name, subject,email,classId,phone} = student;
          return (
            <div
              key={id}
              className="card w-100 shadow-lg transition duration-300"
            >
              <Link to={`/faculties/${id}`}>
              <figure className="grid-figure">
                <img src={image} alt={name} className="grid-image" />
              </figure>
              </Link>
              <div className="card-body d-flex-column align-items-center justify-content-center text-center ">
                <h5 className="card-title text-uppercase fw-bold grid-custom-des ">
                  {name}
                </h5>
                <h6 className="grid-custom-des">{subject}</h6>
                <p className="grid-custom-des"> Teaching to grade {classId}</p>
                <p className="grid-custom-des">{email}</p>
                <p className="grid-custom-des">{phone}</p>
              </div>
            </div>
          );
        })}
      </div> */

import { useState } from "react";
import { customFetch } from "../Utils";
import { useLoaderData, Link } from "react-router-dom";
import { Filters } from "../Component";
import { useSelector, useDispatch } from "react-redux";
import {
  setSubName,
  setTeachName,
  setSortName,
} from "../Feature/Filter/FilterSlice";

export const loader = async () => {
  const res = await customFetch.get("/teacher");
  return { faculties: res.data };
};

const Faculties = () => {
  const dispatch = useDispatch();
  const { faculties } = useLoaderData();
  let [filteredState, setFilteredState] = useState(faculties);

  const { teachName, subName, sortName } = useSelector(
    (store) => store.filterState
  );

  const searchFun = () => {
    let newArr = filteredState.filter((faculty) => {
      const firstName = faculty.name.split(" ")[0];
      const lastName = faculty.name.split(" ")[1];
      if (teachName && subName) {
        return (
          (firstName?.toLowerCase() === teachName?.toLowerCase() ||
            lastName?.toLowerCase() === teachName?.toLowerCase()) &&
          faculty?.suject?.toLowerCase() === subName?.toLowerCase()
        );
      } else if (teachName) {
        return (
          firstName?.toLowerCase() === teachName?.toLowerCase() ||
          lastName?.toLowerCase() === teachName?.toLowerCase()
        );
      } else if (subName) {
        return faculty?.subject?.toLowerCase() === subName?.toLowerCase();
      } else {
        return true;
      }
    });

    if (sortName === "a-z") {
      newArr = [...newArr].sort(function (a, b) {
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
      });
    } else if (sortName === "z-a") {
      newArr = [...newArr].sort(function (a, b) {
        return a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1;
      });
    }

    setFilteredState(newArr);
  };
  const reset = () => {
    dispatch(setSubName({ genre: "" }));
    dispatch(setTeachName({ movie: "" }));
    dispatch(setSortName({ sort: "" }));
    setFilteredState(faculties);
  };

  return (
    <>
      <div className="filter-section">
        <Filters eventFun={searchFun} reset={reset} />
      </div>
      <h1 className="movies-count">Total Teachers : {filteredState?.length}</h1>
      <div className="movies-grid">
        {filteredState.map((faculty) => {
          const { id, image, name, subject, email, classId, phone } = faculty;
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
      </div>
    </>
  );
};

export default Faculties;

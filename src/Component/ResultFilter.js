import React, { useState } from "react";
import { FeildInput, FormSelect } from "../Component";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setClassNum,
  setSearchRes,
  setSortRes,
} from "../Feature/Result/ResultSlice";

const ResultFilter = ({ eventFun, reset }) => {
  const { students } = useLoaderData();
  const dispatch = useDispatch();

  const classList = [6, 7, 8, 9, 10];

  let [search, setSearch] = useState("");
  let [classSort, setClassSort] = useState("");
  let [grade, setGrade] = useState(0);
  let [error, setError] = useState("");

  const validate = () => {
    const newError = {};
    let isValid = true;

    if (!search.trim()) {
      newError.searchError = "Text is Required";
      isValid = false;
    } else if (search.length < 2) {
      newError.searchError = "Length of Search must greater than 2";
      isValid = false;
    } else {
      newError.searchError = "";
    }
    setError(newError);
    return isValid;
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    validate();
  };

  const handleSort = (e) => {
    setClassSort(e.target.value);
  };

  const handleGrade = (e) => {
    setGrade(e.target.value);
  };

  dispatch(setSearchRes({ search: search }));
  dispatch(setSortRes({ sort: classSort }));
  dispatch(setClassNum({ grade: grade }));

  return (
    <>
      <div className="filter-container">
        <div className="filter-first">
          <FeildInput
            type="search"
            label="search student with first name"
            onChange={handleSearch}
            value={search}
            error={error?.searchError}
          />
          <FormSelect
            label="select Grade"
            list={classList}
            value={grade}
            onChange={handleGrade}
          />
          <FormSelect
            label="sort by"
            list={["high", "low"]}
            value={classSort}
            onChange={handleSort}
          />
        </div>
        <div className="filter-second">
          <button type="submit" className="btn btn-success " onClick={eventFun}>
            search
          </button>
          <button className="btn btn-danger" onClick={reset}>
            reset
          </button>
        </div>
      </div>
    </>
  );
};

export default ResultFilter;

import { useState } from "react";
import { FeildInput, FormSelect } from "../Component";
import { useLoaderData } from "react-router-dom";
import {useDispatch} from "react-redux";
import { setTeachName,setSubName,setSortName } from "../Feature/Filter/FilterSlice";

const Filters = ({eventFun,reset}) => {
  const { faculties } = useLoaderData();
  const dispatch = useDispatch();

  const SubList = [
    ...new Set(
      faculties.map((faculty) => {
        return faculty.subject;
      })
    ),
  ];



  let [search, setSearch] = useState("");
  let [sort, setSort] = useState("");
  let [subVal, setSubVal] = useState("");
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
    setSort(e.target.value);
  }
  const handlegenVal = (e) => {
    setSubVal(e.target.value);
  }

  dispatch(setSubName({genre:subVal}));
  dispatch(setTeachName({movie:search}));
  dispatch(setSortName({sort:sort}));


  return (
    <>
      <div className="filter-container">
        <div className="filter-first">
          <FeildInput
            type="search"
            label="search teacher with first name"
            onChange={handleSearch}
            value={search}
            error={error?.searchError}
          />
          <FormSelect label="select subject" list={SubList} value={subVal} onChange={handlegenVal} />
          <FormSelect label="sort by" list={["a-z", "z-a"]} value={sort} onChange={handleSort} />
        </div>
        <div className="filter-second">
          <button type="submit" className="btn btn-success " onClick={eventFun}>
            search
          </button>
          <button className="btn btn-danger" onClick={reset} >
            reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Filters;

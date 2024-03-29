import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { setStudent } from '../Feature/Result/ResultSlice';
import {toast} from "react-toastify";

const StudentCard = ({age,classId,id,image,marks,name,userId,subject,teacher}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const obj = {age,classId,id,image,marks,name,userId,subject,teacher};
  const { user } = useSelector((store) => store.userState);

  const AddStudentMarks = () => {
    if(user?.role === 'admin'){
    dispatch(setStudent({data:obj}));
    navigate("/results");}
    else if (user?.role === "customer"){
      toast.error("Only Admins can add marks");
    }
  }


  return (
    <>
    <div className="card w-100 shadow-lg transition duration-300 student-list-card">
        <figure className="grid-figure">
          <img src={image} alt={name} className="grid-image" />
        </figure>
        <div className="card-body d-flex-column align-items-center justify-content-center text-center ">
          <h5 className="card-title text-uppercase fw-bold grid-custom-des ">
            {name}
          </h5>
          <h6 className="grid-custom-des">Studying in {classId}</h6>
          <p className="grid-custom-des">Age : {age}</p>
        </div>
        <button
          className="btn btn-success"
          onClick={AddStudentMarks}
        >
          Add Marks
        </button>
      </div>
    </>
  )
}

export default StudentCard
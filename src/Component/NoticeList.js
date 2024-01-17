import React,{useState} from 'react'
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";
import {customFetch} from "../Utils";
import {toast} from "react-toastify";

const NoticeList = ({content,date,id,title}) => {

    let [show,setShow] = useState(false);


    const deleteReview = async (id) => {
        try {
          const response = await customFetch.delete(`/notices/${id}`);
          console.log(response);
          toast.success("Reveiw deleted Succesfully");
          window.location.reload();
        } catch (error) {
          console.log(error);
          toast.error(error?.message);
        }
      };

    const newDate = date.split("-");
  const period =
    newDate[2].substr(0, 2) +
    "-" +
    newDate[1] +
    "-" +
    newDate[0] 


  return (
    <>
          <article className="question">
        <header>
          <h5>{title}</h5>
          <h5>{period}</h5>
          <button
            className="question-btn"
            onClick={() => setShow(!show)}
          >
            {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {show && (
          <div className="review-delete">
            <p className="review-text">{content}</p>
            <button
              className="btn btn-danger"
              onClick={() => {
               deleteReview(id)
              }}
            >
              Delete
            </button>
          </div>
        )}
      </article>
    </>
  )
}

export default NoticeList
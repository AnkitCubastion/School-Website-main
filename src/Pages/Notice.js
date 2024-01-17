import React from 'react';
import {customFetch} from "../Utils";
import {useLoaderData} from "react-router-dom";
import {NoticeList} from "../Component"


export const loader = async() => {
  const res = await customFetch.get("/notices");
  return {notices:res.data};
}

const Notice = () => {
  const {notices} = useLoaderData();
  return (
    <>
    <div className='reviewlist-container'>
        {notices.map((notice)=>{
            return <NoticeList key={notice.id} {...notice} />
        })}
    </div>
    </>
  )
}

export default Notice
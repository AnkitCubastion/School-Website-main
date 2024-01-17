import React from 'react'
import { customFetch } from '../Utils';
import { useParams } from 'react-router-dom';


export const loader = async ({params}) => {
  const res = await customFetch.get(`/class/${params.id}`);
  console.log(params);
  return { batches: res.data };
};



export const SingleClasses = () => {
  return (
    <div>SingleClasses</div>
  )
}

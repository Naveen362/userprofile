
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const FavoriteTopics = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
         axios.get("http://localhost:4000/data").then((res)=>{
            setData(res.data);
            console.log(res.data);
         }).catch((err)=>{console.log("error")})
    },[])
  return (
    <div className="container my-5">
      <div className="card shadow-sm">
        <div className="card-header text-center d-flex justify-content-between px-4" style={{backgroundColor:"#f9f9"}}>
          <h1 className="card-title mb-0"><i className="bi bi-bookmark-heart"></i> Favorite Topics</h1>
          <button
                  className="btn btn-sm btn-outline-secondary"
                 
                >
                <Link to="/getpostdata"> <i className="bi bi-pencil"></i> </Link> 
                </button>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {data.map((topic, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{`${index + 1}. ${topic.name}`}</span>
                
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer text-center">
        <Link to="/getpostdata"> <button className="btn btn-primary btn-sm me-2">Add Topic</button></Link>
         <Link to="/getpostdata"><button className="btn btn-outline-secondary btn-sm">View All</button></Link> 
        </div>
      </div>
    </div>
  )
}

export default FavoriteTopics

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentPosts = () => {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:4000/posts").then((res)=>{setPosts(res.data);console.log(res.data)}).catch((error)=>{alert("Servor Error")});
  },[])
  return (
    <div className="container my-5">
      <div className="card shadow-sm" >
        <div className="card-header bg-secondary text-white text-center">
          <h1 className="card-title mb-0"><i className="bi bi-clock-history"></i> Recent Posts</h1>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {posts.map((post, index) => (
              <li key={index} className="mt-3 shadow-sm list-group-item d-flex flex-column justify-content-between align-items-center">
                <h3>{post.title}</h3>
                <hr/>
                <p>{post.description}</p>
                <span className="text-muted">Date-Of-Posted: {post.date}</span>
                <span ><Link to={`/posts/${post._id}`}><button className='btn'><i className="bi bi-pencil"></i> Edit</button></Link></span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer text-center">
        <button className="btn btn-primary btn-sm mx-2">Add Post</button>
          <button className="btn btn-info btn-sm">View All</button>

        </div>
      </div>
    </div>
  );
};

export default RecentPosts;

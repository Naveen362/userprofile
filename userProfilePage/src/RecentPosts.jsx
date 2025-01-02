
import React from "react";

const RecentPosts = () => {
  const posts = [
    { title: "Understanding React Hooks", date: "Jan 1, 2025" },
    { title: "Bootstrap 5: What's New?", date: "Dec 25, 2024" },
    { title: "MERN Stack Tutorial for Beginners", date: "Dec 20, 2024" },
    { title: "Advanced CSS Techniques", date: "Dec 15, 2024" },
    { title: "Node.js Basics and Deployment", date: "Dec 10, 2024" },
  ];

  return (
    <div className="container my-5">
      <div className="card shadow-sm" >
        <div className="card-header bg-secondary text-white text-center">
          <h1 className="card-title mb-0"><i className="bi bi-clock-history"></i> Recent Posts</h1>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {posts.map((post, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{post.title}</span>
                <span className="text-muted">{post.date}</span>
                <span ><button className='btn'><i className="bi bi-pencil"></i> Edit</button></span>
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

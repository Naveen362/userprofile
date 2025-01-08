import React, { useEffect, useState } from 'react';
import axios from "axios"

const Bio = () => {
  const [btnColor, setBtnColor] = useState("whitesmoke");
  const [data, setData] = useState({});
  const [input, setInput] = useState('');

  // Fetch data from the backend
  useEffect(() => {
    axios.get("http://localhost:4000/bio")
      .then((res) => setData(res.data))
      .catch((error) => console.log("error"));
  }, []);

  const handleColorChange = (color) => {
    setBtnColor(color);
  };

  const handleColor = (color) => {
    setBtnColor(color);
  };

  const changedata = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const updatedata = () => {
    if (data._id) {
      axios.put(`http://localhost:4000/biodata/${data. _id}`, { self: data.self })
        .then((res) => alert("Data Modified"))
        .catch((err) => console.log("error"));
    } else {
      alert("Invalid data ID");
    }
  };

  return (
    <div className='card container p-5 mt-5 shadow-lg' style={{ backgroundColor: btnColor }}>
      <div className='d-flex justify-content-between p-2 align-items-center'>
        <h1 className='card-title text-center mb-3 text-bold card-title ms-3'>
          <i className="bi bi-person-circle"></i> BIO
        </h1> 
        <div>
          <button 
            className='btn btn-light rounded-circle' 
            onClick={() => handleColor("white")}
            onMouseEnter={() => handleColorChange("white")}
            onMouseLeave={() => handleColorChange("white")}
          >
            <i className="bi bi-sun-fill"></i>
          </button> 
          <button 
            className='btn btn-dark mx-1 rounded-circle'
            onClick={() => handleColorChange("black")}
            onMouseEnter={() => handleColorChange("black")}
            onMouseLeave={() => handleColorChange("black")}
          >
            <i className="bi bi-moon-fill"></i>
          </button>
          <button 
            className='btn btn-info mx-1 rounded-circle' 
            onClick={() => handleColorChange("blue")}
            onMouseEnter={() => handleColorChange("blue")}
            onMouseLeave={() => handleColorChange("blue")}
          >
            B
          </button>

          <button 
            className='btn btn-secondary mx-1 rounded-circle'
            onClick={() => handleColorChange("gray")}
            onMouseEnter={() => handleColorChange("gray")}
            onMouseLeave={() => handleColorChange("gray")}
          >
            G
          </button>
        </div>
      </div>
      
      <textarea 
        className='form-control' 
        rows={7} 
        style={{ backgroundColor: "#f9f9f9" }} 
        value={data.self || ''} 
        name="self" 
        onChange={changedata}
      />
      <button onClick={updatedata} className='btn btn-primary w-100 my-2'>Save Changes</button>
    </div>
  );
};

export default Bio;

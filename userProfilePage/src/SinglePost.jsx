import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SinglePost = () => {
    const [data,setData]=useState({title:'',description:'',date:''});
    const [opti,setopti]=useState(true)
    const {id}=useParams();
    const change=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        
    }
    useEffect(()=>{
        axios.get(`http://localhost:4000/posts/${id}`).then((res)=>{setData(res.data);console.log(res.data)}).catch((err)=>{console.log("error is finded Sorry")});
        
    },[])
    const saveChanges = () => {
        if (data._id) {
          axios
            .put(`http://localhost:4000/posts1/${id}`, data) // Updated endpoint
            .then((res) => {
              alert("Saved successfully!");
            })
            .catch((error) => {
              console.log("Error occurred while saving:", error);
            });
        } else {
          alert("Invalid post ID");
        }
      };
      
    
  return (
    <div className='container mt-5'>
        <div>

            <div className='card mx-auto w-75 shadow-sm rounded'> 
                <div className='card-header my-2'>
                    <input type="text" className='card-title form-control' defaultValue={data.title} disabled={opti} name="title" onChange={change}/>
                    </div>
            <div className='card-body'>
                  <input type="text" className='card-text form-control' defaultValue={data.description} name="description" onChange={change} disabled={opti}/> 
                   <input type="date" className='card-text form-control my-2' defaultValue={data.date} name="date" onChange={change} disabled={opti}/>
            </div>
            <div className='card-footer'>
                <button className='btn btn-success mx-3' onClick={saveChanges}>Save</button>
                <button className='btn' onClick={()=>setopti(false)}>Edit</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SinglePost
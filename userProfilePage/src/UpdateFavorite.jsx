import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const UpdateFavoriteTopics = () => {
    const [data, setData] = useState([]);
    const [newTopics, setNewTopics] = useState([]);
    const [truee, setTrue] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:4000/data").then((res) => {
            setData(res.data);
            console.log(res.data);
        }).catch((err) => { console.log("error") });
    }, []);

    const dataChange = (e, index) => {
        const updatedData = [...data];
        updatedData[index][e.target.name] = e.target.value;
        setData(updatedData);
    };

    const addNewTopic = () => {
        setNewTopics([...newTopics, { name: "" }]);
    };

    const handleNewTopicChange = (e, index) => {
        const updatedTopics = [...newTopics];
        updatedTopics[index].name = e.target.value;
        setNewTopics(updatedTopics);
    };

    const saveData = () => {
        const allTopics = [...data, ...newTopics];
        axios.put("http://localhost:4000/datas", allTopics).then((res) => { alert("Saved data") }).catch((err) => { alert("Not saved, error occurred") });
    };

    return (
        <div className="container my-5">
            <div className="card shadow-sm">
                <div className="card-header text-center d-flex justify-content-between px-4" style={{ backgroundColor: "#f9f9" }}>
                    <h1 className="card-title mb-0"><i className="bi bi-bookmark-heart"></i> Favorite Topics</h1>
                    <button
                        className="btn btn-sm btn-outline-secondary"
                    >
                        <i className="bi bi-pencil"></i>
                    </button>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        {data.map((topic, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <input type="text" value={topic.name} name="name" onChange={(e) => dataChange(e, index)} className='form-control' />
                            </li>
                        ))}
                        {newTopics.map((topic, index) => (
                            <li key={data.length + index} className="list-group-item d-flex justify-content-between align-items-center">
                                <input type="text" value={topic.name} name="name" onChange={(e) => handleNewTopicChange(e, index)} className='form-control' />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-primary btn-sm me-2" onClick={addNewTopic}>Add Topic</button>
                    <button className='btn btn-outline-info' onClick={saveData}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateFavoriteTopics;

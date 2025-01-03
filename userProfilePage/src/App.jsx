import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bio from './Bio'
import FavoriteTopics from './FavoriteTopics'
import RecentPosts from './RecentPosts'
import { Route, Routes } from 'react-router-dom'
import UpdateFavoriteTopics from './UpdateFavorite'
import SinglePost from './SinglePost'

function App() {
  const [count, setCount] = useState({bg:"white",text:"black"})

  return (
    <div style={{backgroundColor:`${count.bg}`,color:`${count.text}`}}>
    <div className='d-flex justify-content-between mx-5 align-items-center'><h1 className='text-bold text-center mt-3 fst-italic'>User Profile</h1>
    <div><button onClick={()=>{setCount({bg:"white",text:"black"})}} className='btn rounded-circle btn-light mx-3'><i className="bi bi-sun-fill"></i></button>
    <button className='btn rounded-circle btn-dark' onClick={()=>{setCount({bg:"black",text:"white"})}}><i className="bi bi-moon-fill"></i></button>
</div>
    </div>
    
    <Routes>
      <Route path="/" element={<div><Bio/><FavoriteTopics/><RecentPosts/></div>}/>
      <Route path="/getpostdata" element={<UpdateFavoriteTopics/>}></Route>
      <Route path="/posts/:id" element={<SinglePost/>}/>
    </Routes>
    </div>
  )
}

export default App

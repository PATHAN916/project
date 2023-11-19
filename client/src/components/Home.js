import React, { useState } from 'react'
import {  useLocation } from 'react-router-dom'
function Home() {
    let [pic,setPic]=useState("./images/dummy.png")
  let loc =useLocation();
 console.log(loc)
  return (
    <div>
      <h1>welcome*****</h1>
        <h1>{loc.state.data.name}😍 👉</h1>
        <img className='image' alt="" src={pic}></img>
        <label><strong>select your pic</strong></label>
        <input   type='file'
        onChange={(e)=>{
            console.log(e.target.files);
          let set=  URL.createObjectURL(e.target.files[0]);
          console.log(set);
          setPic(set);
        }} 
        ></input>
        

  <div  className="video">
    
   <video className='videos' src=" https://services.brninfotech.com/tws/media2/trailers/gangLeader.mp4" controls unmuted></video>
   <video className='videos' src="https://services.brninfotech.com/tws/media2/trailers/AlaVaikuntapuramloo.mp4" controls unmuted></video>
   
    </div>   

    
   

      
      
       
     
    </div>
  )
}

export default Home
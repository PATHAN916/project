import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Login() {
let  emailInputRef=useRef();
let passwordInputRef=useRef();
let navigate=useNavigate();

let validateCredential=async()=>{
  axios.defaults.baseURL='http://localhost:9090';
  let dataToSend =new FormData();
  dataToSend.append("email", emailInputRef.current.value);
  dataToSend.append("password",passwordInputRef.current.value);
  let response=await axios.post("/validateLogin",dataToSend);
  console.log(response);
  alert(response.data.msg);
  if(response.data.status==="success"){
    navigate("/home",{state:response.data})
  }  
}
  return (
    <div className='App'>
        <form>
        <div>
        <label>email</label>
        <input ref={emailInputRef}></input>
        </div>
        <div>
        <label>password</label>
        <input ref={passwordInputRef}></input>
        </div>
        <div>
            <button type='button' onClick={()=>{
              validateCredential();
            }}>submit</button>
        </div>
        <Link to="/" >signup</Link>
        </form>
        
    </div>
  )
}

export default Login

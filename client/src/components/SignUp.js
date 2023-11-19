import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function SignUp() {
  let nameInputRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();

  let getDataFromServerThruAxios = async () => {

    axios.defaults.baseURL = '';
    let dataToSend = new FormData();
    dataToSend.append("name", nameInputRef.current.value);
    dataToSend.append("email", emailInputRef.current.value);
    dataToSend.append("password", passwordInputRef.current.value);
    let response = await axios.post("/signup", dataToSend);
    console.log(response);
alert(response.data.msg);
  };



  return (
    <div className='App'>
      <form>
        <div>
          <label>name:</label>
          <input ref={nameInputRef} ></input>
        </div>
        <div>
          <label>email:</label>
          <input ref={emailInputRef}></input>
        </div>
        <div>
          <label>password</label>
          <input ref={passwordInputRef}></input>
        </div>
        <div>
          <button type='button' onClick={() => {
            getDataFromServerThruAxios();
          }}>submit</button>
        </div>
        <Link to="/Login">LOGIN</Link>
      </form>

    </div>
  )
}

export default SignUp
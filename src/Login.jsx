import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const [inpData, setinpData] = useState({
        email:'',
        password:""
    })
    const handleInput=(e)=>{
        setinpData({...inpData,[e.target.name]:e.target.value})
    }
    const handleSubmit=()=>{
axios.post(' https://api.escuelajs.co/api/v1/auth/login',inpData).then((res)=>{
    // console.log(res.data.access_token)
    // console.log(res)
    const token =res.data.access_token
   localStorage.setItem('token',JSON.stringify(token))
    console.log(res.data.access_token)
    // setgetData(res.data)
}).catch((err)=>{
    console.log(err)
})
    }
  return (
    <>
    <label htmlFor="email">Email:</label>
    <input value={inpData.email} onChange={handleInput} type="email" name="email" id="email" />
    <br />
    <label htmlFor="password">Password:</label>
    <input value={inpData.password} onChange={handleInput} type="password" name="password" id="password" />
    <button onClick={handleSubmit}>Submit</button>

    </>
  )
}

export default Login
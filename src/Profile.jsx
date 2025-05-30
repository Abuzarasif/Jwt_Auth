import axios from 'axios'
import React, { useState } from 'react'

const Profile = () => {

    const [getData, setgetData] = useState('')

    const getProfile=()=>{
    const token=JSON.parse(localStorage.getItem('token'))
    const header={
        headers:{
        Authorization:`Bearer ${token}`
        }
    }
 axios.get('https://api.escuelajs.co/api/v1/auth/profile',header).then((res)=>{
    console.log(res)
    setgetData(res.data)
 })

}
 const handlelogout=()=>{
 setgetData('')
 localStorage.removeItem('token') 
}
    return (
    <>
    <button onClick={getProfile}>Get Profile</button>
        <h1>
        Profile Details
    </h1>
    <p>
     Name:   {getData.name || 'NA'}
    </p>

    <p> Email:   {getData.email || 'NA'}</p>

      <p> Password: {getData.password || 'NA'}</p>
    <br/>
    <button onClick={handlelogout}>Logout</button>
    </>
  )
}

export default Profile
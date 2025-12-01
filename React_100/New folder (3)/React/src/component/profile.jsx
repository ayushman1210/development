import React, { useState } from 'react'

const Profile = () => {
    const [profile,setprofile]=useState({
        name:"",
        age:" "
    })
    
function handle1(e){
    const {name,value}=e.target

    setprofile((p)=>({
        ...p,[name]:value
    }))
}
  return (
    <>
    <div>
      <h1>Profile</h1>
      <label >Name : <input type="text" onChange={handle1} value={profile.name} /></label>
       <label >Age : <input type="text" onChange={handle1} value={profile.age} /></label>
    </div>
<h2>{profile.name}</h2>
<h2>{profile.age}</h2>
</>
  )
}

export default Profile

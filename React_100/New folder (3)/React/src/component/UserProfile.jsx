import React, { useContext } from 'react'
import Usecontext, { User } from './Usecontext'



const UserProfile = () => {
    const data=useContext(User);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default UserProfile

import React, { createContext } from 'react'
import UserProfile from './UserProfile';


export const User=createContext();
const Usecontext = () => {
    const profile="profile is related to someone ";
  return (
    <div>
      <User.Provider  value={profile}>
   <UserProfile/>
      </User.Provider>
    </div>
  )
}

export default Usecontext

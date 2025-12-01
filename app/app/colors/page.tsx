'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router=useRouter();
    console.log(router);
    const navigate=(page:string)=>{
        router.push(`/${page}`);
    }
  return (
    <>
   <div>welcome to the color page </div>
   <button onClick={()=>navigate('login')}>colors </button>
   </>
  )
}

export default page
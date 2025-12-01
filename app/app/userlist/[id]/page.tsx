import React from 'react'

const page =async({params}:{params:{id:number}}) => {
    const {id}=await params;
  return (
    <div>user number {id}</div>
  )
}

export default page
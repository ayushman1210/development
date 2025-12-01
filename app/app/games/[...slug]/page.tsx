import react from 'react';


const page=async ({params}:{params:{slug:string[]}})=>{

    const {slug}=await params;
    return (
    <>
    <h1>{slug}</h1>
    {slug.map((p)=>(<li key={p}>{p}</li>))}
    </>
    )
}

export default page;

import React, { useMemo } from 'react'
import { jobatom, messageatom, networkatom, notificationatom, totalatom } from '../atom'
import { RecoilRoot, useRecoilValue } from 'recoil'

const App = () => {
 
  return (
  <RecoilRoot>
  <Task/>
</RecoilRoot>
  )
}

function Task(){
   const networkcount=useRecoilValue(networkatom)
   const jobcount=useRecoilValue(jobatom)
   const messagecount=useRecoilValue(messageatom)
   const notifiacationcount=useRecoilValue(notificationatom)
    // const totalcount=useRecoilValue(totalatom);

  const totalcount=useMemo(()=>{
    return networkcount+jobcount+messagecount+notifiacationcount;
  },[networkcount,jobcount,messagecount,notifiacationcount])
  return <>
   <h1>networkcount:{networkcount}</h1>
     <h1>jobcount:{jobcount}</h1>
       <h1>messagecount:{messagecount}</h1>
         <h1>notficationcount:{notifiacationcount}</h1>
         <h1>{totalcount}</h1>
   </>
}

export default App

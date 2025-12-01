import React from 'react'
import Link from 'next/link'
const page = () => {
  return (<>
    <div>welcome to the page </div>
    <p> go to the dashboard </p>
    <Link href='/dashboard'> Dashboard
    </Link>
    </>
  )
}

export default page
import React, { ReactNode } from 'react'
import Link from 'next/link'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <div>
            <Link href='/admin/dashboard'>Dashboard</Link>
            <Link href='/settings'>Settings</Link>
            <Link href={'/'}>Home </Link>
        </div>
        {children}
    </div>
  )
}

export default layout
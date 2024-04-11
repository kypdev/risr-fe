import React from 'react'

type ChildrenLayoutProps = {
  children: React.ReactNode
}

const ChildrenLayout = ({children}: ChildrenLayoutProps) => {
  return (
    <main className='flex flex-col mx-40 sm:mx-0 lg:mx-40'>
      {children}
    </main>
  )
}

export default ChildrenLayout
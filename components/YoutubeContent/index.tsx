import React from 'react'

type YoutubeContentProps = {
  children: React.ReactNode
}

const YoutubeContent = ({children}: YoutubeContentProps) => {
  return (
    <div className='flex h-[50vw]'>
      {children}
    </div>
  )
}

export default YoutubeContent
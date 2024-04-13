import React from 'react'

type YoutubeContentProps = {
  children: React.ReactNode
}

const YoutubeContent = ({children}: YoutubeContentProps) => {
  return (
    <div className='flex h-[50vw] mt-[2vw]'>
      {children}
    </div>
  )
}

export default YoutubeContent
import React from 'react'

type BgSocialIconProps = {
  children: React.ReactNode
}

const BgSocialIcon = ({ children }: BgSocialIconProps) => {
  return (
    <div className=' w-[5.5vw] h-[5.5vw] bg-[#E5E9EF] rounded-full relative flex justify-center items-center drop-shadow-md'>
      {children}
    </div>
  )
}

export default BgSocialIcon

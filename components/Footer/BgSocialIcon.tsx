import React from 'react'

type BgSocialIconProps = {
  children: React.ReactNode
  onClick?: any
}

const BgSocialIcon = ({ children, onClick }: BgSocialIconProps) => {
  return (
    <div onClick={onClick} className=' w-[5.5vw] h-[5.5vw] bg-[#E5E9EF] rounded-full relative flex justify-center items-center drop-shadow-md'>
      {children}
    </div>
  )
}

export default BgSocialIcon

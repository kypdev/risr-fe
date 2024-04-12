import Image from 'next/image'
import React from 'react'

type BannerProps = {
  img: string
  title?: string
}

const Banner = ({ img, title }: BannerProps) => {
  return (
    <div className='flex flex-row w-full justify-center items-center'>
      <Image
        src={img}
        className='w-full pointer-events-none 2xl:h-[32.1.vw]'
        width={1440}
        height={467}
        alt={''}
      />
      <div className='absolute'>
        {title ? (
          <p className='text-white font-bebas 2xl:text-[8vw]'>{title}</p>
        ) : null}
      </div>
    </div>
  )
}

export default Banner

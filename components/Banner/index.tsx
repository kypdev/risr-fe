'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

type BannerProps = {
  img: string
  title?: string
  isButtonElemantary?: boolean
  children?: React.ReactNode
}

const Banner = ({ img, title, isButtonElemantary, children }: BannerProps) => {
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
          <p className='text-white font-bebas text-[7vw]'>{title}</p>
        ) : null}
        {isButtonElemantary ? (
          <div className='flex flex-row justify-center'>
            <Button variant='trans' className='text-white sub-font mr-8'>
              Apply now
            </Button>
            <Button variant='trans' className='text-white sub-font' onClick={()=>{window.open('https://rism.openapply.com/events/new', '_blank')}}>
              Organize a tour
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Banner

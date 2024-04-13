import Image from 'next/image'
import React from 'react'

const StudenLearner = () => {
  return (
    <div className='flex flex-col items-center'>
      <Image src='/vision/head.svg' width={606} height={154} alt='' className='w-[66vw]' />
      <Image src='/vision/hand.svg' width={606} height={154} alt='' className='w-[66vw] pt-[2vw]' />
      <Image src='/vision/heart.svg' width={606} height={154} alt='' className='w-[66vw] pt-[2vw]' />
    </div>
  )
}

export default StudenLearner
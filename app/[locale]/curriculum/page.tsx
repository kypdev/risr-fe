import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <main className='flex flex-col mx-40 sm:mx-0 lg:mx-40'>
      <Image src='/curriculum/img1.svg' className='w-full py-4 pointer-events-none z-10 pt-32 pb-32' width={1440} height={467} alt={''} />
    </main>
  )
}

export default Page
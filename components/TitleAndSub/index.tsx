import { cn } from '@/lib/utils'
import React from 'react'

type TitleAndSubProps = {
  title: string
  sub: string
  className?: any
}

const TitleAndSub = ({title, sub, className}: TitleAndSubProps) => {
  return (
    <div className={cn(`${className} py-8`)}>
      <h1 className='text-[3vw] text-line '>{title}</h1>
      <p className='text-sub text-[1.5vw] pt-[2vw]'>{sub}</p>
    </div>
  )
}

export default TitleAndSub
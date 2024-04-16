'use client'

import { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

type IDetails = {
  title: string
  desc: string
}

type AccordionEdpsProps = {
  title: any
  subTitle: string
  description: any
  isSubTitle?: boolean
  detail: IDetails[]
}

const AccordionEdps = ({
  title,
  subTitle,
  description,
  detail,
}: AccordionEdpsProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false)
  return (
    <div className='2xl:py-8'>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className='flex justify-between w-full items-center 2xl:px-8'
      >
        <div className='flex flex-col items-start text-start'>
          <h1 className='2xl:text-[2rem] text-line font-medium'>{title}</h1>
          <span className='text-slate-700 2xl:pb-8'>{subTitle}</span>
        </div>
        {accordionOpen ? (
          <IoIosArrowUp className='text-line scale-150' />
        ) : (
          <IoIosArrowDown className='text-line scale-150' />
        )}
      </button>
      <hr className='bg-black h-[2px] w-full mb-4' />
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className='overflow-hidden 2xl:ml-8 2xl:text-2xl'>
          <div className='mb-8'>{description}</div>
          {detail?.map((v, i) => (
            <span key={i} className='flex flex-row justify-start'>
              <span className='2xl:text-2xl font-bebas'>{v.title}</span>
              <span className='2xl:text-2xl scale-125 2xl:ml-10 sub-font'>
                {v.desc}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AccordionEdps

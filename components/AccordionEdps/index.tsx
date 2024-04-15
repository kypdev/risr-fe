'use client'

import { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

type AccordionEdpsProps = {
  title: string
  subTitle: string
  description: string[]
  isSubTitle?: boolean
}

const AccordionEdps = ({
  title,
  subTitle,
  description,
  isSubTitle,
}: AccordionEdpsProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false)
  return (
    <div className='py-2'>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className='flex justify-between w-full items-center 2xl:px-16'
      >
        <div className='flex flex-col items-center'>
          <h1 className='2xl:text-[4rem] text-line'>{title}</h1>
          {isSubTitle ? (
            <span className='text-slate-700'>{subTitle}</span>
          ) : null}
        </div>
        {accordionOpen ? (
          <IoIosArrowUp className='text-slate-600' />
        ) : (
          <IoIosArrowDown className='text-slate-600' />
        )}
      </button>
      <hr className='bg-black h-[2px] w-full' />
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        {description.map((v, i) => (
          <ul key={i} className='overflow-hidden 2xl:ml-16 2xl:text-2xl list-disc'>
            <li key={i}>{v}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default AccordionEdps

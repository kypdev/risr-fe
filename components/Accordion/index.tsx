import React, { useState } from 'react'

type AccordionProps = {
  title: string
  subTitle: string
  description: string
}

const Accordion = ({title, subTitle, description}: AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false)
  return (
    <div className='py-2'>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className='flex justify-between w-full'
      >
        <div className='flex flex-col items-start'>
          <span>{title}</span>
          <span className='text-slate-700'>{subTitle}</span>
        </div>
        {accordionOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className='overflow-hidden'>{description}</div>
      </div>
    </div>
  )
}

export default Accordion

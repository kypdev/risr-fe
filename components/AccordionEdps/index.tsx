'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

type IDetails = {
  title: string
  desc: string
}

type AccordionEdpsProps = {
  title: string
  subTitle: any
  desc: any
  detail: IDetails[]
}

const AccordionEdps = ({
  title,
  subTitle,
  // description,
  desc,
  detail,
}: AccordionEdpsProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false)
  const t = useTranslations('Extended')

  return (
    <div className='2xl:py-8'>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className='flex justify-between w-full items-center 2xl:px-8'
      >
        <div className='flex flex-col items-start text-start'>
          <p className='2xl:text-[2rem] text-line font-bold'>{title}</p>
          <span className='text-[#212121] 2xl:pb-8'>{subTitle}</span>
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
          <div className='mb-8'>
            <span className='font-bebas text-line text-bold'>{t('acd-desc1')}</span>
            <p className='mt-4 text-black'>{desc}</p>
          </div>
          {detail?.map((v, i) => (
            <span key={i} className='flex flex-row justify-start'>
              <div>
                <span className='2xl:text-2xl font-bebas text-line'>
                  {t(v.title)}
                </span>
                <span className='align-baseline 2xl:text-3xl 2xl:ml-3 sub-font text-[#212121]]'>
                  {t(v.desc)}
                </span>
              </div>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AccordionEdps

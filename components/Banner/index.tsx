'use client'

import Image from 'next/image'
import { Button } from '../ui/button'
import IconLine from './IconLine'

type BannerProps = {
  img: string
  title?: string
  isButtonElemantary?: boolean
  isContact?: boolean
  isPersonalData?: boolean
  isApply?: boolean
  isSchoolMap?: boolean
  isSchoolCalendar?: boolean
}

const Banner = ({
  img,
  title,
  isButtonElemantary,
  isContact,
  isPersonalData,
  isApply,
  isSchoolMap,
  isSchoolCalendar,
}: BannerProps) => {
  return (
    <div className='flex flex-row w-full justify-center items-center'>
      <Image
        src={img}
        className='w-full pointer-events-none 2xl:h-[32.1.vw] object-cover'
        width={1440}
        height={467}
        alt={''}
      />
      <div className='absolute flex flex-col items-center'>
        {title ? (
          <p className='text-white font-bebas text-[7vw]'>{title}</p>
        ) : null}
        {isButtonElemantary ? (
          <div className='flex flex-row justify-center'>
            <Button variant='trans' className='text-white sub-font mr-8'>
              Apply now
            </Button>
            <Button
              variant='trans'
              className='text-white sub-font'
              onClick={() => {
                window.open('https://rism.openapply.com/events/new', '_blank')
              }}
            >
              Organize a tour
            </Button>
          </div>
        ) : null}
        {isContact ? (
          <div className='flex flex-row justify-center'>
            <Button variant='trans' className='text-white px-[2vw] py-[1.3vw]'>
              Add me
              <div className='ml-[1vw] hover:fill-red-500'>
                <IconLine />
              </div>
            </Button>
          </div>
        ) : null}
        {isPersonalData ? (
          <div className='flex flex-row justify-center'>
            <Button variant='trans' className='text-white px-[2vw] py-[1.3vw]'>
              Download
            </Button>
          </div>
        ) : null}
        {isApply ? (
          <div className='flex flex-row justify-center'>
            <Button variant='trans' className='text-white sub-font mr-8'>
              Apply now
            </Button>
            <Button
              variant='trans'
              className='text-white sub-font'
              onClick={() => {
                window.open('https://rism.openapply.com/events/new', '_blank')
              }}
            >
              Tuition & Fees
            </Button>
          </div>
        ) : null}
        {isSchoolMap ? (
          <div className='flex flex-row justify-center'>
            <Button variant='trans' className='text-white px-[2vw] py-[1.3vw]'>
              School Map
            </Button>
          </div>
        ) : null}
        {isSchoolCalendar ? (
          <div className='flex flex-row justify-center'>
            <Button variant='schoolCalendar' className='text-white sub-font mr-8 px-10 text-[1.5rem]'>
              2022-2023 School Calendar
            </Button>
            <Button variant='schoolCalendar' className='text-white sub-font mr-8 text-[1.5rem]'>
              2023-2024 School Calendar
            </Button>
            <Button
              variant='schoolCalendar'
              className='text-white sub-font text-[1.5rem]'
              // onClick={() => {
              //   window.open('', '_blank')
              // }}
            >
              2024-2025 School Calendar
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Banner

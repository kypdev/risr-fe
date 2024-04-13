import React from 'react'
import Image from 'next/image'
import { LuEye } from 'react-icons/lu'
import { TbTargetArrow } from 'react-icons/tb'
import Title from '../Title'
import { useTranslations } from 'next-intl'
import style from './style.module.css'

const VisionMission = () => {
  const t = useTranslations('Vision')
  return (
    <div className='bg-line w-full h-[27vw] z-10 mt-[4vw] rounded-xl'>
      <div className='flex flex-row py-10'>
        <div className='flex flex-col justify-start items-center'>
          <LuEye color='white' size={100} className='size-[8vw]' />
          <h1 className='text-[#fff] 2xl:text-[4vw]'>{t('vision')}</h1>
          <p className='text-white px-[4vw] text-center text-[1vw]'>
            {t('vision-sub')}
          </p>
        </div>
        <hr className={`${style.vl} h-[22vw]`} />
        <div className='flex flex-col justify-start items-center'>
          <TbTargetArrow color='white' size={100} className='size-[8vw]' />
          <h1 className='text-[#fff] 2xl:text-[4vw]'>{t('mission')}</h1>
          <p className='text-white px-[4vw] text-center text-[1vw]'>
            {t('mission-sub')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VisionMission

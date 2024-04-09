'use client'

import { Separator } from '@radix-ui/react-dropdown-menu'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import styles from './style.module.css'
import { cn } from '@/lib/utils'
import RecentNews from '@/components/RecentNews'

const page = () => {
  const t = useTranslations('School-map')
  return (
    <>
      <Image src='/school-map/banner.png' className='w-full' width={1440} height={467} alt={''} />
      <div className='flex flex-col mx-40 sm:mx-0 lg:mx-40'>
        <h1 className='text-5xl text-[#1C355E] my-10 w-1'>{t('facilities')}</h1>
        <hr className={`${styles.solidHr}`} />
        <p className='mt-4'>
          {t.rich("facilities-details", {
            br: () => <br />,
          })}
        </p>
        {/* <div className='flex flex-row'>

        </div> */}
        {/* <hr className={`${styles.solidHr}`} /> */}
        {/* <h1 className='text-5xl text-[#1C355E] my-10 w-1'>{t('school-map')}</h1> */}
        <Image className='flex flex-row w-full py-8' src='/school-map/Frame 137.svg' width={1198} height={249} alt='' />
        <Image className='flex flex-row w-full py-8' src='/school-map/Frame 139.svg' width={1198} height={249} alt='' />
        <Image className='flex flex-row w-full py-8' src='/school-map/Frame 140.svg' width={1198} height={249} alt='' />
        <p className='flex flex-row text-5xl text-[#1C355E] my-10 w-1'>SCHOOL&nbsp;MAP</p>
        <Image className='flex flex-row w-full py-8' src='/school-map/map.png' width={1198} height={249} alt='' />
        <p className='flex flex-row text-5xl text-[#1C355E] my-10 w-1'>RECENT&nbsp;NEWS</p>
        <hr className={`${styles.solidHr}`} />
        <RecentNews />
      </div>
    </>
  )
}

export default page
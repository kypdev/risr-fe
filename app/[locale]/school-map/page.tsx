// 'use client'

import { SchoolMapLinks } from '@/constrant'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.css'

export const metadata = {
  title: 'School Map & Facilities',
}

const Page = () => {
  const t = useTranslations('School-map')
  return (
    <>
      <Image
        src='/school-map/banner.png'
        className='w-full'
        width={1440}
        height={467}
        alt={''}
      />
      <div className='flex flex-col mx-40 sm:mx-0 lg:mx-40'>
        <h1 className='text-5xl text-[#1C355E] my-10 w-1'>{t('facilities')}</h1>
        <hr className={`${styles.solidHr}`} />
        <p className='mt-4'>
          {t.rich('facilities-details', {
            br: () => <br />,
          })}
        </p>
        <Image
          className='flex flex-row w-full py-8 pointer-events-none'
          src='/school-map/Frame 137.svg'
          width={1198}
          height={249}
          alt=''
        />
        <Image
          className='flex flex-row w-full py-8 pointer-events-none'
          src='/school-map/Frame 139.svg'
          width={1198}
          height={249}
          alt=''
        />
        <Image
          className='flex flex-row w-full py-8 pointer-events-none'
          src='/school-map/Frame 140.svg'
          width={1198}
          height={249}
          alt=''
        />
        <p className='flex flex-row text-5xl text-[#1C355E] my-10 w-1'>
          SCHOOL&nbsp;MAP
        </p>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.9935846887656!2d100.45539219999999!3d13.839423499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b00c5331839%3A0xcfc27dc9d28c810b!2z4LmC4Lij4LiH4LmA4Lij4Li14Lii4LiZ4LiZ4Liy4LiZ4Liy4LiK4Liy4LiV4Li0IOC4o-C5iOC4p-C4oeC4pOC4lOC4tSDguKPguLLguIrguJ7guKTguIHguKnguYwg4LmB4LiE4Lih4Lib4Lix4Liq!5e0!3m2!1sth!2sth!4v1713061745174!5m2!1sth!2sth'
          width='600'
          height='450'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='w-full h-[26vw]'
        ></iframe>
        <p className='flex flex-row text-5xl text-[#1C355E] my-10 w-1'>
          RECENT&nbsp;NEWS
        </p>
        <hr className={`${styles.solidHr}`} />
      </div>
    </>
  )
}

export default Page

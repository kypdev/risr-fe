'use client'

import RecentNews from '@/components/RecentNews'
import { SchoolMapLinks } from '@/constrant'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.css'

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
        <Link href={SchoolMapLinks.map} target='_blank'>
          <Image
            className='flex flex-row w-full py-8 pointer-events-none'
            src='/school-map/map.png'
            width={1198}
            height={249}
            alt=''
          />
        </Link>
        <p className='flex flex-row text-5xl text-[#1C355E] my-10 w-1'>
          RECENT&nbsp;NEWS
        </p>
        <hr className={`${styles.solidHr}`} />
      </div>
    </>
  )
}

export default Page

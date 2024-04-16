import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import { BannerUrl, CalendarLinks } from '@/constrant'
import { Link } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'School calendar',
}

const Page = () => {
  const t = useTranslations('Calendar')
  return (
    <div className='bg-bg'>
      <Banner img={BannerUrl.calendar} title={t('header')} />
      <div className='flex flex-row justify-center 2xl:my-16'>
        <a
          href='https://drive.google.com/file/d/13KeKRPhd1zYOMcuFwFuk85tIuWyjyYkG/view'
          target='_blank'
        >
          <Image
            src='/calendar/img1.png'
            alt={''}
            width={562}
            height={794}
            className='2xl:mr-8'
          />
        </a>
        <a
          href='https://drive.google.com/file/d/1GqPllD10TZCYpejGeLlOnuQrafJEJE6h/view'
          target='_blank'
        >
          <Image src='/calendar/img2.png' alt={''} width={562} height={794} />
        </a>
      </div>
      <ChildrenLayout>
        <iframe
          src={CalendarLinks.calendar}
          className='h-[50vw] mt-[2vw]'
        ></iframe>
        <div className='flex flex-row w-full'>
          <iframe
            src={CalendarLinks.calendar2}
            className='h-[50vw] mt-[2vw] w-full 2xl:mr-4'
          ></iframe>
          <iframe
            src={CalendarLinks.calendar3}
            className='h-[50vw] mt-[2vw] w-full'
          ></iframe>
        </div>
      </ChildrenLayout>
    </div>
  )
}

export default Page

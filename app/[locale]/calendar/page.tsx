import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import { BannerUrl, CalendarLinks } from '@/constrant'
import { useTranslations } from 'next-intl'
import React from 'react'

export const metadata = {
  title: 'School calendar',
}

const Page = () => {
  const t = useTranslations('Calendar')
  return (
    <div className='bg-bg'>
      <Banner img={BannerUrl.calendar} title={t('header')} />
      <div>
        <iframe
          src='https://drive.google.com/file/d/13KeKRPhd1zYOMcuFwFuk85tIuWyjyYkG/preview'
          width='640'
          height='480'
          allow='autoplay'
          className='w-[40vw] h-[50vw]'
        ></iframe>
      </div>
      <ChildrenLayout>
        <iframe
          src={CalendarLinks.calendar}
          className='h-[50vw] mt-[2vw]'
        ></iframe>
      </ChildrenLayout>
    </div>
  )
}

export default Page

import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import { BannerUrl } from '@/constrant'
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
      <ChildrenLayout>
        <iframe
        src='https://calendar.google.com/calendar/u/0/embed?color=%23f83a22&src=c_0c6a95842a3d4ab337e58a9c7c308d00980a7e48afec2d562b59ab53390fdc5a@group.calendar.google.com'
        className='h-[50vw] mt-[2vw]'
        ></iframe>
      </ChildrenLayout>
    </div>
  )
}

export default Page

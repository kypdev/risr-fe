import Banner from '@/components/Banner'
import { BannerUrl } from '@/constrant'
import { useTranslations } from 'next-intl'
import React from 'react'

export const metadata = {
  title: 'News',
}

const Page = () => {
  const t = useTranslations('News')
  return (
    <div className='bg-bg'>
      <Banner img={BannerUrl.news} title={t('header')} />
    </div>
  )
}

export default Page

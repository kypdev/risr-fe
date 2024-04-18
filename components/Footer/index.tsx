'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ChildrenLayout from '../ChildrenLayout'
import RecentNews from '../RecentNews'

const recentNewsData = [
  {
    image: '/recent-news/1.png',
    date: 'THU 11 JAN',
    description: 'Low Strung Cellobration'
  },
  {
    image: '/recent-news/2.png',
    date: 'WED 20 DEC',
    description: '2023 Winter & Chrismas Concerts'
  },
  {
    image: '/recent-news/3.png',
    date: 'SUN 10 DEC',
    description: 'Low Strung Cellobration'
  },
  {
    image: '/recent-news/4.png',
    date: 'WED 20 DEC',
    description: '2023 Winter & Chrismas Concerts'
  },
  {
    image: '/recent-news/5.png',
    date: 'SUN 10 DEC',
    description: 'Low Strung Cellobration'
  },
]

const Footer = () => {
  const t = useTranslations('Footer')
  return (
    <div className='bg-bg'>
      <ChildrenLayout>
        <RecentNews data={recentNewsData} />
      </ChildrenLayout>
      <Image
        className='flex flex-row w-full'
        src={'/footer/Copyright.svg'}
        width={1440}
        height={562}
        alt={''}
      />
    </div>
  )
}

export default Footer

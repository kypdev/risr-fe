// 'use client'

import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import Title from '@/components/Title'
import { TuitionLinks, Utils } from '@/constrant'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export const metadata = {
  title: 'Tuition & Fees'
}

const Page = () => {
  const t = useTranslations('Tuition')
  return (
    <>
      <Banner img='/tuition/banner.svg' title={t('title')} />
      <ChildrenLayout>
        <Title title={t('click-below')} hasLine={true } />
        <Link
          href={TuitionLinks.tuition}
          target={Utils.newTab}
          className='pt-[2vw]'
        >
          <div className='font-bold 2xl:text-[2vw]'>{t('content')} &#8594;</div>
        </Link>
      </ChildrenLayout>
    </>
  )
}

export default Page

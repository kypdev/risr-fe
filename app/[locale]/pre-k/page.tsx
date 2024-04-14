'use client'

import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import Title from '@/components/Title'
import { Button } from '@/components/ui/button'
import { BannerUrl } from '@/constrant'
import { useTranslations } from 'next-intl'
import React from 'react'
import Image from 'next/image'

export const metadata = {
  title: 'Pre-K'
}

const Page = () => {
  const t = useTranslations('PreK')
  return (
    <>
      <Banner img={BannerUrl.preK} title={t('header')} isButtonElemantary />
      <ChildrenLayout>
        <Title title={t('title1')} hasLine />
        <div className='flex flex-row pt-[2vw]'>
          <div className='flex flex-col'>
            <p className='pr-[2vw] font-[100]'>
              {t.rich('sub1', {
                br: () => <br />,
              })}
            </p>
            <div className='pt-[4vw]'>
              <Button variant='blue' className='mr-[2vw]'>
                Apply now
              </Button>
              <Button variant='transblue'>Organize a tour</Button>
            </div>
          </div>
          <Image src='/pre-k/img1.png' width={578} height={385} alt={''} />
        </div>
        <Title title={t('curriculum')} hasLine={false} />
        <p>{t.rich('curriculum-sub', {
          br: () => <br />
        })}</p>
        <Image
          src='/pre-k/img2.svg'
          width={1200}
          height={589}
          alt={''}
          className='w-full mt-[2vw]'
        />
        <p className='mt-[2vw]'>
          {t.rich('sub2', {
            b: (c) => <b>{c}</b>
          })}
        </p>
        <p className='mt-[2vw]'>
          {t.rich('sub3', {
            b: (c) => <b>{c}</b>
          })}
        </p>
      </ChildrenLayout>
    </>
  )
}

export default Page
'use client'

import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import Title from '@/components/Title'
import { Button } from '@/components/ui/button'
import { BannerUrl } from '@/constrant'
import React from 'react'
import { useTranslations } from 'use-intl'
import Image from 'next/image'

export const metadata = {
  title: 'Middle SCHOOL'
}

const Page = () => {
  const t = useTranslations('MiddleSchool')
  return (
    <>
      <Banner
        img={BannerUrl.middleSchool}
        title={t('header')}
        isButtonElemantary
      />
      <ChildrenLayout>
        <Title title={t('title1')} hasLine />
        <div className='flex flex-row pt-[2vw]'>
          <div className='flex flex-col'>
            <p className='pr-[2vw] font-[100]'>{t('sub1')}</p>
            <p className='text-sub '>&nbsp; &#x2022; {t('sub2')}</p>
            <p className='text-sub '>&nbsp; &#x2022; {t('sub3')}</p>
            <p className='text-sub '>&nbsp; &#x2022; {t('sub4')}</p>
            <p className='text-sub '>&nbsp; &#x2022; {t('sub5')}</p>
            <p className='text-sub '>&nbsp; &#x2022; {t('sub6')}</p>
            <div className='pt-[4vw]'>
              <Button variant='blue' className='mr-[2vw]'>
                Apply now
              </Button>
              <Button variant='transblue'>Organize a tour</Button>
            </div>
          </div>
          <Image
            src='/middle-school/img1.png'
            width={578}
            height={385}
            alt={''}
            className='w-[30vw]'
          />
        </div>
        <Title title={t('curriculum')} hasLine={false} />
        <p>
          {t.rich('curriculum-sub', {
            br: () => <br />,
          })}
        </p>
        <Image
          src='/middle-school/img3.svg'
          width={578}
          height={385}
          alt={''}
          className='w-full mt-[2vw]'
        />
        <div className='flex flex-row pt-[2vw]'>
          <Image
            src='/middle-school/img4.svg'
            width={578}
            height={385}
            alt={''}
            className='w-[30vw]'
          />
          <div className='flex flex-col ml-[2vw]'>
            <h1 className='text-line text-[3vw]'>{t('title2')}</h1>
            <p>
              {
                t.rich('sub7', {
                  br: () => <br />
                })
              }
            </p>
            <div className='flex flex-row'>
            <p>{t('sub8')}</p>
            <p className='ml-[0.5vw] text-bold text-line'>{t.rich('sub9', {
              a: (c) => <a href="https://docs.google.com/document/d/1_XvkORa5rMUxhqtdUqSc6CN2e96NcyucAzNUcU0Hoko/edit" target='_blank'>{c}</a>
            })}</p>
            </div>
            <Image
              src='/middle-school/img5.svg'
              width={578}
              height={385}
              alt={''}
              className='w-[61vw] mt-[2vw]'
            />
          </div>
        </div>
      </ChildrenLayout>
    </>
  )
}

export default Page

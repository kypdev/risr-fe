// 'use client'

import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import Title from '@/components/Title'
import { Button } from '@/components/ui/button'
import { BannerUrl } from '@/constrant'
import { useTranslations } from 'next-intl'
import React from 'react'
import Image from 'next/image'

export const metadata = {
  title: 'High school'
}

const Page = () => {
  const t = useTranslations('HighSchool')
  const gradeRequireList = [
    'sub5',
    'sub6',
    'sub7',
    'sub8',
    'sub9',
    'sub10',
    'sub11',
    'sub12',
    'sub13',
    'sub14',
    'sub15',
  ]
  return (
    <div className='bg-[#E5E9EF]'>
      <Banner
        img={BannerUrl.highSchool}
        isButtonElemantary
        title={t('header')}
      />
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
          <Image
            src='/high-school/img1.svg'
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
          src='/high-school/img2.svg'
          width={578}
          height={385}
          alt={''}
          className='w-full mt-[2vw]'
        />
        <p className='mt-[2vw]'>
          {t.rich('sub2', {
            br: () => <br />,
          })}
        </p>
        <Title title={t('title2')} hasLine={false} />
        <p>{t('sub3')}</p>
        <Image
          src='/high-school/img3.svg'
          width={578}
          height={385}
          alt={''}
          className='w-full mt-[2vw]'
        />
        <div className='flex flex-row col-span-2'>
          <Image
            src='/high-school/img4.svg'
            width={578}
            height={385}
            alt={''}
            className='w-[40vw] mt-[2vw]'
          />
          <div className='flex flex-col mt-[2vw] ml-[1.5vw]'>
            <h1 className='text-line text-[3.2vw]'>{t('title3')}</h1>
            <p>{t('sub4')}</p>
            {gradeRequireList.map((v, index) => (
              <>
                <p key={index}>
                  {t.rich(v, {
                    b: (c) => <b>{c}</b>,
                  })}
                </p>
              </>
            ))}
            <div className='mt-[2vw]'>
              <Button
                variant='blue'
                className='mr-[2vw] text-[1vw] px-[5vw] py-[1.1vw]'
              >
                Apply now
              </Button>
              <Button
                variant='transblue'
                className='text-[1vw] px-[5vw] py-[1.1vw]'
              >
                Organize a tour
              </Button>
            </div>
          </div>
        </div>
        <div className='flex flex-row mt-[2vw]'>
          <p className=''>
            {t.rich('sub16', {
              a: (c) => (
                <a
                  className='font-bold text-line'
                  href='https://docs.google.com/document/d/1xHw9UqNYsJQgQ9bVSK4oIVGJ5E8nOJCH4FIvXr4A140/edit'
                  target='_blank'
                >
                  {c}
                </a>
              ),
            })}
          </p>
        </div>
        <div className='flex flex-row my-[2vw]'>
          <Image
            src='/high-school/img5.svg'
            width={578}
            height={385}
            alt={''}
            className='w-[30vw] mt-[1vw]'
          />
          <div className='flex flex-col ml-[2vw]'>
            <h1 className='text-line text-[3.2vw]'>{t('title4')}</h1>
            <p>
              {t.rich('sub17', {
                br: () => <br />,
              })}
            </p>
            <Image
              src='/high-school/img6.svg'
              width={578}
              height={385}
              alt={''}
              className='w-[50vw] mt-[1vw]'
            />
          </div>
        </div>
        <Image
              src='/high-school/img7.svg'
              width={578}
              height={385}
              alt={''}
              className='w-[83vw] my-[1vw]'
            />
      </ChildrenLayout>
    </div>
  )
}

export default Page

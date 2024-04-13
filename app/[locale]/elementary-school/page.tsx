import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import Title from '@/components/Title'
import { Button } from '@/components/ui/button'
import { BannerUrl } from '@/constrant'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  const t = useTranslations('Elementary')
  return (
    <>
      <Banner
        img={BannerUrl.elementarySchool}
        title={t('title')}
        isButtonElemantary={true}
      />
      <ChildrenLayout>
        <Title title={t('title1')} hasLine={true} />
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
          <Image src='/elementary/img1.png' width={578} height={385} alt={''} />
        </div>
        <Title title={t('curriculum')} hasLine={false} />
        <p>{t('curriculum-sub')}</p>
        <Image
          src='/elementary/img2.png'
          width={1200}
          height={589}
          alt={''}
          className='w-full mt-[2vw]'
        />
        <p className='mt-[2vw]'>
          {t.rich('sub2', {
            br: () => <br />,
          })}
        </p>
        <Image
          src='/elementary/img3.png'
          width={1200}
          height={589}
          alt={''}
          className='w-full mt-[2vw]'
        />
        <p className='mt-[2vw]'>
          {t.rich('sub3', {
            br: () => <br />,
          })}
        </p>
        <div className='pt-[2vw]'>
          <p>{t.rich('sub4', {
            a: (c) => <a className='font-bold text-[#1C355E]' href='https://docs.google.com/document/d/1_XvkORa5rMUxhqtdUqSc6CN2e96NcyucAzNUcU0Hoko/edit' target='_blank'>{c}</a>
          })}</p>
        </div>
      </ChildrenLayout>
    </>
  )
}

export default Page

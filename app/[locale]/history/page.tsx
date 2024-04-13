import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import Title from '@/components/Title'
import YoutubeContent from '@/components/YoutubeContent'
import { BannerUrl } from '@/constrant'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  const t = useTranslations('History')
  return (
    <>
      <Banner img={BannerUrl.history} title={t('header')} />
      <ChildrenLayout>
        <Title title={t('title1')} hasLine={true} />
        <YoutubeContent>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/xybggLnoZ7U?si=c06nA9eaurO7WqAz'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            className='w-full h-[100%]'
          ></iframe>
        </YoutubeContent>
        <p className='mt-[2vw]'>{t('sub1')}</p>
        <Image
          src='/history/img1.png'
          width={1200}
          height={675}
          alt={''}
          className='w-full mt-[2vw]'
        />
        <p className='mt-[2vw] text-center font-bold'>{t('sub2')}</p>
        <p className='mt-[2vw] text-start'>{t('sub3')}</p>
        <div className=' flex flex-row justify-center'>
          <Image
            src='/history/img2.png'
            width={397}
            height={496}
            alt={''}
            className='w-[20vw] mt-[2vw]'
          />
        </div>
        <p className='mt-[2vw] text-center font-bold'>{t('sub4')}</p>
        <p className='mt-[2vw] text-start'>{t('sub5')}</p>
        <div className=' flex flex-row justify-center'>
          <Image
            src='/history/img3.png'
            width={599}
            height={511}
            alt={''}
            className='w-[42vw] mt-[2vw]'
          />
        </div>
        <p className='mt-[2vw] text-center font-bold'>{t('sub4')}</p>
        <p className='mt-[2vw] text-start'>{t('sub5')}</p>
        <div className=' flex flex-row justify-center'>
          <Image
            src='/history/img4.png'
            width={599}
            height={511}
            alt={''}
            className='w-[43vw] mt-[2vw]'
          />
        </div>
        <p className='mt-[2vw] text-center font-bold'>{t('sub4')}</p>
        <p className='mt-[2vw] text-start'>{t('sub5')}</p>
        <div className=' flex flex-row justify-center'>
          <Image
            src='/history/img5.png'
            width={599}
            height={511}
            alt={''}
            className='w-[43vw] mt-[2vw]'
          />
        </div>
        <p className='mt-[2vw] text-center font-bold'>{t('sub6')}</p>
        <div className='flex flex-row justify-center mt-[2vw]'>
          <h1 className='text-[3vw] text-line'>{t('our-campus')}</h1>
        </div>
        <p className='mt-[2vw] text-start'>
          {t.rich('sub7', {
            br: () => <br />,
          })}
        </p>
        <div className=' flex flex-row justify-center'>
          <Image
            src='/history/img6.png'
            width={599}
            height={511}
            alt={''}
            className='w-[50vw] mt-[2vw]'
          />
        </div>
        <p className='mt-[2vw] text-center font-bold'>{t('sub8')}</p>
      </ChildrenLayout>
    </>
  )
}

export default Page

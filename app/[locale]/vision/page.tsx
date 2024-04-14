// 'use client'

import Banner from '@/components/Banner'
import Title from '@/components/Title'
import VisionMission from '@/components/VisionMission'
import { BannerUrl } from '@/constrant'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import StudenLearner from './StudenLearner'

export const metadata = {
  title: 'Vision & Mission'
}

export default function Home() {
  const t = useTranslations('Vision')
  return (
    <div className='bg-grey flex flex-col'>
      <Banner img={BannerUrl.vision} title={t('title')} />
      <div className='bg-[#E5E9EF]'>
        <Image
          src='/home/bg.svg'
          className='w-full pointer-events-none absolute h-[133vw]'
          width={1440}
          height={467}
          alt={''}
        />
        <div className='flex flex-col mx-40 sm:mx-0 lg:mx-40'>
          <div className='flex flex-row pt-[6vw] z-10'>
            <Image
              src='/vision/ris.svg'
              className='w-[12vw] pointer-events-none 2xl:h-[32.1.vw]'
              width={1440}
              height={467}
              alt={''}
            />
            <div className='pl-[4vw]'>
              <p>
                {t.rich('ris-sub', {
                  br: () => <br />,
                })}
              </p>
            </div>
          </div>

          <Image
            src='/vision/img-row.svg'
            width={381}
            className='w-full h-full z-10 pt-[2vw]'
            height={382}
            alt={''}
          />

          <p className='z-10 flex text-center pt-[3vw]'>{t('sub2')}</p>
          <Image
            src='/vision/img4.svg'
            width={381}
            className='w-full h-[21vw] z-10 pt-[2vw]'
            height={382}
            alt={''}
          />
          <p className='z-10 flex text-center'>
            {t.rich('sub3', {
              br: () => <br />,
            })}
          </p>
          <VisionMission />
          <div className='flex flex-col justify-center text-center'>
            <Title title={t('studen-learner')} hasLine={false} />
            <StudenLearner />
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import RecentNews from '@/components/RecentNews'
import Image from "next/image"
import styles from './style.module.css'
import { data } from './mockData'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'

export default function Home() {
  const t = useTranslations('Home')
  return (
    <div className='bg-grey flex flex-col'>
      <div className='flex items-center justify-start'>
        <video
          src={require("../../public/home/home2.mp4")}
          autoPlay
          muted
          loop
          width="1903"
          height="367"
          className={`${styles.video} 2xl:h-[20vw] xl:h-[32.5vw] 2xl:2-[40vw]`}
        />
        <div className="absolute">
          <div className=' z-10 2xl:top-[18vw] text-white'>
            <div className='2xl:pl-[8vw] 2xl:pt-[2vw]'>
              <h1 className='bebas 2xl:text-[3vw] '>{t.rich("school-name", {
                br: () => <br />,
              })}</h1>
              <Button variant='trans' className='sub-font mr-4'>{t('news')}</Button>
              <Button variant='trans' className='sub-font'>{t('ris-history')}</Button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#E5E9EF]'>
        <Image src='/home/bg.svg' className='w-full pointer-events-none absolute' width={1440} height={467} alt={''} />
        <main className='flex flex-col mx-40 sm:mx-0 lg:mx-40'>
          <Image src='/home/img1.svg' className='w-full pointer-events-none z-10 pt-16' width={1440} height={467} alt={''} />
          <Image src='/home/img5.svg' className='w-full pointer-events-none z-10 pt-16' width={1440} height={467} alt={''} />
          <Image src='/home/img3.svg' className='w-full py-4 pointer-events-none z-10 pt-32' width={1440} height={467} alt={''} />
          <Image src='/home/img6.svg' className='w-full py-4 pointer-events-none z-10 pt-32' width={1440} height={467} alt={''} />
          <Image src='/home/img7.svg' className='w-full py-4 pointer-events-none z-10 pt-32 pb-32' width={1440} height={467} alt={''} />
          <div className='relative flex items-center'>
            <div
              id='slider'
              className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar scrollbar-hide'
            >
              {data.map((item) => (
                <img
                  key={item.id}
                  className='w-[688px] h-[852px] inline-block p-0 cursor-pointer hover:scale-105 ease-in-out duration-300'
                  src={item.img}
                  alt='/'
                />
              ))}
            </div>
          </div>
          <Image src='/home/img4.svg' className='w-full py-4 pointer-events-none z-10' width={1440} height={467} alt={''} />
          <p className='flex flex-row text-5xl text-[#1C355E] my-10 w-1'>RECENT&nbsp;NEWS</p>
          <hr className={`${styles.solidHr}`} />
          <RecentNews />
        </main>
      </div>
    </div>
  )
}

import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { data } from './mockData'
import styles from './style.module.css'
import TimelineCarousel from '@/components/TimelineCarousel'

export const metadata = {
  title: 'Home',
}

export default function Home() {
  const t = useTranslations('Home')
  const video: string = '/home/home2.mp4'
  return (
    <div className='bg-grey flex flex-col'>
      <div className='flex flex-col items-start justify-start'>
        {/* <video
          src={video}
          autoPlay
          muted
          loop
          width='1903'
          height='367'
          className={`${styles.video} 2xl:h-[20vw] xl:h-[32.5vw] 2xl:2-[40vw]`}
        /> */}
        <div className='h-[30vw] w-full overflow-hidden'>
          <iframe
            width='1903'
            height='1200'
            allow='autoplay'
            src="https://www.youtube.com/embed/fmF7V7EUJeI?si=lzPE2w_6ES1L79Fd&playlist=fmF7V7EUJeI&autoplay=1&mute=1&loop=1&end=178"
            className='pointer-events-none absolute top-[-4vw] z-[-10]'
          ></iframe>
        </div>
        <div className='absolute top-[16vw] left-[6vw]'>
          <div className='z-10 text-white'>
            <h1 className='bebas 2xl:text-[3vw] '>
              {t.rich('school-name', {
                br: () => <br />,
              })}
            </h1>
            <Button variant='trans' className='sub-font mr-4'>
              {t('news')}
            </Button>
            <Button variant='trans' className='sub-font'>
              {t('ris-history')}
            </Button>
          </div>
        </div>
      </div>
      <div className='bg-[#E5E9EF]'>
        <Image
          src='/home/bg.svg'
          className='w-full pointer-events-none absolute'
          width={1440}
          height={467}
          alt={''}
        />
        <main className='flex flex-col mx-40 sm:mx-0 lg:mx-40'>
          <Image
            src='/home/img1.svg'
            className='w-full pointer-events-none z-10 pt-16'
            width={1440}
            height={467}
            alt={''}
          />
          <Image
            src='/home/img5.svg'
            className='w-full pointer-events-none z-10 pt-16'
            width={1440}
            height={467}
            alt={''}
          />
          <Image
            src='/home/img3.svg'
            className='w-full py-4 pointer-events-none z-10 pt-32'
            width={1440}
            height={467}
            alt={''}
          />
          <Image
            src='/home/img6.svg'
            className='w-full py-4 pointer-events-none z-10 pt-32'
            width={1440}
            height={467}
            alt={''}
          />
          <Image
            src='/home/img7.svg'
            className='w-full py-4 pointer-events-none z-10 my-8'
            width={1440}
            height={467}
            alt={''}
          />
          <TimelineCarousel data={data} />
          <Image
            src='/home/img4.svg'
            className='w-full py-4 pointer-events-none z-10'
            width={1440}
            height={467}
            alt={''}
          />
          <p className='flex flex-row text-5xl text-[#1C355E] my-10 w-1'>
            RECENT&nbsp;NEWS
          </p>
          <hr className={`${styles.solidHr}`} />
        </main>
      </div>
    </div>
  )
}

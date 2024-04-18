import ExpandSection from '@/components/ExpandSection'
import TimelineCarousel from '@/components/TimelineCarousel'
import Title from '@/components/Title'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { data } from './mockData'
import styles from './style.module.css'

export const metadata = {
  title: 'Home',
}

const expandSectionData = [
  {
    id: 1,
    image: '/home/1.jpg',
    title: 'pre-k',
    description: [
      'Pre-K 2 - 2 years',
      'Pre-K 3 - 3 years',
      'Pre-K 4 - 4 years',
    ],
  },
  {
    id: 2,
    image: '/home/2.jpg',
    title: 'elementary-school',
    description: [
      'Kindergarten - 5 years',
      'Grade 1 - 6 years',
      'Grade 2 - 7 years',
      'Grade 3 - 8 years',
      'Grade 4 - 9 years',
      'Grade 5 - 10 years',
    ],
  },
  {
    id: 3,
    image: '/home/3.jpg',
    title: 'middle-school',
    description: [
      'Grade 6 - 11 years',
      'Grade 7 - 12 years',
      'Grade 8 - 13 years',
    ],
  },
  {
    id: 4,
    image: '/home/4.jpg',
    title: 'high-school',
    description: [
      'Grade 9 - 14 years',
      'Grade 10 - 15 years',
      'Grade 11 - 16 years',
    ],
  },
]

export default function Home() {
  const t = useTranslations('Home')
  return (
    <div className='bg-grey flex flex-col'>
      <div className='flex flex-col items-start justify-start'>
        <div className='h-[30vw] w-full overflow-hidden'>
          <iframe
            width='1903'
            height='1200'
            allow='autoplay'
            src='https://www.youtube.com/embed/fmF7V7EUJeI?si=lzPE2w_6ES1L79Fd&playlist=fmF7V7EUJeI&autoplay=1&mute=1&loop=1&end=178'
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
      <div className='bg-[#E5E9EF] w-full'>
        <Image
          src='/home/bg.svg'
          className='w-full pointer-events-none absolute'
          width={1440}
          height={467}
          alt={''}
        />
        <main className='flex flex-col mx-40 sm:mx-0 lg:mx-40'>
          {/* <Image
            src='/home/img1.svg'
            className='w-full pointer-events-none z-10 pt-16'
            width={1440}
            height={467}
            alt={''}
          /> */}
          <div className='flex flex-col z-10'>
            <Title title={t('title1')} hasLine />
            <div className='flex flex-row mt-8'>
              <div className='flex-[1.2]'>
                <p className='text-[1.2rem]'>
                  {t.rich('desc1', {
                    br: () => <br />,
                    b: (c) => <b className='text-title font-bold'>{c}</b>,
                  })}
                </p>
                <div className='flex flex-row justify-between px-8 mt-8'>
                  <Button
                    variant='blue'
                    className='text-[1.3rem] py-[1.2vw] px-[5vw]'
                    size='default'
                  >
                    Apply now
                  </Button>
                  <Button
                    variant='transblue'
                    className='text-[1.3rem] py-[1.2vw] px-[5vw]'
                  >
                    Calendar
                  </Button>
                </div>
              </div>
              <div className='flex-[2]'>
                <ExpandSection data={expandSectionData} />
              </div>
            </div>
          </div>
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
        </main>
      </div>
    </div>
  )
}

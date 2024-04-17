import Image from 'next/image'
import styles from './style.module.css'
import Banner from '@/components/Banner'
import { BannerUrl } from '@/constrant'
import { useTranslations } from 'next-intl'

export const metadata = {
  title: 'Apply Now & How to Apply',
}

const Page = () => {
  const t = useTranslations('Apply')
  return (
    <div className='bg-bg'>
      <Banner img={BannerUrl.apply} title={t('header')} isApply />
      <div className='flex flex-col mx-40 sm:mx-0 lg:mx-40 mt-16'>
        <Image
          src='/apply/img1.svg'
          className='w-full pointer-events-none'
          width={1440}
          height={467}
          alt={''}
        />
        <Image
          src='/apply/img2.svg'
          className='w-full pointer-events-none'
          width={1440}
          height={467}
          alt={''}
        />
        <Image
          src='/apply/line.svg'
          className='w-full pointer-events-none py-4'
          width={1440}
          height={467}
          alt={''}
        />
        <Image
          src='/apply/img3.svg'
          className='flex flex-row justify-center items-center  py-4 w-60 pointer-events-none'
          width={1200}
          height={48}
          alt={''}
        />
        <Image
          src='/apply/img4.svg'
          className='w-full py-4 pointer-events-none'
          width={1440}
          height={467}
          alt={''}
        />
        <Image
          src='/apply/img5.svg'
          className='w-full py-4 pointer-events-none'
          width={1440}
          height={467}
          alt={''}
        />

        <p className='flex flex-row text-5xl text-[#1C355E] my-10 w-1'>
          RECENT&nbsp;NEWS
        </p>
        <hr className={`${styles.solidHr}`} />
      </div>
    </div>
  )
}

export default Page

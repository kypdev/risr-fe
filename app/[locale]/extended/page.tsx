import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import SubRichTextNextLine from '@/components/SubRichTextNextLine'
import { Button } from '@/components/ui/button'
import { BannerUrl } from '@/constrant'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const Page = () => {
  const t = useTranslations('Extended')
  return (
    <>
      <Banner img={BannerUrl.extended} title={t('title')} />
      <ChildrenLayout>
        <div className='flex flex-row justify-center'>
          <h1 className='text-[#1C355E] text-[4vw] pt-[3vw]'>{t('title')}</h1>
        </div>
        <hr className='border-2 border-solid border-line' />
        <div className='flex flex-row justify-center mt-[2vw] gap-4'>
          <Button variant='transblue' className='sub-font px-[6vw]'>{t('regis-form')}</Button>
          <Button variant='transblue' className='sub-font px-[6vw]'>{t('room-allocation')}</Button>
          <Button variant='transblue' className='sub-font px-[6vw]'>{t('edp-policy')}</Button>
        </div>
        <div className='flex flex-row justify-center'>
          <h1 className='text-[#1C355E] text-[3vw] pt-[3vw]'>{t('all-courses')}</h1>
        </div>
        <div className='flex flex-row justify-center text-center'>
          <p className='text-[#2E2E2E] text-[0.9vw] pt-[3vw]'>
            {t.rich('all-courses-sub1', {
              br: () => <br />
            })}
            </p>
        </div>
        <div className='flex flex-row justify-center text-center'>
          <p className='text-[#2E2E2E] text-[0.9vw]'>
            {t.rich('all-courses-sub2', {
              b: (c) => <b className='font-bold text-line'>{c}</b>
            })}
            </p>
        </div>
        <div className='flex flex-row justify-center text-center'>
          <p className='text-[#2E2E2E] text-[0.9vw]'>
            {t.rich('all-courses-sub3', {
              br: () => <br />
            })}
            </p>
        </div>
      </ChildrenLayout>
    </>
  )
}

export default Page

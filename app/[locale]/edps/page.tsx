import AccordionEdps from '@/components/AccordionEdps'
import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import Title from '@/components/Title'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BannerUrl } from '@/constrant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslations } from 'next-intl'
import Data from './data.json'
import { useEffect } from 'react'
import AccordionList from './AccordionList'

export const metadata = {
  title: 'EDPs',
}

const Page = () => {
  const t = useTranslations('Extended')
  return (
    <div className='bg-bg'>
      <Banner img={BannerUrl.extended} title={t('title')} />
      <ChildrenLayout>
        <div className='flex flex-row justify-center'>
          <h1 className='text-[#1C355E] text-[4vw] pt-[3vw]'>{t('title')}</h1>
        </div>
        <hr className='border-2 border-solid border-line' />
        <div className='flex flex-row justify-center mt-[2vw] gap-4'>
          <Button variant='transblue' className='sub-font px-[6vw]'>
            {t('regis-form')}
          </Button>
          <Button variant='transblue' className='sub-font px-[6vw]'>
            {t('room-allocation')}
          </Button>
          <Button variant='transblue' className='sub-font px-[6vw]'>
            {t('edp-policy')}
          </Button>
        </div>
        <div className='flex flex-row justify-center'>
          <h1 className='text-[#1C355E] text-[3vw] pt-[3vw]'>
            {t('all-courses')}
          </h1>
        </div>
        <div className='flex flex-row justify-center text-center'>
          <p className='text-[#2E2E2E] text-[0.9vw] pt-[3vw]'>
            {t.rich('all-courses-sub1', {
              br: () => <br />,
            })}
          </p>
        </div>
        <div className='flex flex-row justify-center text-center'>
          <p className='text-[#2E2E2E] text-[0.9vw]'>
            {t.rich('all-courses-sub2', {
              b: (c) => <b className='font-bold text-line'>{c}</b>,
            })}
          </p>
        </div>
        <div className='flex flex-row justify-center text-center'>
          <p className='text-[#2E2E2E] text-[0.9vw]'>
            {t.rich('all-courses-sub3', {
              br: () => <br />,
            })}
          </p>
        </div>
        <Title title={''} hasLine />
        <Input placeholder='Search' className='2xl:mt-4' />
        {/* Accordion */}
        <div>
          {/* <AccordionEdps
            title={'aa'}
            subTitle={'bb'}
            description={['aa', 'bb']}
            isSubTitle
          /> */}
        </div>
        <div className='flex flex-row justify-center text-center 2xl:mt-4'>
          <div className='flex flex-col'>
            <p className='2xl:mb-16'>{t('sub3')}</p>
            <p>
              {t.rich('sub4', {
                br: () => <br />,
              })}
            </p>
          </div>
        </div>
        {/* <AccordionEdps
          title={t.rich('acd-title1', {
            b: (c) => <b className='text-line'>{c}</b>,
          })}
          subTitle={t('acd-sub-title1')}
          description={t.rich('acd-desc1', {
            b: (c) => <b className='text-line'>{c}</b>,
            br: () => <br />,
          })}
        /> */}
        <AccordionList />
        <div>
          test
          <p>
            {t.rich('test', {
              br: () => <br />,
              // p: (c) => <p className=''>{c}</p>,
              b: (c) => <b className='text-line'>{c}</b>,
            })}
          </p>
        </div>
      </ChildrenLayout>
    </div>
  )
}

export default Page

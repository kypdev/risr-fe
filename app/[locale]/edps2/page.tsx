import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import Title from '@/components/Title'
import { Button } from '@/components/ui/button'
import { BannerUrl } from '@/constrant'
import { useTranslations } from 'next-intl'

const test = ['sub5', 'sub6', 'sub7', 'sub8', 'sub9', 'sub10']

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
            {t('ris-extended')}
          </h1>
        </div>
        <p>{t('sub1')}</p>
        <p className='2xl:mt-16'>{t('sub2')}</p>
        <ul className='list-decimal 2xl:pl-5'>
          {test.map((v, i) => (
            <li key={i} className='sub-font'>
              {t(v)}
            </li>
          ))}
        </ul>
        <p>{t('sub11')}</p>
        <Title title={''} hasLine />
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
      </ChildrenLayout>
    </div>
  )
}

export default Page

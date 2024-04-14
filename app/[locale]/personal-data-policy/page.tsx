'use client'
import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import { BannerUrl, PersonalData } from '@/constrant'
import { useTranslations } from 'next-intl'

const Page = () => {
  const t = useTranslations('PersonalData')
  return (
    <div className='bg-bg'>
      <Banner
        img={BannerUrl.personalDataPolicy}
        title={t('header')}
        isPersonalData
      />
      <ChildrenLayout>
      <iframe src={PersonalData.docs}
     className='px-[10vw] h-[40vw] mt-[2vw]'
      >
      </iframe>
      </ChildrenLayout>
    </div>
  )
}

export default Page

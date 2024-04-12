import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import RecentNews from '@/components/RecentNews'
import SubRichText from '@/components/SubRichText'
import Title from '@/components/Title'
import { useTranslations } from 'next-intl'

const Page = () => {
  const t = useTranslations('Scholarship')
  return (
    <>
      <Banner img={'/scholarship/banner.svg'} title={t('title')} />
      <ChildrenLayout>
        <Title title={t('scholarship')} />
        <SubRichText text={t('content')} />
        <RecentNews />
      </ChildrenLayout>
    </>
  )
}

export default Page

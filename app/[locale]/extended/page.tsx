import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import SubRichTextNextLine from '@/components/SubRichTextNextLine'
import { BannerUrl } from '@/constrant'
import { useTranslations } from 'next-intl'

const Page = () => {
  const t = useTranslations('Extended')
  return (
    <>
      <Banner img={BannerUrl.extended} title={t('title')} />
      <ChildrenLayout>
        <SubRichTextNextLine langKey='Extended.sub2' />
      </ChildrenLayout>
    </>
  )
}

export default Page

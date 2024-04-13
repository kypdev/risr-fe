import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import SubRichTextNextLine from '@/components/SubRichTextNextLine'
import { BannerUrl } from '@/constrant'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const Page = () => {
  const t = useTranslations('Extended')
  return (
    <>
      <Banner img={BannerUrl.extended} title={t('title')} />
      <ChildrenLayout>
        {/* <SubRichTextNextLine langKey='Extended.sub2' /> */}
        <Image
          src='/extended/content.svg'
          className='w-full pointer-events-none py-12'
          width={1440}
          height={467}
          alt={''}
        />
      </ChildrenLayout>
    </>
  )
}

export default Page

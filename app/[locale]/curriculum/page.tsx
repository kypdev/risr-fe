// 'use client'

import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import SubRichTextNextLine from '@/components/SubRichTextNextLine'
import Title from '@/components/Title'
import { BannerUrl } from '@/constrant'
import { useTranslations } from 'next-intl'

export const metadata = {
  title: 'Curriculum'
}

const Page = () => {
  const t = useTranslations('Curriculum')
  const lang = {
    title: t('title'),
    curriculumContent: t.rich(t('curriculum-content'), {
      br: () => <br />,
    }),
  }
  return (
    <>
      <Banner img={BannerUrl.curriculum} title={lang.title} />
      <ChildrenLayout>
        <Title title={lang.title} hasLine={true}/>
        <SubRichTextNextLine langKey='Curriculum.curriculum-content' />
      </ChildrenLayout>
    </>
  )
}

export default Page

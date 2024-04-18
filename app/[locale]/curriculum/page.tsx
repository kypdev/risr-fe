import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import Title from '@/components/Title'
import { BannerUrl } from '@/constrant'
import { useTranslations } from 'next-intl'

export const metadata = {
  title: 'Curriculum',
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
    <div className='bg-bg'>
      <Banner img={BannerUrl.curriculum} title={lang.title} />
      <ChildrenLayout>
        <Title title={lang.title} hasLine={true} />
        <p className='mt-8'>
          {t.rich('curriculum-content', {
            br: () => <br />,
          })}
        </p>
      </ChildrenLayout>
    </div>
  )
}

export default Page

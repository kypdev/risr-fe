import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import Title from '@/components/Title'
import { Utils } from '@/constrant'
import { useTranslations } from 'next-intl'

export const metadata = {
  title: 'Scholarships'
}

const Page = () => {
  const t = useTranslations('Scholarship')
  return (
    <>
      <Banner img={'/scholarship/banner.svg'} title={t('title')} />
      <ChildrenLayout>
        <Title title={t('scholarship')} hasLine={true} />
        <p className='sub-font 2xl:py-[2vw] 2xl:text-[1vw]'>
          {t.rich('content')}
          {
            <a
              href='mailto:admissions@risr.ac.th?body=My custom mail body"'
              target={Utils.newTab}
              className='font-bold text-[#1C355E] underline underline-offset-4'
            >
              {t('email')}
            </a>
          }
        </p>
      </ChildrenLayout>
    </>
  )
}

export default Page

import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import Title from '@/components/Title'
import { BannerUrl } from '@/constrant'
import { useTranslations } from 'next-intl'
import ContentArea from './ContentArea'

export const metadata = {
  title: 'Schoolwide learner outcome',
}

type ContentData = {
  img: string
  title: string
  description: string
}

const Page = () => {
  const t = useTranslations('SchoolWide')
  const head: ContentData[] = [
    {
      img: '/school-wide/img1.svg',
      title: 'title1',
      description: 'desc1',
    },
    {
      img: '/school-wide/img2.svg',
      title: 'title2',
      description: 'desc2',
    },
    {
      img: '/school-wide/img3.svg',
      title: 'title3',
      description: 'desc3',
    },
  ]
  const heart: ContentData[] = [
    {
      img: '/school-wide/img7.svg',
      title: 'title7',
      description: 'desc7',
    },
    {
      img: '/school-wide/img8.svg',
      title: 'title8',
      description: 'desc8',
    },
    {
      img: '/school-wide/img9.svg',
      title: 'title9',
      description: 'desc9',
    },
  ]
  const hands: ContentData[] = [
    {
      img: '/school-wide/img4.svg',
      title: 'title4',
      description: 'desc4',
    },
    {
      img: '/school-wide/img5.svg',
      title: 'title5',
      description: 'desc5',
    },
    {
      img: '/school-wide/img6.svg',
      title: 'title6',
      description: 'desc6',
    },
  ]
  return (
    <div className='bg-[#E5E9EF]'>
      <Banner img={BannerUrl.schoolWide} title={t('header')} />
      <ChildrenLayout>
        <Title title={t('header1')} hasLine />
        {head.map((v: ContentData, index) => (
          <>
            <ContentArea
              img={v.img}
              title={v.title}
              desciption={v.description}
              key={index}
            />
          </>
        ))}
        <Title title={t('header2')} hasLine />
        {hands.map((v: ContentData, index) => (
          <>
            <ContentArea
              img={v.img}
              title={v.title}
              desciption={v.description}
              key={index}
            />
          </>
        ))}
        <Title title={t('header3')} hasLine />
        {heart.map((v: ContentData, index) => (
          <>
            <ContentArea
              img={v.img}
              title={v.title}
              desciption={v.description}
              key={index}
            />
          </>
        ))}
      </ChildrenLayout>
    </div>
  )
}

export default Page

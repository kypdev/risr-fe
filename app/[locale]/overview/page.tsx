import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import TitleAndSub from '@/components/TitleAndSub'
import YoutubeContent from '@/components/YoutubeContent'
import { BannerUrl } from '@/constrant'
import { useTranslations } from 'next-intl'

export const metadata = {
  title: 'Overview'
}

const Page = () => {
  const t = useTranslations('Overview')
  const contentText = [
    {
      title: t('curriculum'),
      sub: t('curriculum-sub'),
    },
    {
      title: t('accreditation'),
      sub: t('accreditation-sub'),
    },
    {
      title: t('affiliations'),
      sub: t('affiliations-sub'),
    },
    {
      title: t('enrollment'),
      sub: t('enrollment-sub'),
    },
    {
      title: t('ages'),
      sub: t('ages-sub'),
    },
  ]

  const contentTextBottom = [
    {
      title: t('fees'),
      sub: t('fees-sub'),
    },
    {
      title: t('other-campuses'),
      sub: t('other-campuses-sub'),
    },
  ]
  return (
    <>
      <Banner img={BannerUrl.overview} title={t('title')} />
      <ChildrenLayout>
        <div className='flex flex-col'>
          <div className='flex flex-row'>
            <TitleAndSub title={t('established')} sub={t('established-sub')} />
            <TitleAndSub
              className='pl-[30vw]'
              title={t('established')}
              sub={t('established-sub')}
            />
          </div>
          <div className='flex flex-row'>
            <div className='flex flex-col'>
              <h1 className='text-[3vw] text-line '>{t('address')}</h1>
              <p className='text-sub text-[1.5vw] pt-[2vw]'>
                {t.rich('address-sub', {
                  br: () => <br />,
                })}
              </p>
            </div>
            <div className='flex flex-col pl-[5.5vw]'>
              <h1 className='text-[3vw] text-line '>{t('email')}</h1>
              <p className='text-line font-bold text-[1.5vw] pt-[2vw]'>
                {t.rich('email-sub1', {
                  b: (chunks) => <b>{chunks}</b>,
                })}
              </p>
              <p className='text-line font-bold text-[1.5vw] pt-[0.5vw]'>
                {t.rich('email-sub2', {
                  b: (chunks) => <b>{chunks}</b>,
                })}
              </p>
            </div>
          </div>
          <div className='flex flex-col pt-[3vw]'>
            <h1 className='text-[3vw] text-line '>{t('phone')}</h1>
            <p className='text-line font-bold text-[1.5vw] pt-[2vw]'>
              {t('phone-sub')}
            </p>
          </div>
        </div>

        <YoutubeContent>
          <iframe
            width='560'
            height='500'
            src='https://www.youtube.com/embed/6Z81ZZuJIEQ?si=w_aEo8WsJ0643DMF'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            className='py-8 w-full h-[100%]'
          ></iframe>
        </YoutubeContent>

        {contentText.map((v: any, index) => {
          return <TitleAndSub key={index} title={v.title} sub={v.sub} />
        })}

        <div className={`py-8`}>
          <h1 className='text-[3vw] text-line '>{t('ratio-teaching')}</h1>
          <p className='text-sub text-[1.5vw] pt-[2vw]'>
            &nbsp; &#x2022; {t('ratio-teaching-sub1')}
          </p>
          <p className='text-sub text-[1.5vw] pt-[2vw]'>
            &nbsp; &#x2022; {t('ratio-teaching-sub2')}
          </p>
          <p className='text-sub text-[1.5vw] pt-[2vw]'>
            &nbsp; &#x2022; {t('ratio-teaching-sub3')}
          </p>
        </div>

        {contentTextBottom.map((v: any, index) => {
          return <TitleAndSub title={v.title} sub={v.sub} key={index} />
        })}

        <YoutubeContent>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/7TAoaW1ohhM?si=y6gbPDm790Y1Mzrw'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            className='py-8 w-full h-[100%]'
          ></iframe>
        </YoutubeContent>
      </ChildrenLayout>
    </>
  )
}

export default Page

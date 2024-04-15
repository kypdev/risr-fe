import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import Title from '@/components/Title'
import { BannerUrl } from '@/constrant'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const Page = () => {
  const t = useTranslations('WorkAtRisr')
  const bulletList = ['sub3', 'sub4', 'sub5', 'sub6', 'sub7']
  const bulletList2 = ['sub14', 'sub15', 'sub16', 'sub17', 'sub18']
  return (
    <div className='bg-bg'>
      <Banner img={BannerUrl.workAtRisr} title={t('header')} />
      <ChildrenLayout>
        <Title title={t('title1')} hasLine />
        <p className='mt-[2vw]'>{t('sub1')}</p>
        <p>{t('sub2')}</p>
        {bulletList.map((v, index) => (
          <>
            <p key={index}>&nbsp; &#x2022; {t(v)}</p>
          </>
        ))}
        <p>{t('sub8')}</p>
        <p>{t('sub9')}</p>
        <Image
          src='/work-at-risr/img1.svg'
          width={578}
          height={385}
          alt={''}
          className='w-full mt-[2vw]'
        />
        <p className='mt-[2vw]'>{t('sub10')}</p>
        <p>{t('sub11')}</p>
        <div className='flex flex-row 2xl:mt-8'>
          <iframe
            src='https://drive.google.com/file/d/1PLfs1rrAd_HtZ3JopmpajbSt8lmXOx-q/preview'
            width='640'
            height='480'
            allow='autoplay'
          ></iframe>
          <div className='flex flex-col mt-[-2vw] ml-[1vw]'>
            <Title title={t('title2')} className=' text-[3vw]' />
            <p>
              {t.rich('sub12', {
                br: () => <br />,
              })}
            </p>
            <p className='2xl:mt-8'>{t('sub13')}</p>
            {bulletList2.map((v, index) => (
              <>
                <p key={index}>{t(v)}</p>
              </>
            ))}
            <p>{t('sub19')}</p>
          </div>
        </div>
        <Title title={t('title3')} hasLine />
      </ChildrenLayout>
    </div>
  )
}

export default Page

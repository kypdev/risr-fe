import Image from 'next/image'
import { Button } from './ui/button'
import { useTranslations } from 'next-intl'

const RecentNewss = () => {
  const t = useTranslations('Home')
  return (
    <div className='py-[2vw]'>
      <Image
        className='flex flex-row w-full py-8 pointer-events-none'
        src='/recent-news.svg'
        width={1198}
        height={249}
        alt=''
      />
      <div className='flex flex-row justify-center'>
        <Button variant='transblue' className='2xl:text-[1vw] px-[6vw] py-[1.5vw]'>{t('view-all-news')}</Button>
      </div>
    </div>
  )
}

export default RecentNewss

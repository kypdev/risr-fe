import Image from 'next/image'

const RecentNews = () => {
  return (
    <>
      <Image
        className='flex flex-row w-full py-8 pointer-events-none'
        src='/recent-news.svg'
        width={1198}
        height={249}
        alt=''
      />
    </>
  )
}

export default RecentNews

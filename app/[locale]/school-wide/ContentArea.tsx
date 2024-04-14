import { useTranslations } from 'next-intl'
import Image from 'next/image'

type ContentAreaProps = {
  img: string
  title: string
  desciption: string
}

const ContentArea = ({ img, title, desciption }: ContentAreaProps) => {
  const t = useTranslations('SchoolWide')
  return (
    <div className='flex flex-row mb-[2vw]'>
      <Image
        src={img}
        width={177}
        height={177}
        alt={''}
        className='w-[10vw] mt-[2vw]'
      />
      <div className="flex flex-col ml-[2vw] mt-[2vw]">
        <h1 className='text-[3vw] text-line mt-[1vw]'>{t(title)}</h1>
        <p>{
          t.rich(desciption, {
            br: () => <br />
          })
          }</p>
      </div>
    </div>
  )
}

export default ContentArea

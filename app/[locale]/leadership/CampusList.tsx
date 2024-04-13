import { useTranslations } from 'next-intl'
import React from 'react'
import Image from 'next/image'

type CampusListProps = {
  sub1: string
  img: string
  campus: {}[]
}

const CampusList = ({ sub1, img, campus }: CampusListProps) => {
  const t = useTranslations()
  return (
    <div className='flex flex-row pt-[2vw]'>
      <div className='flex flex-col'>
        <p className='pr-[2vw]'>
          {t.rich(sub1, {
            br: () => <br />,
          })}
        </p>
        {campus.map((v: any, index: any) => (
          <div key={index} className='pt-[2vw] flex flex-row items-center'>
            <Image src='/leadership/hat.svg' width={56} height={56} alt={''} className='' />
            <div className='pl-[1vw]'>
              <p className='font-bold' key={index}>{v.title}</p>
              <p className='text-[#2E2E2E] font-[300]' key={index}>{v.sub}</p>
            </div>
          </div>
        ))}
      </div>
      <Image src={img} width={460} height={613} alt={''} className='h-[30vw]' />
    </div>
  )
}

export default CampusList

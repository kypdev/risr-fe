import { useTranslations } from 'next-intl'
import React from 'react'

type DetailListProps = {
  id?: number
  title: string
  detail: string[]
}

const DetailList = ({ id, title, detail }: DetailListProps) => {
  const t = useTranslations('Footer')
  return (
    <div className='flex flex-col'>
      <h1 className='text-[2rem]'>{t(title)}</h1>
      {detail.map((v, i) => (
        <p key={i} className='py-4 text-[1.5rem]'>{t(v)}</p>
      ))}
    </div>
  )
}

export default DetailList

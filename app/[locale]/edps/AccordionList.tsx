'use client'
import { useTranslations } from 'next-intl'
import Data from './data.json'
import React, { useEffect } from 'react'
import AccordionEdps from '@/components/AccordionEdps'

const AccordionList = () => {
  const t = useTranslations('Extended')
  useEffect(() => {
    console.log('accordion arr', Data)
  }, [])
  return (
    <div>
      {Data.map((v, i) => (
        <AccordionEdps
          key={i}
          title={v.title}
          subTitle={v.subTitle}
          description={v.desc} detail={v.detail}        />
      ))}
    </div>
  )
}

export default AccordionList

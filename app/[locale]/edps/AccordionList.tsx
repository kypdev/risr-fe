'use client'

import AccordionEdps from '@/components/AccordionEdps'
import { useTranslations } from 'next-intl'
import Data from './data.json'

const AccordionList = () => {
  const t = useTranslations('Extended')

  return (
    <div>
      {Data.map((v, i) => (
        <AccordionEdps
          key={i}
          title={t(v.title)}
          subTitle={t(v.subTitle)}
          description={t.rich(v.desc, {
            br: () => <br />,
            b: (c) => <b className='text-line'>{c}</b>,
            span: (c) => <span className='text-black sub-font'>{c}</span>
          })}
          detail={v.detail}
        />
      ))}
    </div>
  )
}

export default AccordionList

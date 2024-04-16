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
          subTitle={t.rich(v.subTitle, {
            br: () => <br />,
          })}
          detail={v.detail}
          desc={t.rich(v.desc, {
            br: () => <br />,
          })}
        />
      ))}
    </div>
  )
}

export default AccordionList

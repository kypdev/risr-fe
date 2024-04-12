import { useTranslations } from 'next-intl'
import React, { useTransition } from 'react'

type SubRichTextNextLineProps = {
  langKey: string
}

const SubRichTextNextLine = ({ langKey }: SubRichTextNextLineProps) => {
  const t = useTranslations()
  return (
    <p className='sub-font 2xl:py-[2vw]'>
      {t.rich(langKey, {
        br: () => <br />,
      })}
    </p>
  )
}

export default SubRichTextNextLine

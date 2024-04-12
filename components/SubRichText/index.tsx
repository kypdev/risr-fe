import { useTranslations } from 'next-intl'
import Link from 'next/link'

type SubRichTextProps = {
  text: string
  suffixTextLink?: string
  suffixLinkUrl?: string
  isSuffixLink?: boolean
  langKey: string
}

const SubRichText = ({
  text,
  suffixTextLink,
  suffixLinkUrl,
  isSuffixLink
}: SubRichTextProps) => {
  const t = useTranslations()
  return (
    <>
      <p className='sub-font 2xl:pt-[2vw] 2xl:text-[1vw] 2xl:pb-[3vw]'>
        {text}
      </p>
    </>
  )
}

export default SubRichText

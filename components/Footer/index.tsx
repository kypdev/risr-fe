'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

const Footer = () => {
  const t = useTranslations('Footer')
  return (
    <>
      <Image
        className='flex flex-row w-full'
        src={'/footer/Copyright.svg'}
        width={1440}
        height={562}
        alt={''}
      />
    </>
  )
}

export default Footer

'use client'
import { faFacebookF, faInstagram, faLinkedin, faLine, faYoutube } from "@fortawesome/free-brands-svg-icons"
import FooterIcon from './FooterIcon'
import { useTranslations } from 'next-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  const t = useTranslations('Footer')
  return (
    <>
      <div className='bg-footer-texture bg-no-repeat bg-cover bg-top-center h-full'>
        <div className='flex flex-row gap-5 justify-center '>
          <FooterIcon icon={faFacebookF} />
          <FooterIcon icon={faInstagram} />
          <FooterIcon icon={faLinkedin} />
          <FooterIcon icon={faLine} />
          <FooterIcon icon={faYoutube} />
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col px-20">
            <p className='text-white text-3xl'>{t.rich("school-name", {
              br: () => <br />,
            })}</p>
            {/* <FontAwesomeIcon icon={}/> */}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center bg-[#1C355E]">
        <p className='text-white'>&copy;{t('copyright')}</p>
      </div>
    </>
  )
}

export default Footer
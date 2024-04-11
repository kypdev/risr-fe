'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import NavbarStyles from './Navbar.module.css'
import { NavbarLink } from '@/constrant'

const Navbar = () => {
  const t = useTranslations('Navbar')
  return (
    <nav className='bg-secondary flex flex-row relative'>
      <div className='flex flex-row pl-20 h-32'>
      </div>
      <div className='absolute flex flex-row justify-center w-full px-20 sm:hidden xl:flex'>
        <div className="flex flex-col">
          <div className='flex flex-row'>
            <Link href={NavbarLink.apply} className={NavbarStyles.menu}>{t('apply')}</Link>
            <Link href={NavbarLink.bookATour} target='_blank' className={NavbarStyles.menu}>{t('book-tour')}</Link>
            <Link className={NavbarStyles.menu} href={'/en/school-map'}>{t('school-map')}</Link>
            <p className={`${NavbarStyles.menu}`}>{t('contact-us')}</p>
          </div>
          <div className='flex flex-row justify-center'>
            <Link href='#' className={NavbarStyles.menu}>ADMISSIONS</Link>
            <Link href='#' className={NavbarStyles.menu}>ABOUT RISR</Link>
            <Link className={NavbarStyles.menu} href={'/en/school-map'}>ACADEMICS</Link>
          </div>
        </div>
        <Link href='/'><Image src='/nav.png' width={148} height={200} alt={''} /></Link>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <p className={`${NavbarStyles.menu} pl-4`}>{t('news')}</p>
            <p className={NavbarStyles.menu}>{t('school-calendar')}</p>
            <p className={NavbarStyles.menu}>{t('work-risr')}</p>
            <p className={NavbarStyles.menu}>{t('portals')}</p>
          </div>
          <div className="flex flex-row justify-center">
            <p className={`${NavbarStyles.menu} pl-4`}>STUDENT LIFE</p>
            <p className={NavbarStyles.menu}>COMMUNITY</p>
            <p className={NavbarStyles.menu}>LINKS</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-end pr-20 right-0 absolute'>
        {/* <div className='flex flex-row justify-center'>
          <p className={NavbarStyles.menu}>{t('portals')}</p>
          <svg className="w-2.5 pt-5 text-white  ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
        </div> */}
        {/* <DropdownMenuDemo /> */}
        {/* <DropdownHoverText name={''} href={''} /> */}
      </div>

    </nav>
  )
}

export default Navbar
'use client'

import { NavbarLink } from '@/constrant'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import NavbarStyles from './Navbar.module.css'

const Navbar = () => {
  const t = useTranslations('Navbar')
  return (
    <nav className='bg-secondary flex flex-row relative'>
      <div className='flex flex-row pl-20 h-32'></div>
      <div className='absolute flex flex-row justify-center w-full px-20 sm:hidden xl:flex'>
        <div className='flex flex-col w-full 2xl:pr-[1vw]'>
          <div className='flex flex-row justify-between sub-font'>
            <Link
              href={NavbarLink.apply}
              className={`${NavbarStyles.menu} hover:underline hover:underline-offset-8 decoration-[#6badda]`}
            >
              {t('apply')}
            </Link>
            <Link
              href={NavbarLink.bookATour}
              target='_blank'
              className={`${NavbarStyles.menu} hover:underline hover:underline-offset-8 decoration-[#6badda]`}
            >
              {t('book-tour')}
            </Link>
            <Link
              className={`${NavbarStyles.menu} hover:underline hover:underline-offset-8 decoration-[#6badda]`}
              href={NavbarLink.schoolMap}
            >
              {t('school-map')}
            </Link>
            <Link
              href={NavbarLink.contact}
              className={`${NavbarStyles.menu} hover:underline hover:underline-offset-8 decoration-[#6badda]`}
            >
              {t('contact-us')}
            </Link>
          </div>
          <div className='flex flex-row justify-between font-bebas px-[2vw] text-[100px]'>
            <Link
              href='#'
              className={`${NavbarStyles.menu} text-xl`}
              style={{ fontSize: '2vw' }}
            >
              ADMISSIONS
            </Link>
            <Link
              href='#'
              className={NavbarStyles.menu}
              style={{ fontSize: '2vw' }}
            >
              ABOUT RISR
            </Link>
            <Link
              className={NavbarStyles.menu}
              style={{ fontSize: '2vw' }}
              href={'/en/school-map'}
            >
              ACADEMICS
            </Link>
          </div>
        </div>
        <Link href='/'>
          <Image
            src='/nav.png'
            width={148}
            height={200}
            className='w-[18vw]'
            alt={''}
          />
        </Link>
        <div className='flex flex-col w-full 2xl:pl-[2vw]'>
          <div className='flex flex-row justify-between sub-font'>
            <Link
              href={NavbarLink.news}
              className={`${NavbarStyles.menu} pl-4 hover:underline hover:underline-offset-8 decoration-[#6badda]`}
            >
              {t('news')}
            </Link>
            <Link
              href={NavbarLink.schoolCalendar}
              className={`${NavbarStyles.menu} hover:underline hover:underline-offset-8 decoration-[#6badda]`}
            >
              {t('school-calendar')}
            </Link>
            <Link
              href={NavbarLink.workAtRisr}
              className={`${NavbarStyles.menu} hover:underline hover:underline-offset-8 decoration-[#6badda]`}
            >
              {t('work-risr')}
            </Link>
            <p
              className={`${NavbarStyles.menu} hover:underline hover:underline-offset-8 decoration-[#6badda]`}
            >
              {t('portals')}
            </p>
            <p>Portals</p>
          </div>
          <div className='flex flex-row justify-between font-bebas px-[2vw]'>
            <Link
              href='#'
              className={`${NavbarStyles.menu} pl-4`}
              style={{ fontSize: '2vw' }}
            >
              STUDENT LIFE
            </Link>
            <Link
              href='#'
              className={NavbarStyles.menu}
              style={{ fontSize: '2vw' }}
            >
              COMMUNITY
            </Link>
            <Link
              href='#'
              className={NavbarStyles.menu}
              style={{ fontSize: '2vw' }}
            >
              LINKS
            </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-end pr-20 right-0 absolute'></div>
    </nav>
  )
}

export default Navbar

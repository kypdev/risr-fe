'use client'
import React from 'react'
import NavbarStyles from './Navbar.module.css'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuPortal, DropdownMenuSubContent } from '@radix-ui/react-dropdown-menu';
import { Button } from '../ui/button';
import { DropdownMenuShortcut } from '../ui/dropdown-menu';
import { DropdownMenuDemo } from './DropdownDemo';

const Navbar = () => {
  const t = useTranslations('Navbar');
  return (
    <nav className='bg-secondary flex flex-row relative'>
      <div className='flex flex-row pl-20'>
        <p className={NavbarStyles.menu}>{t('apply')}</p>
        <p className={NavbarStyles.menu}>{t('book-tour')}</p>
        <p className={NavbarStyles.menu}>{t('school-map')}</p>
        <p className={NavbarStyles.menu}>{t('contact-us')}</p>
      </div>
      <div className='absolute flex flex-row justify-center w-full'>
        <Image src='/nav.png' width={148} height={200} alt={''} />
      </div>
      <div className='flex flex-row justify-end pr-20 right-0 absolute'>
        <p className={NavbarStyles.menu}>{t('news')}</p>
        <p className={NavbarStyles.menu}>{t('school-calendar')}</p>
        <p className={NavbarStyles.menu}>{t('work-risr')}</p>
        <div className='flex flex-row justify-center'>
          <p className={NavbarStyles.menu}>{t('portals')}</p>
          <svg className="w-2.5 pt-5 text-white  ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
        </div>
        {/* <DropdownMenuDemo /> */}
      </div>

    </nav>
  )
}

export default Navbar
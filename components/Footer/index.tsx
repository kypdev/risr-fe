'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ChildrenLayout from '../ChildrenLayout'
import RecentNews from '../RecentNews'
import { FaFacebookF } from 'react-icons/fa6'
import { BsInstagram } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'
import { FaLine } from 'react-icons/fa6'
import { BsYoutube } from 'react-icons/bs'
import BgSocialIcon from './BgSocialIcon'
import PhoneIcon from './PhoneIcon'
import AddressIcon from './AddressIcon'
import DetailList from './DetailList'

const recentNewsData = [
  {
    image: '/recent-news/1.png',
    date: 'THU 11 JAN',
    description: 'Low Strung Cellobration',
  },
  {
    image: '/recent-news/2.png',
    date: 'WED 20 DEC',
    description: '2023 Winter & Chrismas Concerts',
  },
  {
    image: '/recent-news/3.png',
    date: 'SUN 10 DEC',
    description: 'Low Strung Cellobration',
  },
  {
    image: '/recent-news/4.png',
    date: 'WED 20 DEC',
    description: '2023 Winter & Chrismas Concerts',
  },
  {
    image: '/recent-news/5.png',
    date: 'SUN 10 DEC',
    description: 'Low Strung Cellobration',
  },
]

const admissions = ['tuition', 'apply', 'book', 'scholarships']
const aboutRisr = [
  'overview',
  'history',
  'vision',
  'curriculum',
  'facilities',
  'leadership',
]
const academics = [
  'pre-kindergarten',
  'elementary-school',
  'middle-school',
  'high-school',
]
const community = [
  'ris-minburi',
  'ris-early',
  'ris-phuket',
  'work',
  'personal-data-policy',
]

const footerRight = [
  {
    id: 1,
    title: 'admissions',
    detail: admissions,
  },
  {
    id: 2,
    title: 'about',
    detail: aboutRisr,
  },
  {
    id: 3,
    title: 'academics',
    detail: academics,
  },
  {
    id: 4,
    title: 'community',
    detail: community,
  },
]

const Footer = () => {
  const t = useTranslations('Footer')
  return (
    <div className='bg-bg'>
      <ChildrenLayout>
        <RecentNews data={recentNewsData} />
      </ChildrenLayout>
      <div className="relative bg-[url('/footer/footer-bg.png')] bg-no-repeat w-full flex flex-col bg-cover mt-[10vw] justify-center items-center">
        {/* div social icons */}
        <div className='flex justify-center items-center gap-9 absolute top-[-3vw]'>
          <BgSocialIcon>
            <FaFacebookF size={30} color='#416BA9' />
          </BgSocialIcon>
          <BgSocialIcon>
            <BsInstagram size={30} color='#416BA9' />
          </BgSocialIcon>
          <BgSocialIcon>
            <ImLinkedin size={30} color='#416BA9' />
          </BgSocialIcon>
          <BgSocialIcon>
            <FaLine size={30} color='#416BA9' />
          </BgSocialIcon>
          <BgSocialIcon>
            <BsYoutube size={30} color='#416BA9' />
          </BgSocialIcon>
        </div>
        <div className='flex flex-row text-white justify-center my-24'>
          <div className='flex flex-col'>
            <div className='flex flex-col'>
              <h1 className='text-[2rem]'>Ruamrudee International school</h1>
              <h1 className='text-[2rem]'>RATCHAPRUEK CAMPUS</h1>
            </div>
            <div className='flex flex-col'>
              <div className='flex flex-row mt-8'>
                <PhoneIcon size={24} />
                <p className='ml-4 text-[1.5rem]'>+66 (0)2 030 0533</p>
              </div>
              <div className='flex flex-row mt-8'>
                <AddressIcon size={24} />
                <p className='ml-4 text-[1.5rem]'>
                  {t.rich('address', {
                    br: () => <br />,
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className='bg-line border-2 border-solid mx-16'></div>
          {/* footer right */}
          <div className='flex flex-row gap-20'>
            {
              footerRight.map(v => (
                <DetailList key={v.id} title={v.title} detail={v.detail} />
              ))
            }
          </div>
        </div>
      </div>
      <div className='w-full bg-[#1C355E] flex justify-center'>
        <p className='text-white py-4'>
          &copy; 2024 Ruamrudee International School Ratchapruek campus{' '}
        </p>
      </div>
    </div>
  )
}

export default Footer

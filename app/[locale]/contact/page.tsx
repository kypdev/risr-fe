import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import Title from '@/components/Title'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { BannerUrl } from '@/constrant'
import { useTranslations } from 'next-intl'
import React, { Children } from 'react'

export const metadata = {
  title: 'Contact us'
}

const Page = () => {
  const t = useTranslations('Contact')
  return (
    <div className='bg-bg'>
      <Banner img={BannerUrl.contact} title={t('header')} isContact />
      <ChildrenLayout>
        <Title title={'address'} hasLine />
        <div className='grid-2 flex flex-row mt-[2vw]'>
          <p className='columns-1 pr-[16vw]'>
            {t.rich('address-sub1', {
              br: () => <br />,
            })}
          </p>
          <p className='columns-1'>
            {t.rich('address-sub2', {
              br: () => <br />,
            })}
          </p>
        </div>
        <Title title={'phone'} className='text-[3vw]' />
        <p>
          {t.rich('phone-sub', {
            b: (c) => <b className='text-line'>{c}</b>,
          })}
        </p>
        <Title title='' hasLine className='mt-[-1vw]' />
        <div className='flex flex-row mt-[2vw] mb-[0.5vw]'>
          <p>{t('name')}</p>
          <p className='text-[#D1252B]'>&nbsp;*</p>
        </div>
        <Input />
        <div className='flex flex-row mt-[2vw] mb-[0.5vw]'>
          <p>{t('email')}</p>
          <p className='text-[#D1252B]'>&nbsp;*</p>
        </div>
        <Input />
        <div className='flex flex-row mt-[2vw] mb-[0.5vw]'>
          <p>{t('telephone')}</p>
        </div>
        <Input />
        <div className='flex flex-row mt-[2vw] mb-[0.5vw]'>
          <p>{t('subject')}</p>
          <p className='text-[#D1252B]'>&nbsp;*</p>
        </div>
        <Select>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Select a subject' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {/* <SelectLabel>{t('select1')}</SelectLabel> */}
              <SelectItem value='apple'>{t('select1')}</SelectItem>
              <SelectItem value='banana'>{t('select2')}</SelectItem>
              <SelectItem value='blueberry'>{t('select3')}</SelectItem>
              <SelectItem value='grapes'>{t('select4')}</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className='flex flex-row mt-[2vw] mb-[0.5vw]'>
          <p>{t('comment')}</p>
          <p className='text-[#D1252B]'>&nbsp;*</p>
        </div>
        <Textarea className='h-[10vw]' />
        <Button variant='transblue' className='text-[#416BA9] mt-[2vw]'>{t('submit')}</Button>
      </ChildrenLayout>
    </div>
  )
}

export default Page

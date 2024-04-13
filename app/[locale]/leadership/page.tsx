import Banner from '@/components/Banner'
import ChildrenLayout from '@/components/ChildrenLayout'
import Title from '@/components/Title'
import { BannerUrl } from '@/constrant'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import CampusList from './CampusList'

const Page = () => {
  const t = useTranslations('Leadership')
  const campus1 = [
    {
      title: t('title-camp1'),
      sub: t('sub-camp1'),
    },
    {
      title: t('title-camp2'),
      sub: t('sub-camp2'),
    },
    {
      title: t('title-camp3'),
      sub: t('sub-camp3'),
    },
    {
      title: t('title-camp4'),
      sub: t('sub-camp4'),
    },
    {
      title: t('title-camp5'),
      sub: t('sub-camp5'),
    },
    {
      title: t('title-camp6'),
      sub: t('sub-camp6'),
    },
    {
      title: t('title-camp7'),
      sub: t('sub-camp7'),
    },
    {
      title: t('title-camp8'),
      sub: t('sub-camp8'),
    },
  ]
  const campus2 = [
    {
      title: t('title-camp9'),
      sub: t('sub-camp9'),
    },
    {
      title: t('title-camp10'),
      sub: t('sub-camp10'),
    },
    {
      title: t('title-camp11'),
      sub: t('sub-camp11'),
    },
    {
      title: t('title-camp12'),
      sub: t('sub-camp12'),
    },
  ]
  const campus3 = [
    {
      title: t('title-camp13'),
      sub: t('sub-camp13'),
    },
    {
      title: t('title-camp14'),
      sub: t('sub-camp14'),
    },
    {
      title: t('title-camp15'),
      sub: t('sub-camp15'),
    },
    {
      title: t('title-camp16'),
      sub: t('sub-camp16'),
    },
    {
      title: t('title-camp17'),
      sub: t('sub-camp17'),
    },
  ]
  return (
    <>
      <Banner img={BannerUrl.leadership} title={t('title')} />
      <ChildrenLayout>
        <Title title={t('title1')} hasLine={true} />
        <CampusList sub1={t('sub1')} img='/leadership/img1.png' campus={campus1}  />
        <Title title={t('title2')} hasLine={true} />
        <CampusList sub1={t('sub2')} img='/leadership/img2.png' campus={campus2}  />
        <Title title={t('title3')} hasLine={true} />
        <CampusList sub1={t('sub3')} img='/leadership/img3.png' campus={campus3}  />
      </ChildrenLayout>
    </>
  )
}

export default Page

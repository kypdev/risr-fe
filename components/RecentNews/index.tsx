'use client'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Slider from 'react-slick'
import { Card } from '../ui/card'
import Title from '../Title'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

const NextArrow = () => <></>
const PreviousArrow = () => <></>

interface IRecentNews {
  image: string
  date: string
  description: string
}

type RecentNewsProps = {
  data: IRecentNews[]
}

const RecentNews = ({ data }: RecentNewsProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  }
  return (
    <div>
      <Title title='RECENT NEWS' hasLine />
      <Slider {...settings} className='mt-8'>
        {data.map((v, i) => (
          <div key={i} className='w-[4vw] h-[20vw] px-3'>
            <Card className='relative rounded-2xl'>
              <div className='w-full h-[15vw] object-cover flex flex-col'>
                <Image
                  src={v.image}
                  width={220}
                  height={124}
                  alt={''}
                  className='object-cover w-full h-[124px] rounded-t-2xl'
                />
                <div className='h-[5vw] mt-20 flex justify-center'>
                  <p className='font-bold text-[1.3rem] text-center'>
                    {v.description}
                  </p>
                </div>
              </div>
              <div className='h-[5vw] flex justify-start items-end pl-[1.8vw] pb-[1vw]'>
                <Link href={''} className='text-title font-bold'>
                  {'Read more >'}
                </Link>
              </div>
              <div className='w-[4vw] h-[4vw] bg-[#416BA9] absolute rounded-full border-white border-5 top-[5vw] left-[1.7vw] border-4 flex justify-center items-center text-center'>
                <p className='text-white font-bebas'>{v.date}</p>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
      <div className='flex flex-row justify-center'>
        <Button variant='transblue' className='2xl:text-[1vw] px-[6vw] py-[1.5vw] mt-16'>View all news</Button>
      </div>
    </div>
  )
}

export default RecentNews

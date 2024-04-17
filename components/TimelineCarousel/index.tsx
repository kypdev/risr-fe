'use client'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Slider from 'react-slick'
import Image from 'next/image'
import { Card } from '../ui/card'

const NextArrow = () => <></>
const PreviousArrow = () => <></>

type IData = {
  id: string
  no: string
  desc: string
  year: string
  img: string
}

type TimelineCarouselProps = {
  data: any[]
}

const TimelineCarousel = ({ data }: TimelineCarouselProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  }
  return (
    <div>
      <Slider {...settings}>
        {data.map((v: any) => (
          <div key={v.id} className='w-[15vw] h-[33vw] rounded-xl px-4'>
            <Card key={v.id} className='rounded-lg'>
              <div
                className={`${
                  v.id == 1 ? 'bg-line text-white' : 'bg-white text-line'
                } rounded-t-lg h-[20vw]`}
              >
                <div className='h-[11vw]'>
                  <h1 className='flex flex-row justify-center text-[2.5rem] pt-16'>
                    {v.no}
                  </h1>
                  <p className='px-4 flex flex-row text-center'>{v.desc}</p>
                </div>
                <div className='mt-24 flex flex-col justify-center items-center pb-8'>
                  <hr
                    className={`border-2 border-solid ${
                      v.id == 1 ? 'border-white' : 'border-line'
                    } w-[3vw]`}
                  />
                  <p>{v.year}</p>
                </div>
              </div>
              <Image
                src={v.img}
                width={288}
                height={159}
                alt={''}
                className='w-[18.9vw] object-cover'
              />
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default TimelineCarousel

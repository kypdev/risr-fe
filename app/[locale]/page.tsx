'use client'
import RecentNews from '@/components/RecentNews'
import Image from "next/image"
import styles from './style.module.css'
import { data } from './mockData'


const AnyReactComponent = ({ text }: any) => <div>{text}</div>

export default function Home() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  }
  return (
    <div className='bg-grey'>
      <video
        src={require("../../public/home.mp4")}
        autoPlay
        muted
        loop
        width="1903"
        height="467"
        className={styles.video}
      />
      <div className='bg-[#E5E9EF]'>
        <Image src='/home/bg.svg' className='w-full pointer-events-none absolute' width={1440} height={467} alt={''} />
        <main className='flex flex-col mx-40 sm:mx-0 lg:mx-40'>
          <Image src='/home/img1.svg' className='w-full pointer-events-none z-10 pt-16' width={1440} height={467} alt={''} />
          <Image src='/home/img5.svg' className='w-full pointer-events-none z-10 pt-16' width={1440} height={467} alt={''} />
          <Image src='/home/img3.svg' className='w-full py-4 pointer-events-none z-10 pt-32' width={1440} height={467} alt={''} />
          <Image src='/home/img6.svg' className='w-full py-4 pointer-events-none z-10 pt-32' width={1440} height={467} alt={''} />
          <Image src='/home/img7.svg' className='w-full py-4 pointer-events-none z-10 pt-32 pb-32' width={1440} height={467} alt={''} />
          <div className='relative flex items-center'>
            <div
              id='slider'
              className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
            >
              {data.map((item) => (
                <img
                  className='w-[688px] h-[852px] inline-block p-0 cursor-pointer hover:scale-105 ease-in-out duration-300'
                  src={item.img}
                  alt='/'
                />
              ))}
            </div>
          </div>
          <Image src='/home/img4.svg' className='w-full py-4 pointer-events-none z-10' width={1440} height={467} alt={''} />
          <p className='flex flex-row text-5xl text-[#1C355E] my-10 w-1'>RECENT&nbsp;NEWS</p>
          <hr className={`${styles.solidHr}`} />
          <RecentNews />
        </main>
      </div>
    </div>
  )
}

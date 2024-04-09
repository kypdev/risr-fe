'use client'
import RecentNews from '@/components/RecentNews'
import Image from "next/image"
import styles from './style.module.css'


const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export default function Home() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <>
      <Image src='/school-map/banner.png' className='w-full' width={1440} height={467} alt={''} />
      <div className='flex flex-col mx-40 sm:mx-0 lg:mx-40'>
        <Image src='/home/img1.svg' className='w-full pointer-events-none' width={1440} height={467} alt={''} />
        <Image src='/home/img2.svg' className='w-full pointer-events-none' width={1440} height={467} alt={''} />
        <Image src='/home/img3.svg' className='w-full py-4 pointer-events-none' width={1440} height={467} alt={''} />
        {/* <Image src='/home/img4.svg' className='flex flex-row justify-center items-center  py-4 w-60' width={1200} height={48} alt={''} /> */}
        <Image src='/home/img4.svg' className='w-full py-4 pointer-events-none' width={1440} height={467} alt={''} />



        <p className='flex flex-row text-5xl text-[#1C355E] my-10 w-1'>RECENT&nbsp;NEWS</p>
        <hr className={`${styles.solidHr}`} />
        <RecentNews />
        </div>
    </>
  )
}

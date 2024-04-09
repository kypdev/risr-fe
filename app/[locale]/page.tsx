'use client'
import DropdownHoverText from '@/components/DropdownHoverText'
import Image from "next/image"
import GoogleMapReact from 'google-map-react';
import Link from 'next/link'


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
      <Link href='/'>Home</Link>
      <Link href='/en/school-map'>map</Link>
    </>
  )
}

import RecentNews from '@/components/RecentNews'
import React from 'react'
import styles from './style.module.css'

const page = () => {
  return (
    <>
    <p className='flex flex-row text-5xl text-[#1C355E] my-10 w-1'>RECENT&nbsp;NEWS</p>
        <hr className={`${styles.solidHr}`} />
      <RecentNews />
    </>
  )
}

export default page
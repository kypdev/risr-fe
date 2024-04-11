'use client'
import RecentNews from '@/components/RecentNews'
import Image from "next/image"
import styles from './style.module.css'
import { data } from './mockData'

export default function Home() {
  return (
    <div className='bg-grey'>
      <video
        src={require("../../public/home/home2.mp4")}
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
                  key={item.id}
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
      {/* <div className='h-20'> */}
        <ul className="results">
          <li className="result">
            <a href="#"><img src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;h=500&amp;ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY2MjEyMDE3MQ&amp;ixlib=rb-1.2.1&amp;q=80&amp;utm_campaign=api-credit&amp;utm_medium=referral&amp;utm_source=unsplash_source&amp;w=500" width="500" height="500" alt="" /></a>
          </li>
          <li className="result">
            <a href="#"><img src="https://images.unsplash.com/photo-1551978429-3dbfed5cacc9?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;h=500&amp;ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY2MjEyMDE3NA&amp;ixlib=rb-1.2.1&amp;q=80&amp;utm_campaign=api-credit&amp;utm_medium=referral&amp;utm_source=unsplash_source&amp;w=500" width="500" height="500" alt="" /></a>
          </li>
          <li className="result">
            <a href="#"><img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;h=500&amp;ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY2MjEyMDE3Nw&amp;ixlib=rb-1.2.1&amp;q=80&amp;utm_campaign=api-credit&amp;utm_medium=referral&amp;utm_source=unsplash_source&amp;w=500" width="500" height="500" alt="" /></a>
          </li>
          <li className="result">
            <a href="#"><img src="https://images.unsplash.com/photo-1523437237164-d442d57cc3c9?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;h=500&amp;ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY2MjEyMDE3OA&amp;ixlib=rb-1.2.1&amp;q=80&amp;utm_campaign=api-credit&amp;utm_medium=referral&amp;utm_source=unsplash_source&amp;w=500" width="500" height="500" alt="" /></a>
          </li>
          <li className="result">
            <a href="#"><img src="https://images.unsplash.com/photo-1494625927555-6ec4433b1571?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;h=500&amp;ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY2MjEyMDE4MA&amp;ixlib=rb-1.2.1&amp;q=80&amp;utm_campaign=api-credit&amp;utm_medium=referral&amp;utm_source=unsplash_source&amp;w=500" width="500" height="500" alt="" /></a>
          </li>
          <li className="result">
            <a href="#"><img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;h=500&amp;ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY2MjEyMDE4Mw&amp;ixlib=rb-1.2.1&amp;q=80&amp;utm_campaign=api-credit&amp;utm_medium=referral&amp;utm_source=unsplash_source&amp;w=500" width="500" height="500" alt="" /></a>
          </li>
          <li className="result">
            <a href="#"><img src="https://images.unsplash.com/photo-1600240644455-3edc55c375fe?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;h=500&amp;ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY2MjEyMDE4NQ&amp;ixlib=rb-1.2.1&amp;q=80&amp;utm_campaign=api-credit&amp;utm_medium=referral&amp;utm_source=unsplash_source&amp;w=500" width="500" height="500" alt="" /></a>
          </li>
          <li className="result">
            <a href="#"><img src="https://images.unsplash.com/photo-1435732960391-11053ee5e6b6?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;h=500&amp;ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY2MjEyMDE4OQ&amp;ixlib=rb-1.2.1&amp;q=80&amp;utm_campaign=api-credit&amp;utm_medium=referral&amp;utm_source=unsplash_source&amp;w=500" width="500" height="500" alt="" /></a>
          </li>
          <li className="result">
            <a href="#"><img src="https://images.unsplash.com/photo-1518717202715-9fa9d099f58a?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;h=500&amp;ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY2MjEyMDE5MQ&amp;ixlib=rb-1.2.1&amp;q=80&amp;utm_campaign=api-credit&amp;utm_medium=referral&amp;utm_source=unsplash_source&amp;w=500" width="500" height="500" alt="" /></a>
          </li>
          <li className="result">
            <a href="#"><img src="https://images.unsplash.com/photo-1484318571209-661cf29a69c3?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;h=500&amp;ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY2MjEyMDE5NA&amp;ixlib=rb-1.2.1&amp;q=80&amp;utm_campaign=api-credit&amp;utm_medium=referral&amp;utm_source=unsplash_source&amp;w=500" width="500" height="500" alt="" /></a>
          </li>
          <li className="result">
            <a href="#"><img src="https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;h=500&amp;ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY2MjEyMDE5Ng&amp;ixlib=rb-1.2.1&amp;q=80&amp;utm_campaign=api-credit&amp;utm_medium=referral&amp;utm_source=unsplash_source&amp;w=500" width="500" height="500" alt="" /></a>
          </li>
          <li className="result">
            <a href="#"><img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;h=500&amp;ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY2MjEyMDE5OQ&amp;ixlib=rb-1.2.1&amp;q=80&amp;utm_campaign=api-credit&amp;utm_medium=referral&amp;utm_source=unsplash_source&amp;w=500" width="500" height="500" alt="" /></a>
          </li>
        </ul>
      {/* </div> */}
    </div>
  )
}

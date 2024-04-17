import ChildrenLayout from '@/components/ChildrenLayout'
import Link from 'next/link'
import React from 'react'

const ebookLists = [
  {
    title: 'March to April 2024',
    link: 'https://www.canva.com/design/DAF82Z-wiUU/-sFjqa6gt0BgXsGtrKWwGg/view?utm_content=DAF82Z-wiUU&utm_campaign=designshare&utm_medium=link&utm_source=viewer',
  },
  {
    title: 'January to February 2024',
    link: 'https://www.canva.com/design/DAF82Z-wiUU/-sFjqa6gt0BgXsGtrKWwGg/view?utm_content=DAF82Z-wiUU&utm_campaign=designshare&utm_medium=link&utm_source=viewer',
  },
  {
    title: 'November to December 2023',
    link: 'https://www.canva.com/design/DAFzEh78JkI/zUKTuL8fkDBXXGPr8vlzxg/view?utm_content=DAFzEh78JkI&utm_campaign=designshare&utm_medium=link&utm_source=viewer',
  },
  {
    title: 'March to April 2October 2023',
    link: 'https://www.canva.com/design/DAFvaJd9yg0/XIR-o5OLh9yMp0FSl13p9w/view?utm_content=DAFvaJd9yg0&utm_campaign=designshare&utm_medium=link&utm_source=viewer',
  },
]

const Page = () => {
  return (
    <div className='bg-bg'>
      <div className='pt-20 bg-bg flex flex-row justify-center'>
        <h1 className='text-[10rem]'>COMMUNICATIONS</h1>
      </div>
      <ChildrenLayout>
        <hr className='bg-line h-[6px] w-full' />

        <div className='flex flex-row  mt-8'>
          <div>
            <iframe
              loading='lazy'
              className='w-[40vw] h-[60vw] rounded-lg'
              src='https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGCnYGI0yE&#x2F;znFYztMIvs4QIYty9Ly_rw&#x2F;view?embed'
              allow='fullscreen'
            ></iframe>
          </div>
          <div className='ml-24 flex flex-col'>
            <h2 className='text-[3rem]'>MONTHLY NEWSLETTERS</h2>
            {ebookLists.map((v, i) => (
              <div key={i} className='flex flex-col my-[4vw]'>
                <span className='sub-font text-[1.8rem]'>{v.title}</span>
                <div className='flex flex-row'>
                  <ul style={{ listStyleType: 'square' }} className='pl-6'>
                    <li>
                      <Link
                        href={v.link}
                        className='text-[#1c4587] underline ml-2 text-[1.5rem] font-[1100] sub-font align-baseline	'
                      >
                        Click to View
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ChildrenLayout>
    </div>
  )
}

export default Page

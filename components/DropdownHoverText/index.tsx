import React from 'react'

type DropdownHoverTextProps = {
  name: string
  href: string
}

const DropdownHoverText = ({ name, href }: DropdownHoverTextProps) => {
  return (
    <>
      <div className=' flex  w-full items-center justify-center bg-transparent '>
        <div className='group relative cursor-pointer py-2'>
          <div className='flex items-center justify-between  bg-transparent'>
            <a
              className='menu-hover text-base font-medium text-black lg:mx-4'
              onClick={() => {}}
            >
              Portals
            </a>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </span>
          </div>
          <div className='invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible'>
            <a className='my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2'>
              Sunday
            </a>

            <a className='my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2'>
              Monday
            </a>

            <a className='my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2'>
              Tuesday
            </a>

            <a className='my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2'>
              Wednesday
            </a>

            <a className='my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2'>
              Thursday
            </a>

            <a className='my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2'>
              Friday
            </a>

            <a className='my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2'>
              Saturday
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default DropdownHoverText

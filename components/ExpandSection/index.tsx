import React from 'react'
import './styles.css'
import { useTranslations } from 'next-intl'

interface IExpandSectionData {
  id: number
  image: string
  title: string
  description: string[]
}

type ExpandSectionProps = {
  data: IExpandSectionData[]
}

const ExpandSection = ({ data }: ExpandSectionProps) => {
  const t = useTranslations('Home')
  return (
    <div>
      <div className='flex'>
        {data.map((v) => (
          <div
            className={`section rounded-lg h-[33vw] ${
              v.id == 1
                ? "bg-[url('/home/1.png')]"
                : v.id == 2
                ? "bg-[url('/home/2.png')]"
                : v.id == 3
                ? "bg-[url('/home/3.png')]"
                : "bg-[url('/home/4.png')]"
            }`}
            key={v.id}
          >
            <div className='content ml-4 mb-8'>
              <h1 className='text-[2rem] text-center'>
                {t.rich(v.title, {
                  br: () => <br />,
                })}
              </h1>
              <div className='detail'>
                <ul className='list-disc pl-8'>
                  {v.description.map((v, i) => (
                    <li className='' key={i}>
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='overlay rounded-lg'></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExpandSection

import React from 'react'

import type { CountersBlock as CountProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

export const CountersBlock: React.FC<CountProps> = (props) => {
  const { columns } = props
  return (
    <div
      className="md:h-72 flex relative mt-20"
      style={{
        backgroundImage: 'url(/number-load-image.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute w-full h-full md:h-2/4 md:top-[70px] bg-[#1C274C] opacity-70"></div>
      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center mx-auto gap-6 md:gap-24 text-white">
        {columns?.map((column, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <p className="text-5xl font-bold">{column.heading}</p>
            <p className="mt-4">{column.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

import type { GuaranteesBlock as GuaranteesBlockProps } from '@/payload-types'
import Image from 'next/image'
import React from 'react'

const images = [
  { src: '/user-star.svg', alt: 'User Star', key: 'img-1' },
  { src: '/shield-check.svg', alt: 'Shield Check', key: 'img-2' },
  { src: '/headphones.svg', alt: 'Headphones', key: 'img-3' },
  { src: '/testing.svg', alt: 'Testing', key: 'img-4' },
]

const ImplementationGuaranteesBlock: React.FC<GuaranteesBlockProps> = ({ listItems }) => {
  if (!listItems || listItems.length === 0) {
    return <div>No implementation process available.</div>
  }

  return (
    <section className="bg-white">
      <div
        className="bg-[#F3F3F3]"
        style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
      >
        <div className="w-full max-w-screen-xl mx-auto py-12 text-black">
          <p className="bg-[#fff] p-1 rounded-lg w-fit mx-auto mb-4 uppercase">Local Businesses</p>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center">
            Our Implementation Process
          </h1>
        </div>
        <div className="container px-4 md:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {listItems.map((step, index) => {
              const icon = images[index % images.length]

              return (
                <div className="card text-black bg-white rounded-xl p-5 mb-5" key={index}>
                  <div className="flex justify-center mb-2 bg-[#007AFF] rounded-lg w-12 p-2">
                    <Image
                      src={icon?.src || ''}
                      alt={icon?.alt || ''}
                      key={icon?.key}
                      width={40}
                      height={40}
                    />
                  </div>
                  <h1 className="pt-2 pb-2 text-xl sm:text-2xl font-bold">{step.title}</h1>
                  <h1 className="pt-2 pb-2 text-sm">{step.description}</h1>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImplementationGuaranteesBlock

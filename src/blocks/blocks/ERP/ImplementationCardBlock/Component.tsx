import React from 'react'
import type { ImplementationBlock as ImplementationBlockProps } from '@/payload-types'
import Image from 'next/image'

const images = [
  { src: '/search.svg', alt: 'Search', key: 'img-1' },
  { src: '/system.svg', alt: 'System', key: 'img-2' },
  { src: '/testing.svg', alt: 'Testing', key: 'img-3' },
  { src: '/live.svg', alt: 'Live', key: 'img-4' },
]

const ImplementationProcessBlock: React.FC<ImplementationBlockProps> = ({ listItems }) => {
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
          <p className="bg-[#fff] p-1 rounded-lg w-fit mx-auto mb-4 uppercase">Process</p>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center">
            Implementation Guarantees
          </h1>
        </div>
        <div className="container px-4 md:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {listItems.map((step, index) => {
              const icon = images[index % images.length] // Prevents out-of-bounds errors

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
                  <ul>
                    {step.items && step.items.length > 0 ? (
                      step.items.map((item, itemIndex) => (
                        <li className="flex items-center gap-2" key={itemIndex}>
                          <Image src="/workspace/check.png" width={20} height={20} alt="check" />
                          <span>{item.item}</span>
                        </li>
                      ))
                    ) : (
                      <li>No items available.</li>
                    )}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImplementationProcessBlock

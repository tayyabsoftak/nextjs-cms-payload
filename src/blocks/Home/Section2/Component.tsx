import React from 'react'
import type { HomeSection2Block as HomeSection2BlockProps } from '@/payload-types'
import Image from 'next/image'

export const HomeSection2: React.FC<HomeSection2BlockProps> = (props) => {
  const { columns } = props

  return (
    <section className="bg-white py-16">
      <div
        className="container mx-auto rounded-lg  w-screen"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '15px',
        }}
      >
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { badge, title, description, image1, image2 } = col
            const imageUrl1 = typeof image1 === 'string' ? image1 : image1?.url
            const imageUrl2 = typeof image2 === 'string' ? image2 : image2?.url
            return (
              <div
                className="grid md:grid-cols-2 space-x-4 space-y-3 h-full text-black md:relative py-4"
                key={index}
              >
                <div className="flex flex-col space-y-3 my-auto">
                  {badge && <p className="bg-[#5fa6f1] w-fit p-2 text-sm rounded">{badge}</p>}
                  {title && <h2 className="md:w-fit  font-bold text-2xl md:text-4xl">{title}</h2>}
                  {description && <p className="text-sm  text-gray-600 ">{description}</p>}
                </div>
                <div className="flex m-auto gap-5 md:relative pb-2">
                  {imageUrl1 && <img src={imageUrl1} alt="Home section 2 Image" className="" />}
                  {imageUrl2 && (
                    <div className="relative hidden md:block ">
                      <Image
                        src={imageUrl2}
                        alt="Home section 2 Image"
                        width={158}
                        height={0}
                        className="relative"
                      />
                      {/* The 3M+ div */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-yellow-300 border-4 border-white text-center p-2 rounded-full w-32 h-32 flex flex-col items-center justify-center">
                        <span className="text-xl font-bold">3M+</span>
                        <p className="text-sm">Happy Clients</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}

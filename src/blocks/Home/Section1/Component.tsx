import React from 'react'
import type { HomeSection1Block as HomeSection1BlockProps } from '@/payload-types'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const HomeSection1: React.FC<HomeSection1BlockProps> = ({ columns }) => {
  return (
    <section
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className=" md:w-screen"
    >
      {columns &&
        columns.length > 0 &&
        columns.map((col, index) => {
          const { title, description, image } = col
          const imageUrl = typeof image === 'string' ? image : image?.url

          return (
            <div key={index}>
              <div className="container flex-col space-y-4 flex md:flex-row md:justify-between py-10 md:py-16">
                <div className="gap-2">
                  <img src="community.png" alt="community-image" className="object-contain" />
                  {title && (
                    <h1 className="w-[400px] text-black font-semibold text-2xl md:text-4xl">
                      {title}
                    </h1>
                  )}
                </div>
                {description && (
                  <div
                    className="rounded-xl text-white w-64 bg-gradient-to-r 
                    from-[#2F92FD] to-[#007AFF] p-5"
                  >
                    <Quote className="inline-block mr-2" />
                    {description}
                  </div>
                )}
              </div>
              <div className="img flex flex-col md:justify-center md:items-center space-y-5">
                {imageUrl && (
                  <Image src={imageUrl} alt="Home Image" className="md:w-fit w-screen" />
                )}
                <div className="p-4 mx-auto">
                  <Button className="bg-[#007AFF] hover:bg-[#007AFF] text-white rounded-lg">
                    {"Sound familiar? Let's change that."}
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
    </section>
  )
}

import React from 'react'
import type { AboutSection3Block as AboutSection3BlockProps } from '@/payload-types'
import Image from 'next/image'
import YellowBadgeButton from '@/components/ui/yellowBadgeButton'
export const AboutSection3: React.FC<AboutSection3BlockProps> = ({ badge, title, cards }) => {
  if (!cards || cards.length === 0) return null
  return (
    <section className="bg-white">
      <div className="container text-black">
        <div className="head text-center pt-20">
          <div className="flex justify-center">
            {badge && <YellowBadgeButton>{badge}</YellowBadgeButton>}
          </div>
          {title && <h1 className="font-bold text-2xl pt-2">{title}</h1>}
        </div>
        <div className="profile grid md:grid-cols-3 gap-10 py-10">
          {cards.map((card, index) => {
            const { name, image, experience, designation } = card
            const imageUrl1 = typeof image === 'string' ? image : image?.url
            return (
              <div key={index} className="box">
                {imageUrl1 && (
                  <Image
                    src={imageUrl1}
                    width={0}
                    height={0}
                    alt="blank image"
                    className="rounded-full w-[300px] h-[300px] mx-auto"
                  />
                )}
                {name && <h1 className="text-center font-bold text-xl pt-4">{name}</h1>}
                {designation && <p className="text-center pb-3">{designation}</p>}
                {experience && (
                  <p className="bg-[#F5F5F5] w-fit mx-auto p-1 rounded-xl">{experience}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

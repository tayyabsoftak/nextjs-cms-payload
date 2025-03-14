import CustomButton from '@/components/ui/CustomButton'
import type { HomeSection3Block as HomeSection3BlockProps } from '@/payload-types'
import Image from 'next/image'
import React from 'react'

export const HomeSection3: React.FC<HomeSection3BlockProps> = ({ badge, title, cards }) => {
  if (!cards || cards.length === 0) return null

  return (
    <section
      className="w-full text-white"
      style={{
        backgroundImage: "url('/dark-bg-img.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '15px',
      }}
    >
      <div className="container py-12 flex flex-col space-y-4">
        <div className="flex flex-col md:flex-row md:justify-between space-y-2">
          <div className="flex flex-col space-y-2">
            {badge && <p className="bg-[#FFFFFF1A] w-fit p-1 rounded-lg">{badge}</p>}
            {title && <h1 className="text-2xl font-bold">{title}</h1>}
          </div>
          <div className="w-fit">
            <CustomButton>See How It Works</CustomButton>
          </div>
        </div>
      </div>

      <div className="container grid md:grid-cols-3 gap-5 pb-12">
        {cards.map((card, index) => {
          const { card_title, card_description, card_image } = card
          const imageUrl = typeof card_image === 'string' ? card_image : card_image?.url

          return (
            <div
              key={index}
              className="p-4 bg-cover bg-center rounded-xl"
              style={{
                backgroundImage: "url('/Mask group.png')",
                height: '400px',
              }}
            >
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={card_title || 'Image'}
                  width={300}
                  height={200}
                  className="mx-auto h-60 w-64"
                />
              )}
              {card_title && <h2 className="font-bold text-xl pb-1 mt-2">{card_title}</h2>}
              {card_description && <p className="text-sm">{card_description}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}

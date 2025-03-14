import CustomButton from '@/components/ui/CustomButton'
import type { LocalBusinessBlock as LocalBusinessBlockProps } from '@/payload-types'
import Image from 'next/image'
import React from 'react'

const icons = [
  { src: '/business-icon1.svg', alt: 'icon 1', key: 'icon-1' },
  { src: '/business-icon2.svg', alt: 'icon 2', key: 'icon-2' },
  { src: '/business-icon3.svg', alt: 'icon 3', key: 'icon-3' },
  { src: '/business-icon4.svg', alt: 'icon 4', key: 'icon-4' },
]

export const LocalBusiness: React.FC<LocalBusinessBlockProps> = ({
  badge,
  title,
  description,
  cards,
}) => {
  if (!cards || cards.length === 0) return null

  return (
    <section className="bg-white">
      <div
        className="bg-[#F3F3F3] py-12"
        style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-between text-black">
            <div className="flex flex-col  space-y-3">
              {badge && (
                <p className="bg-white p-1 w-44 text-center rounded-lg uppercase">{badge}</p>
              )}
              {title && <h1 className="font-bold text-2xl">{title}</h1>}
            </div>
            <div className="flex flex-col space-y-3 items-start">
              {description && <p className="text-sm w-[350px] text-gray-600">{description}</p>}
              <CustomButton>Book a free chat</CustomButton>
            </div>
          </div>

          <div className="box grid md:grid-cols-4 gap-3 text-black py-10">
            {cards.map((card, index) => {
              const { card_title, card_description } = card
              const icon = icons[index % icons.length] // Ensures safe indexing

              return (
                <div className="bg-white rounded-2xl p-4" key={index}>
                  <div className="flex flex-col items-start space-y-3 mb-4">
                    <div className="w-10 h-10">
                      <Image
                        src={icon?.src || ''}
                        alt={icon?.alt || ''}
                        key={icon?.key}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                      {card_title && <h1 className="font-bold">{card_title}</h1>}
                      {card_description && (
                        <p className="text-sm text-gray-600">{card_description}</p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

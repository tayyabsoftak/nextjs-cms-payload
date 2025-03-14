import React from 'react'
import type { LocalBusinessCawiyeBlock as LocalBusinessCawiyeBlockProps } from '@/payload-types'
import YellowBadgeButton from '@/components/ui/yellowBadgeButton'
import Image from 'next/image'

export const LocalBusinessCawiye: React.FC<LocalBusinessCawiyeBlockProps> = ({
  badge,
  title,
  description,
  cards,
}) => {
  const icons = [
    { key: 'icon-1', src: '/cawiye/customer-communication.svg', alt: 'icon 1' },
    { key: 'icon-2', src: '/cawiye/lead.svg', alt: 'icon 2' },
    { key: 'icon-3', src: '/cawiye/trend-up-square.svg', alt: 'icon 3' },
  ]

  if (!cards || cards.length === 0) return null

  return (
    <section className="bg-white py-10">
      <div className="container">
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-between text-black">
            <div className="flex flex-col space-y-3 mb-2 md:mb-0">
              <div className="text-start">
                <YellowBadgeButton>{badge}</YellowBadgeButton>
              </div>
              {title && <h1 className="font-bold text-2xl">{title}</h1>}
            </div>
            <div className="flex flex-col">
              {description && <p className="text-sm w-[350px] text-gray-600">{description}</p>}
            </div>
          </div>
        </div>
        <div className="box grid md:grid-cols-3 gap-3 text-black py-10">
          {cards.map((card, index) => {
            const { card_title, card_description } = card
            const icon = icons[index % icons.length]

            return (
              <div className="bg-[#F5F5F5] rounded-2xl" key={index}>
                <div className="p-5">
                  <div className="w-10 h-10 p-2 bg-white rounded-lg">
                    <Image
                      key={icon?.key}
                      src={icon?.src || ''}
                      alt={icon?.alt || ''}
                      width={40}
                      height={40}
                    />
                  </div>
                  {card_title && <h1 className="text-lg font-bold py-5">{card_title}</h1>}
                  {card_description && <p className="text-sm text-gray-600">{card_description}</p>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

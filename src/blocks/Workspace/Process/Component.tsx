import React from 'react'
import type { ProcessBlock as ProcessBlockProps } from '@/payload-types'
import YellowBadgeButton from '@/components/ui/yellowBadgeButton'
import Image from 'next/image'

export const Process: React.FC<ProcessBlockProps> = ({ badge, title, cards }) => {
  if (!cards || cards.length === 0) return null

  const icons = [
    { src: '/workspace/text.png', alt: 'icon 1', key: 'icon-1' },
    { src: '/workspace/user.png', alt: 'icon 2', key: 'icon-2' },
    { src: '/workspace/stars.png', alt: 'icon 3', key: 'icon-3' },
  ]

  return (
    <section className="bg-white">
      <div className="container">
        <div className="mx-auto py-12 text-black">
          <div className="flex justify-center">
            {badge && <YellowBadgeButton>{badge}</YellowBadgeButton>}
          </div>
          {title && <h1 className="font-bold text-2xl md:text-3xl text-center">{title}</h1>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-black mx-auto pb-10">
          {cards.map((card, index) => {
            const { card_title, card_description } = card
            const icon = icons[index % icons.length] // Prevents out-of-bounds errors

            return (
              <div
                key={index}
                className={`card p-8 flex flex-col justify-center space-y-3 ${
                  index === 1 ? 'rounded-xl bg-[#E4F1FF]' : ''
                }`}
              >
                <div className="w-10 h-10 mx-auto">
                  <Image
                    src={icon?.src || ''}
                    alt={icon?.alt || ''}
                    key={icon?.key}
                    width={40}
                    height={40}
                  />
                </div>
                {card_title && <h1 className="text-center text-lg font-bold">{card_title}</h1>}
                {card_description && (
                  <p className="text-center text-gray-500">{card_description}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

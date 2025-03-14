import React from 'react'
import type { PricingSystemBlock as PricingSystemBlockProps } from '@/payload-types'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import YellowBadgeButton from '@/components/ui/yellowBadgeButton'
export const PricingSystem: React.FC<PricingSystemBlockProps> = ({ badge, title, cards }) => {
  if (!cards || cards.length === 0) return null
  const colors = ['bg-[#E4F1FF] ', 'gradient', 'bg-[#E4F1FF] ']
  const buttonStyles = [
    'bg-transparent text-black border ',
    'bg-white text-black border-transparent hover:text-black',
    'bg-transparent text-black border ',
  ]

  return (
    <section className="bg-[#F3F3F3]">
      <div
        className="bg-white"
        style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}
      >
        <div className="mx-auto py-12 text-black">
          <div className="flex justify-center">
            {badge && <YellowBadgeButton>{badge}</YellowBadgeButton>}
          </div>
          {title && <h1 className="font-bold text-xl md:text-3xl text-center">{title}</h1>}
        </div>
        <div className="container grid  grid-cols-1 md:grid-cols-3 gap-4  ">
          {cards.map((card, index) => {
            const { title, price_caption, price, feature, description, points } = card
            const bgColor = colors[index % colors.length]
            const buttonStyle = buttonStyles[index % buttonStyles.length]
            const priceCaptionStyle = index === 1 ? 'text-white' : 'text-black'
            return (
              <div
                className={`card ${bgColor} rounded-xl p-5 mb-5 text-black`}
                key={index}
                style={
                  bgColor === 'gradient'
                    ? { background: 'linear-gradient(100.37deg, #2F92FD 1.05%, #007AFF 98.95%)' }
                    : {}
                }
              >
                <Image src="/workspace/round.png" width={20} height={20} alt="round" />
                {title && <p className="font-bold py-2">{title}</p>}
                <div className="flex items-end gap-1 mb-3">
                  {price && <h1 className="font-bold text-5xl leading-none">{price}</h1>}
                  {price_caption && (
                    <span className={`text-lg text-gray-500 ${priceCaptionStyle}`}>
                      {price_caption}
                    </span>
                  )}
                </div>
                <Button className={`w-full rounded-full px-4 py-2 ${buttonStyle}`}>
                  Get Started
                </Button>
                <div className="bg-white p-5 my-4 rounded-xl">
                  {feature && <h1 className="font-bold capitalize">{feature}</h1>}
                  {description && <p className="opacity-50 pb-4">{description}</p>}
                  <ul className="space-y-2">
                    {points?.length
                      ? points.map((item, idx) => (
                          <div key={item.id || idx} className="flex">
                            <Check className="bg-[#BEF264] p-1 rounded-xl" />
                            {item.point && <span className="ps-2">{item.point}</span>}
                          </div>
                        ))
                      : null}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

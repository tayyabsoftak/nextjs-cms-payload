import React from 'react'
import type { AboutSection2Block as AboutSection2BlockProps } from '@/payload-types'
import Image from 'next/image'
export const AboutSection2: React.FC<AboutSection2BlockProps> = ({ title, cards }) => {
  if (!cards || cards.length === 0) return null
  return (
    <section className="bg-white">
      <div
        className="bg-[#F3F3F3]"
        style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}
      >
        <div className="container py-10 text-black">
          {title && <h1 className="text-center font-bold text-2xl">{title}</h1>}
          <div className="grid md:grid-cols-3 gap-5 py-10">
            {cards.map((card, index) => {
              const { card_title, card_image, points } = card
              const imageUrl1 = typeof card_image === 'string' ? card_image : card_image?.url
              return (
                <div key={index} className="box1 rounded-lg">
                  {imageUrl1 && (
                    <Image src={imageUrl1} width={427} height={274} alt="blank image" />
                  )}
                  <div className="bg-white p-5">
                    {card_title && <h1 className="py-2 font-bold">{card_title}</h1>}
                    <ul className="list-[disc] space-y-1 px-4 text-sm">
                      {points?.length
                        ? points.map((item, idx) => (
                            <div key={item.id || idx}>
                              {item.point && <li className="ml-2">{item.point}</li>}
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
      </div>
    </section>
  )
}

import Rating from '@/components/ui/RatingStars'
import YellowBadgeButton from '@/components/ui/yellowBadgeButton'
import type { RealStoriesBlock as RealStoriesBlockProps } from '@/payload-types'
import Image from 'next/image'
import React from 'react'

export const RealStories: React.FC<RealStoriesBlockProps> = ({ badge, title, caption, cards }) => {
  if (!cards || cards.length === 0) return null
  return (
    <section
      className="bg-white "
      style={{
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
      }}
    >
      <div className="py-10 text-center space-y-2">
        <YellowBadgeButton>{badge}</YellowBadgeButton>
        {title && <h1 className="font-bold text-xl md:text-2xl text-black">{title}</h1>}
        {caption && (
          <div className="flex justify-center items-start  gap-1 px-2 md:px-0">
            <Rating rating={4} />
            <p className="text-sm text-gray-600">{caption}</p>
          </div>
        )}
      </div>
      <div className="container" style={{ paddingBottom: '35px' }}>
        <div className="grid md:grid-cols-3 text-black gap-5">
          {cards.map((card, index) => {
            const { card_title_name, card_description, card_image, card_caption, card_job_name } =
              card
            const imageUrl = typeof card_image === 'string' ? card_image : card_image?.url
            return (
              <div key={index} className="box">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt="Business man"
                    width={0}
                    height={0}
                    className="w-full h-[574] rounded-xl"
                  />
                )}
                <div className="py-3">
                  {card_title_name && <h2>{card_title_name}</h2>}
                  {card_job_name && <h2 className="text-sm text-gray-500">{card_job_name}</h2>}
                </div>
                <div className="space-y-2">
                  {card_description && <p className="text-sm text-gray-600">{card_description}</p>}
                  {card_caption && (
                    <div className="flex justify-start items-center gap-1">
                      <Rating rating={5} />
                      <p className="text-sm text-gray-600">{card_caption}</p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

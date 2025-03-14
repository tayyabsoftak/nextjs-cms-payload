import React from 'react'
import type { WorkspaceSection1Block as WorkspaceSection1BlockProps } from '@/payload-types'
import Image from 'next/image'
import YellowBadgeButton from '@/components/ui/yellowBadgeButton'
export const WorkspaceSection1: React.FC<WorkspaceSection1BlockProps> = ({
  badge,
  title,
  cards,
}) => {
  if (!cards || cards.length === 0) return null
  return (
    <section
      className="bg-white "
      style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}
    >
      <div className="mx-auto py-12 text-black">
        <p className="text-center py-5">
          <YellowBadgeButton>{badge}</YellowBadgeButton>
        </p>
        <h1 className="font-bold text-3xl text-center">
          {title || 'Why Businesses Love Google Workspace'}
        </h1>
      </div>
      <div className="container py-10">
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-5">
          {cards.slice(0, 2).map((card, index) => {
            const { card_title, card_image, points } = card
            const imageUrl2 = typeof card_image === 'string' ? card_image : card_image?.url
            return (
              <div className="box1 bg-[#F1F5F9] rounded-xl p-10" key={index}>
                <div className="flex  pb-2">
                  <Image src="/stars 1.png" width={30} height={30} alt="star" />
                  {card_title && (
                    <h1 className="ps-3 font-bold text-2xl text-black">{card_title}</h1>
                  )}
                </div>
                <ul className="text-black list-disc space-y-1 pb-5 pl-5">
                  {points?.map((item, idx) =>
                    item.point ? <li key={item.id || idx}>{item.point}</li> : null,
                  )}
                </ul>
                {imageUrl2 && <Image src={imageUrl2} width={499} height={332} alt="image" />}
              </div>
            )
          })}
        </div>
        {cards.slice(2, 3).map((card, index) => {
          const { card_title, card_image, points } = card
          const imageUrl2 = typeof card_image === 'string' ? card_image : card_image?.url
          return (
            <div className="box2 bg-[#F1F5F9] w-full rounded-xl p-10 mt-5" key={index}>
              <div className="flex flex-col md:flex-row gap-5 justify-between">
                <div className="flex flex-col">
                  <div className="flex gap-1 items-center pb-2">
                    <Image src="/stars 1.png" width={30} height={30} alt="star" />
                    {card_title && (
                      <h1 className="ps-3 font-bold text-2xl text-black">{card_title}</h1>
                    )}
                  </div>
                  <ul className="text-black list-disc space-y-1 pb-5 pl-5">
                    {points?.map((item, idx) =>
                      item.point ? <li key={item.id || idx}>{item.point}</li> : null,
                    )}
                  </ul>
                </div>
                {imageUrl2 && <Image src={imageUrl2} width={499} height={332} alt="image" />}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

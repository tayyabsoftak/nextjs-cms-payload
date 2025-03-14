import React from 'react'
import type { WorkspaceSection2Block as WorkspaceSection2BlockProps } from '@/payload-types'
import Image from 'next/image'

export const WorkspaceSection2: React.FC<WorkspaceSection2BlockProps> = ({
  badge,
  title,
  cards,
}) => {
  const icons = [
    { src: '/Gemini in workspace.png', alt: 'icon 1', key: 'icon-1' },
    { src: '/Gmail for business.png', alt: 'icon 2', key: 'icon-2' },
    { src: '/Google Drive.png', alt: 'icon 3', key: 'icon-3' },
    { src: '/Google Meet.png', alt: 'icon 4', key: 'icon-4' },
  ]

  if (!cards || cards.length === 0) return null

  return (
    <section className="bg-white">
      <div
        className="bg-[#F3F3F3]"
        style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}
      >
        <div className="mx-auto py-12 text-black">
          <p className="bg-[#fff] p-1 rounded-lg w-fit mx-auto mb-4">{badge || 'Real Stories '}</p>
          <h1 className="font-bold text-3xl text-center">
            {title || 'AI-Powered Tools That Make Work Easier'}
          </h1>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {cards.map((card, index) => {
              const { card_title, points } = card
              const icon = icons[index % icons.length] // Ensuring no out-of-bounds errors

              return (
                <div key={index} className="card text-black bg-white rounded-xl p-5 mb-5">
                  <div className="w-10 h-10">
                    <Image
                      src={icon?.src || ''}
                      alt={icon?.alt || ''}
                      key={icon?.key}
                      width={40}
                      height={40}
                    />
                  </div>
                  {card_title && <h1 className="pt-5 pb-2 text-2xl font-bold">{card_title}</h1>}
                  <ul className="space-y-1 pb-5">
                    {points?.length
                      ? points.map((item, idx) => (
                          <li key={item.id || `point-${idx}`} className="flex items-center">
                            <Image src="/workspace/check.png" width={20} height={20} alt="check" />
                            {item.point && <span className="ml-2">{item.point}</span>}
                          </li>
                        ))
                      : null}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

import YellowBadgeButton from '@/components/ui/yellowBadgeButton'
import type { CoreModuleBlock as CoreModuleBlockProps } from '@/payload-types'
import Image from 'next/image'
import React from 'react'

const CoreModuleBlock: React.FC<CoreModuleBlockProps> = ({ badge, description, carditems }) => {
  return (
    <section className="bg-white py-12 text-black">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-8">
          {badge && <YellowBadgeButton>{badge}</YellowBadgeButton>}
          {description && (
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold">{description}</p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {carditems && carditems.length > 0 ? (
            carditems.map((card, index) => (
              <div key={index} className="card bg-[#F1F5F9] rounded-xl shadow-lg p-6">
                {card.title && <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>}

                <ul className="list-disc pl-6 mb-5">
                  {card.items && card.items.length > 0 ? (
                    card.items.map((item, idx) => (
                      <li key={idx} className="text-lg">
                        {item.item}
                      </li>
                    ))
                  ) : (
                    <li>No items available</li>
                  )}
                </ul>
                {card.image && typeof card.image === 'object' && card.image.url && (
                  <div className="mb-4">
                    <Image
                      src={card.image.url}
                      alt="image"
                      width={400}
                      height={250}
                      className="rounded-lg"
                    />
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center text-lg">No card items available</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CoreModuleBlock

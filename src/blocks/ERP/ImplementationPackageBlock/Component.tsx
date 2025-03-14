import React from 'react'
import type { ImplementationPackageBlock as ImplementationPackageBlockProps } from '@/payload-types'
import Image from 'next/image'
import YellowBadgeButton from '@/components/ui/yellowBadgeButton'

const ImplementationPackageBlock: React.FC<ImplementationPackageBlockProps> = ({
  badge,
  description,
  card,
}) => {
  return (
    <section className="py-12 bg-white text-black">
      <div className="container mx-auto px-4 md:px-0">
        {/* Badge and Description */}
        <div className="text-center mb-8">
          {badge && <YellowBadgeButton>{badge}</YellowBadgeButton>}
          {description && (
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold">{description}</p>
          )}
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {card && card.length > 0 ? (
            card.map((cardItem, index) => (
              <div key={index} className="card bg-[#F5F5F5] rounded-xl p-6">
                {/* Card Title */}
                {cardItem.text && <h2 className="text-2xl font-semibold mb-4">{cardItem.text}</h2>}

                {/* Card Description */}
                {cardItem.description && <p className="text-lg mb-4">{cardItem.description}</p>}

                {/* Card Items List */}
                {cardItem.carditems && cardItem.carditems.length > 0 ? (
                  <div className="bg-white rounded-xl p-6">
                    {cardItem.carditems.map((item, itemIndex) => (
                      <div key={itemIndex} className="mb-4">
                        {/* CardItem Title */}
                        {item.title && (
                          <h3 className="text-xl font-semibold mb-2 uppercase">{item.title}</h3>
                        )}

                        {/* CardItem Sub Description (subdesc) */}
                        {item.subdesc && <p className="text-lg mb-2">{item.subdesc}</p>}

                        {/* Custom Icon List */}
                        {item.items && item.items.length > 0 ? (
                          <div className="space-y-2">
                            {item.items.map((subItem, subItemIndex) => (
                              <div key={subItemIndex} className="flex items-center gap-2">
                                <Image
                                  src="/package-icon.svg"
                                  width={24}
                                  height={24}
                                  alt="Package Icon"
                                  className="flex-shrink-0"
                                />
                                <span>{subItem.item}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p>No items available</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>No card items available</div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center text-lg">No cards available</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ImplementationPackageBlock

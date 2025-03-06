import RichText from '@/components/RichText'
import { SixPillarsBlock as SixPillarsBlockProps } from '@/payload-types'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export const SixPillarsBlock: React.FC<SixPillarsBlockProps> = ({
  cards,
  title,
  richText,
  backgroundColor,
}) => {
  const cardData = cards ?? []
  return (
    <>
      <div className={`${backgroundColor} py-14`}>
        <div className="max-w-[48rem] mx-auto">
          {title && <h2 className="text-4xl font-bold text-center">{title}</h2>}
          {richText && (
            <RichText className="mb-0 text-center" data={richText} enableGutter={false} />
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 mt-20 md:px-20 container mx-auto">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="transform h-[35rem] flex relative rounded-2xl overflow-hidden transition duration-300 hover:scale-105"
              style={{
                backgroundImage: `url(${typeof card.backgroundImage === 'object' && card.backgroundImage.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute w-full h-full bg-[#350000] opacity-40"></div>
              <div className="relative flex items-center top-44 text-white px-4">
                <div className="w-[5px] h-[70px] bg-white mr-4 rounded-md"></div>
                <p className="text-2xl">
                  {card.title.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-green-700 text-white px-4 py-3 mx-auto rounded-md w-[12rem] flex items-center justify-center space-x-2 group mt-8">
          <span>Discover More</span>
          <ArrowRight className="text-2xl transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg]" />
        </button>
      </div>
    </>
  )
}

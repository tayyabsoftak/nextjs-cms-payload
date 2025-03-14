import React from 'react'
import type { CawiyeSection2Block as CawiyeSection2BlockProps } from '@/payload-types'
import Image from 'next/image'
import CustomButton from '@/components/ui/CustomButton'

export const CawiyeSection2: React.FC<CawiyeSection2BlockProps> = ({ left_card, right_card }) => {
  if (!left_card || left_card.length === 0) return null
  if (!right_card || right_card.length === 0) return null
  return (
    <section className="bg-white">
      <div
        className="bg-[#F3F3F3]"
        style={{ borderTopRightRadius: '30px', borderTopLeftRadius: '30px' }}
      >
        <div className="container py-10">
          <div className="grid md:grid-cols-2 gap-10">
            {left_card.map((card, index) => {
              const { title, description1, description2, socials } = card
              return (
                <div className="side1 bg-white rounded-xl text-black" key={index}>
                  <div className="p-4">
                    {title && <h1 className="text-xl font-bold">{title}</h1>}
                    {description1 && <p className="text-gray-600 py-5">{description1}</p>}
                    <div className="box bg-[#DBEAFE] rounded-xl">
                      <div className="social p-3 flex flex-wrap gap-5">
                        {socials?.length
                          ? socials.map((item, idx) => (
                              <div
                                key={item.id || idx}
                                className="bg-white px-3 py-2 rounded-3xl w-fit flex gap-2 items-center"
                              >
                                {typeof item.icon === 'string' ? (
                                  <Image
                                    src={item.icon || ''}
                                    width={30}
                                    height={20}
                                    alt="social"
                                  />
                                ) : item.icon &&
                                  typeof item.icon === 'object' &&
                                  'url' in item.icon &&
                                  item.icon.url ? (
                                  <Image src={item.icon.url} width={30} height={20} alt="social" />
                                ) : null}
                                {item.name && (
                                  <span className="ps-2 text-gray-600">{item.name}</span>
                                )}
                              </div>
                            ))
                          : null}
                      </div>
                    </div>
                    {description2 && <p className="py-5 text-sm">{description2}</p>}
                    <CustomButton>Get Free Trial</CustomButton>
                  </div>
                </div>
              )
            })}
            {right_card.map((card, index) => {
              const { title, description1, description2, image } = card
              const imageUrl = typeof image === 'string' ? image : image?.url
              return (
                <div className="side2 bg-white rounded-xl text-black" key={index}>
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      width={372}
                      height={376}
                      alt="image"
                      className="mx-auto"
                    />
                  )}
                  <div className="p-4">
                    {title && <h1 className="text-xl font-bold py-3"> {title}</h1>}
                    {description1 && <p className="text-gray-600">{description1}</p>}
                    {description2 && <p className="pt-2 text-gray-600">{description2}</p>}
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

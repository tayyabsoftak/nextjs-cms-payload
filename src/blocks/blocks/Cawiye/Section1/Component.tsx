import React from 'react'
import type { CawiyeSection1Block as CawiyeSection1BlockProps } from '@/payload-types'
import Image from 'next/image'
import CustomButton from '@/components/ui/CustomButton'
import YellowBadgeButton from '@/components/ui/yellowBadgeButton'
export const CawiyeSection1: React.FC<CawiyeSection1BlockProps> = (props) => {
  const { columns } = props
  return (
    <section
      className="bg-white pt-10"
      style={{ borderTopRightRadius: '30px', borderTopLeftRadius: '30px' }}
    >
      <div className="container text-black pb-10">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { badge, title, description, image } = col
            const imageUrl = typeof image === 'string' ? image : image?.url
            return (
              <div className="grid md:grid-cols-2 space-y-3" key={index}>
                <div className="side1 space-y-3">
                  <YellowBadgeButton>{badge}</YellowBadgeButton>
                  {badge && <h1 className="text-xl font-bold py-2 ">{title}</h1>}
                  {description && <p>{description}</p>}
                  <CustomButton>Start Free Trial</CustomButton>
                </div>
                <div className="side2">
                  <div className="bg-[#F5F5F5]">
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        width={570}
                        height={480}
                        alt="image"
                        className="pt-5 ps-5"
                      />
                    )}
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}

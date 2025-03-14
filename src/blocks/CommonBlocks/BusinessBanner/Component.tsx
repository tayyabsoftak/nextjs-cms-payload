import CustomButton from '@/components/ui/CustomButton'
import type { BusinessBannerBlock as BusinessBannerBlockProps } from '@/payload-types'
import Image from 'next/image'
import React from 'react'

export const BusinessBannerBlock: React.FC<BusinessBannerBlockProps> = ({
  title,
  points,
  image,
}) => {
  const imageUrl = typeof image === 'string' ? image : image && 'url' in image ? image.url : ''

  return (
    <section className="bg-[#F3F3F3]">
      <div
        className="bg-white p-6 md:p-14"
        style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
      >
        <div
          style={{
            backgroundImage: "url('/dark-bg-img.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '20px',
          }}
        >
          <div className="flex flex-col md:flex-row justify-between p-6 md:p-10 items-center">
            <div className="flex flex-col items-start p-6 md:p-14 text-white space-y-2 w-full md:w-1/2">
              {title && <h1 className="font-semibold text-2xl md:text-4xl pb-2">{title}</h1>}
              <div className="py-4">
                {points?.map((item, index) => {
                  return (
                    <div className="flex gap-2 items-center mt-2" key={index}>
                      <Image src="/check (5) 1.png" alt="check" className="w-4 h-4" />
                      <p className="text-gray-600">{item.point}</p>
                    </div>
                  )
                })}
              </div>
              <CustomButton>Lets Get Started</CustomButton>
            </div>

            {imageUrl && (
              <div className="w-full md:w-1/2 mt-6 md:mt-0 hidden md:block">
                <Image src={imageUrl} alt="Business Banner" className="w-full h-auto rounded-lg" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

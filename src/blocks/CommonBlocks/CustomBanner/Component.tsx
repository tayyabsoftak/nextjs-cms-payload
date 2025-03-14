import CustomButton from '@/components/ui/CustomButton'
import type { CustomBannerBlock as CustomBannerBlockProps } from '@/payload-types'
import React from 'react'

export const CustomBanner: React.FC<CustomBannerBlockProps> = ({ title, description }) => {
  return (
    <section className="bg-[#F3F3F3]">
      <div
        className="bg-white md:p-14 p-5"
        style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
      >
        <div
          className="md:container"
          style={{
            backgroundImage: "url('/dark-bg-img.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '20px',
          }}
        >
          <div className=" md:p-14 p-5 text-white">
            {title && (
              <h1 className="md:font-semibold font-bold md:w-[340px] w-full md:text-4xl text-xl pb-2">
                {title}
              </h1>
            )}
            <div className="flex flex-col md:flex-row md:justify-between space-y-4">
              {description && <p className="md:w-[572px] w-[60vw] text-sm ">{description}</p>}
              <div className="w-fit">
                <CustomButton>Lets Get Started</CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

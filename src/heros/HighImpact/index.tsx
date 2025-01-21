'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
const Slider = dynamic(() => import('react-slick'), { ssr: false })

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { getImageUrl } from '@/imageObject'
import dynamic from 'next/dynamic'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Default: 1 slide on mobile
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay globally
    autoplaySpeed: 3000, // Autoplay speed for all screens
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 1, // Show 2 slides on tablets
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000, // Slower autoplay on tablets
        },
      },
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile screens
          slidesToScroll: 1,
          arrows: false, // Hide arrows on mobile screens
          autoplay: true,
          autoplaySpeed: 2000, // Faster autoplay for mobile
          pauseOnHover: true,
        },
      },
    ],
  }

  return (
    <div className="min-h-[80vh] relative">
      {media && typeof media === 'object' && (
        <Slider {...sliderSettings} className="overflow-hidden">
          {media.map((item, index) => {
            const imageUrl = getImageUrl(item.image)
            return (
              <div key={index} className="relative h-[80vh]">
                {/* Gradient Overlay on Image */}
                <img src={imageUrl} className="h-full w-full object-cover" alt="slider-image" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D6DB380] via-transparent to-[#00000080]" />
              </div>
            )
          })}
        </Slider>
      )}

      {/* Content Area */}
      <div className="absolute top-1/4 z-10 w-full px-5 md:px-32 md:text-left">
        <div>
          {richText && (
            <RichText className="mb-6 text-white" data={richText} enableGutter={false} />
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink
                      {...link}
                      className="bg-green-700 text-white px-4 py-3 rounded-md w-[12rem] flex items-center justify-center space-x-2 group"
                    />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

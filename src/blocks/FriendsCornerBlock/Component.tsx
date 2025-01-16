'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { ArrowRight } from 'lucide-react'
const Slider = dynamic(() => import('react-slick'), { ssr: true })
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FriendsCornerBlock as FriendsProps } from '@/payload-types'
import RichText from '@/components/RichText'

export const FriendsCornerBlock: React.FC<FriendsProps> = ({
  reviews,
  image,
  title,
  richText,
  subtitle,
}) => {
  const reviewsData = reviews ?? []

  const getImageUrl = (image: any) => {
    if (typeof image === 'string') {
      return image
    } else if (typeof image === 'object' && image.url) {
      return image.url
    }
  }
  const settings = {
    dots: true,
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
          slidesToShow: 2, // Show 2 slides on tablets
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000, // Slower autoplay on tablets
        },
      },
      {
        breakpoint: 768, // For mobile screens
        settings: {
          dots: true, // Disable dots on small screens
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
    <div className="container my-10">
      <div className="max-w-[48rem] mx-auto space-y-2">
        {title && <h2 className="text-4xl font-bold text-center">{title}</h2>}
        {subtitle && <h4 className="text-center font-semibold">{subtitle}</h4>}
        {richText && <RichText className="mb-0 text-center" data={richText} enableGutter={false} />}
      </div>
      {image && (
        <img className="mx-auto mt-8 rounded-xl" src={getImageUrl(image)} alt="Friends Corner" />
      )}
      <Slider {...settings}>
        {reviewsData.map((data, index) => (
          <div key={index}>
            <div className="flex flex-col sm:flex-row justify-center items-center mx-auto gap-5 rounded-xl p-4 sm:p-8 mt-10 sm:mt-20 md:w-[60rem]">
              <img src="/slider-logo.svg" alt="slider-logo" className="w-44 mb-4 sm:mb-0 sm:mr-4" />
              <div className="flex flex-col items-center sm:items-start overflow-hidden">
                <div className="flex items-center justify-center sm:justify-start">
                  <img src="/message-icon.svg" alt="message-icon" className="w-10 h-10 mr-2" />
                  <span className="text-2xl font-semibold">{data.title}</span>
                </div>
                <p className="text-sm sm:text-base text-center sm:text-left">{data.description}</p>
                <p className="text-md font-semibold text-sm sm:text-base mt-5 text-center sm:text-left">
                  {data.organization}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <button className="bg-green-700 text-white px-4 py-3 mx-auto rounded-md w-[12rem] flex items-center justify-center space-x-2 group mt-10">
        <span>Discover More</span>
        <ArrowRight className="text-2xl transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg] group-focus:rotate-[360deg] active:rotate-[360deg]" />
      </button>
    </div>
  )
}

'use client'
import RichText from '@/components/RichText'
import { FriendsCornerBlock as FriendsProps } from '@/payload-types'
import { ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
const Slider = dynamic(() => import('react-slick'), { ssr: true })

export const FriendsCornerBlock: React.FC<FriendsProps> = ({
  reviews,
  images,
  title,
  richText,
  subtitle,
}) => {
  const reviewsData = reviews ?? []
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  // Extract YouTube Video ID
  const extractVideoId = (url: string): string | null => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/?|(?:v|e(?:mbed)?)\/|\S*\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    const match = url.match(regex)
    return match ? match[1] : null
  }

  // Get image URL
  const getImageUrl = (image: any) => {
    if (image?.image && typeof image.image !== 'number') {
      return image.image.url
    }
    return image?.image || ''
  }

  // Open modal with selected video
  const openVideoModal = (videoUrl: string) => {
    const videoId = extractVideoId(videoUrl)
    if (videoId) {
      setSelectedVideo(videoId)
    }
  }

  // Close modal
  const closeModal = () => {
    setSelectedVideo(null)
  }

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
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

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 mt-20 md:px-20 container mx-auto">
        {images.map((image, index) => {
          const imageUrl = getImageUrl(image)
          const videoUrl = image.link || '#'
          return (
            <div
              key={index}
              className="transform h-[25rem] flex relative rounded-2xl overflow-hidden transition duration-300 hover:scale-105 cursor-pointer"
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              onMouseEnter={() => openVideoModal(videoUrl)}
              onClick={() => openVideoModal(videoUrl)}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-[#350000] bg-opacity-40">
                <img src="/youtube-2.svg" alt="youtube-icon" className="h-8 w-8" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal} // Close on click outside
        >
          <div className="relative w-full max-w-3xl">
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&controls=1&rel=0`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-[60vh] md:h-[500px] rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Reviews Slider */}
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

      {/* Discover More Button */}
      <button className="bg-green-700 text-white px-4 py-3 mx-auto rounded-md w-[12rem] flex items-center justify-center space-x-2 group mt-10">
        <span>Discover More</span>
        <ArrowRight className="text-2xl transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg] group-focus:rotate-[360deg] active:rotate-[360deg]" />
      </button>
    </div>
  )
}

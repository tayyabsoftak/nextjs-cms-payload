'use client'
import { useEffect, useState } from 'react'
import type { SliderBlock as SliderBlockProps } from '@/payload-types'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { FaStar, FaRegStar } from 'react-icons/fa'
import YellowBadgeButton from '@/components/ui/yellowBadgeButton'
export const Slider: React.FC<SliderBlockProps> = ({ badge, title, description, cards }) => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  if (!cards || cards.length === 0) return null
  if (!isClient) return null
  return (
    <section className="bg-white py-10">
      <div className="mx-auto py-12 text-black">
        <div className="flex justify-center">
          {badge && <YellowBadgeButton>{badge}</YellowBadgeButton>}
        </div>
        {title && <h1 className="font-bold text-3xl py-4 text-center">{title}</h1>}
        {description && <p className="text-gray-600 text-center">{description}</p>}
      </div>
      <Swiper
        modules={[Autoplay]}
        direction="horizontal"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {cards.map((card, index) => {
          const { rating, image, description, name, designation } = card
          const imageUrl = typeof image === 'string' ? image : image?.url
          return (
            <SwiperSlide className="bg-[#F8FAFC] rounded-xl" key={index}>
              <div className="flex flex-col space-x-4 border-[#E2E8F0] p-3 h-52">
                <div className="flex flex-col text-black">
                  <div className="flex">
                    {[...Array(5)].map((_, idx) => (
                      <span key={idx} className="text-yellow-500 text-xl">
                        {rating && idx < rating ? <FaStar /> : <FaRegStar />}
                      </span>
                    ))}
                  </div>
                  {description && (
                    <p className="overflow-y-auto max-h-28 text-sm text-gray-600 py-4">
                      {description}
                    </p>
                  )}
                  <div className="flex gap-4">
                    {imageUrl && <Image src={imageUrl} width={50} height={50} alt="carl image" />}
                    <div className="profile flex flex-col">
                      {name && <h1 className="text-lg font-bold">{name}</h1>}
                      {designation && <p className="text-gray-600">{designation}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

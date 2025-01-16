'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { UpComingEventsBlock as EventsProps } from '@/payload-types'

export const UpComingEventsBlock: React.FC<EventsProps> = ({ year, months, cards, link }) => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null)

  const filteredCards = selectedMonth ? cards?.filter((card) => card.date === selectedMonth) : cards

  return (
    <>
      <div className="px-10 container mx-auto">
        <h3 className="text-xl font-semibold mb-4">{year}</h3>
        <div className="flex flex-wrap gap-4">
          <span
            className={`px-4 py-2 bg-[#E1E1E1] hover:bg-[#B8B8B8] rounded-sm cursor-pointer ${
              selectedMonth === null ? 'bg-[#B8B8B8]' : ''
            }`}
            onClick={() => setSelectedMonth(null)}
          >
            All
          </span>
          {months?.map((month, index) => (
            <span
              key={index}
              className={`px-4 py-2 bg-[#E1E1E1] hover:bg-[#B8B8B8] rounded-sm cursor-pointer ${
                selectedMonth === month.name ? 'bg-[#B8B8B8]' : ''
              }`}
              // onClick={() => setSelectedMonth(month.name)} // Set selected month
            >
              {month.name}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {filteredCards?.map((card) => (
            <div
              key={card.id}
              className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            >
              {card.image && typeof card.image === 'object' && card.image.url && (
                <img src={card.image.url} alt="Event" className="w-full object-cover" />
              )}
              <div className="p-4">
                <p className="text-lg font-semibold">{card.para1}</p>
                <p className="text-sm text-gray-600 mt-2">{card.para2}</p>
                <hr className="border-t-2 border-gray-400 my-6" />
                <h3 className="text-xl">Details</h3>
                <div className="flex flex-col gap-2">
                  <p className="text-sm">{card.date}</p>
                  <p className="text-sm">{card.time}</p>
                  <p className="text-sm">{card.peoples}</p>
                  <Link href="">
                    <p className="text-sm">{card.events}</p>
                  </Link>
                  <p className="text-sm">{card.public}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="bg-green-700 text-white px-4 py-3 mx-auto rounded-md w-[14rem] flex items-center justify-center space-x-2 group mt-5">
        <span>Explore More Events</span>
        <ArrowRight className="text-2xl transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg]" />
      </button>
      <div
        className="h-screen flex relative mt-20 cursor-pointer"
        style={{
          backgroundImage: 'url(/image-22.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="relative mx-auto flex items-center">
          <Link href={`${link}`} target="blank" rel="noopener noreferrer">
            <img src="/youtube-2.svg" alt="youtube-icon" />
          </Link>
        </div>
      </div>
    </>
  )
}

import { CornerCardsBlock as CornerCardsProps } from '@/payload-types'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const CornerCardsBlock: React.FC<CornerCardsProps> = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* First Column with One Card */}
        <div className="bg-blue-50 p-6 rounded-md shadow-md group cursor-pointer flex flex-col h-full">
          <p className="mb-4">”Startup Essentials Bootcamp”</p>
          <p className="mb-2 text-gray-600">
            Digital Marketing Bootcamp at Lincoln Corner Peshawar!
          </p>

          {/* Image with hover scale effect */}
          <div className="w-full relative">
            <img
              src="/latest-Image-1.svg"
              alt="Startup Bootcamp"
              className="rounded-md w-full object-cover transition-all duration-300 group-hover:scale-105"
            />
          </div>

          {/* Link with arrow and hover rotation */}
          <Link href="#" className="mt-4 text-green-700 flex items-center space-x-2 group">
            <span className="font-medium">Join Bootcamp</span>
            <ArrowRight className="text-2xl transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg]" />
          </Link>
        </div>

        {/* Second Column with Two Cards */}
        <div className="flex flex-col gap-4 h-full">
          {/* First Card */}
          <div className="bg-blue-50 p-4 rounded-md shadow-md group cursor-pointer h-full">
            <p className="mb-2 text-gray-600">
              Young voices from Pakistan and Tajikstan come together to ra..
            </p>
            <img
              src="/latest-Image-2.svg"
              alt="Empowering Researches"
              className="mb-4 rounded-md w-full object-cover transition-all duration-300 group-hover:scale-105"
            />
            <Link href="#" className="text-green-700 flex items-center space-x-2">
              <span>Discover More</span>
              <ArrowRight className="text-2xl transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg]" />
            </Link>
          </div>

          {/* Second Card */}
          <div className="bg-blue-50 p-4 rounded-md shadow-md group cursor-pointer h-full">
            <p className="mb-2 text-gray-600">Lincoln Empowering Future Researches</p>
            <img
              src="/latest-Image-3.svg"
              alt="Empowering Researches"
              className="mb-4 rounded-md w-full object-cover transition-all duration-300 group-hover:scale-105"
            />
            <Link href="#" className="text-green-700 flex items-center space-x-2">
              <span>Interviews</span>
              <ArrowRight className="text-2xl transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg]" />
            </Link>
          </div>
        </div>

        {/* Third Column with Two Cards */}
        <div className="flex flex-col gap-4 h-full">
          {/* First Card */}
          <div className="bg-blue-50 p-4 rounded-md shadow-md group cursor-pointer h-full">
            <p className="mb-2 text-gray-600">
              Lincoln Corner at Quaid-e-Azam Library Lahore is looking for a volunteer for its
              “Friends..
            </p>
            <img
              src="/latest-Image-4.svg"
              alt="Empowering Researches"
              className="mb-4 rounded-md w-full object-cover transition-all duration-300 group-hover:scale-105"
            />
            <Link href="#" className="text-green-700 flex items-center space-x-2">
              <span>Discover More</span>
              <ArrowRight className="text-2xl transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg]" />
            </Link>
          </div>

          {/* Second Card */}
          <div className="bg-blue-50 p-4 rounded-md shadow-md group cursor-pointer h-full">
            <p className="mb-2 text-gray-600">
              Lincoln Corner Hyderabad organized a dynamic two-day workshop.
            </p>
            <img
              src="/latest-Image-5.svg"
              alt="Empowering Researches"
              className="mb-4 rounded-md w-full object-cover transition-all duration-300 group-hover:scale-105"
            />
            <Link href="#" className="text-green-700 flex items-center space-x-2">
              <span>Discover More</span>
              <ArrowRight className="text-2xl transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg]" />
            </Link>
          </div>
        </div>

        {/* Fourth Column with Two Cards */}
        <div className="flex flex-col gap-4 h-full">
          {/* First Card */}
          <div className="bg-blue-50 p-4 rounded-md shadow-md group cursor-pointer h-full">
            <p className="mb-2 text-gray-600">Volunteer Ideathon</p>
            <img
              src="/latest-Image-6.svg"
              alt="Empowering Researches"
              className="mb-4 rounded-md w-full object-cover transition-all duration-300 group-hover:scale-105"
            />
            <Link href="#" className="text-green-700 flex items-center space-x-2">
              <span>Discover More</span>
              <ArrowRight className="text-2xl transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg]" />
            </Link>
          </div>

          {/* Second Card */}
          <div className="bg-blue-50 p-4 rounded-md shadow-md group cursor-pointer h-full">
            <p className="mb-2 text-gray-600">
              Voices against Violence episode, filmmaker Madeeeha Raza shares how her work has
              high....
            </p>
            <img
              src="/latest-Image-7.svg"
              alt="Empowering Researches"
              className="mb-4 rounded-md w-full object-cover transition-all duration-300 group-hover:scale-105"
            />
            <Link href="#" className="text-green-700 flex items-center space-x-2">
              <span>Podcast</span>
              <ArrowRight className="text-2xl transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

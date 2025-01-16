import { CornerCardsBlock as CornerCardsProps } from '@/payload-types'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const CornerCardsBlock: React.FC<CornerCardsProps> = () => {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row gap-4">
        {/* First Column*/}
        <div className="bg-blue-50 p-6 rounded-md shadow-md group h-fit">
          <p className="mb-2 text-gray-600">
            Startup Essentials BootcampDigital Marketing Bootcamp at Lincoln Corner Peshawar!
          </p>
          <img
            src="/latest-Image-1.svg"
            alt="Startup Bootcamp"
            className="rounded-md w-full object-cover"
          />
          <Link href="#" className="mt-4 text-green-700 flex items-center space-x-2 group">
            <span className="font-medium">Join Bootcamp</span>
            <ArrowRight className="transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg]" />
          </Link>
        </div>

        {/* Second Column: Two Smaller Cards */}
        <div className="flex flex-col gap-3">
          {/* Small Card 1 */}
          <div className="bg-blue-50 p-4 rounded-md shadow-md group">
            <p className="mb-2 text-gray-600">
              Young voices from Pakistan and Tajikstan come together to ra..
            </p>
            <img
              src="/latest-Image-2.svg"
              alt="Empowering Researches"
              className="mb-4 rounded-md w-full object-cover"
            />
            <Link href="#" className="text-green-700 flex items-center space-x-2">
              <span>Discover More</span>
              <ArrowRight className="transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg]" />
            </Link>
          </div>
          {/* Small Card 2 */}
          <div className="bg-blue-50 p-4 rounded-md shadow-md group">
            <p className="mb-2 text-gray-600">Lincoln Empowering Future Researches</p>
            <img
              src="/latest-Image-3.svg"
              alt="Empowering Researches"
              className="mb-4 rounded-md w-full object-cover"
            />
            <Link href="#" className="text-green-700 flex items-center space-x-2">
              <span>Interviews</span>
              <ArrowRight className="transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg]" />
            </Link>
          </div>
        </div>

        {/* Third Column: Two Smaller Cards */}
        <div className="flex flex-col gap-3">
          {/* Small Card 1 */}
          <div className="bg-blue-50 p-4 rounded-md shadow-md group">
            <p className="mb-2 text-gray-600">
              Lincoln Corner at Quaid-e-Azam Library Lahore is looking for a volunteer for its
              “Friends..
            </p>
            <img
              src="/latest-Image-4.svg"
              alt="Empowering Researches"
              className="mb-4 rounded-md w-full object-cover"
            />
            <Link href="#" className="text-green-700 flex items-center space-x-2">
              <span>Discover More</span>
              <ArrowRight className="transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg]" />
            </Link>
          </div>
          {/* Small Card 2 */}
          <div className="bg-blue-50 p-4 rounded-md shadow-md group">
            <p className="mb-2 text-gray-600">
              Lincoln Corner Hyderabad organized a dynamic two-day workshop.
            </p>
            <img
              src="/latest-Image-5.svg"
              alt="Empowering Researches"
              className="mb-4 rounded-md w-full object-cover"
            />
            <Link href="#" className="text-green-700 flex items-center space-x-2">
              <span>Discover More</span>
              <ArrowRight className="transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg]" />
            </Link>
          </div>
        </div>

        {/* Fourth Column: Two Smaller Cards */}
        <div className="flex flex-col gap-3">
          {/* Small Card 1 */}
          <div className="bg-blue-50 p-4 rounded-md shadow-md group">
            <p className="mb-2 text-gray-600">Volunteer Ideathon</p>
            <img
              src="/latest-Image-6.svg"
              alt="Empowering Researches"
              className="mb-4 rounded-md w-full object-cover"
            />
            <Link href="#" className="text-green-700 flex items-center space-x-2">
              <span>Discover More</span>
              <ArrowRight className="transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg]" />
            </Link>
          </div>
          {/* Small Card 2 */}
          <div className="bg-blue-50 p-4 rounded-md shadow-md group">
            <p className="mb-2 text-gray-600">
              Voices against Violence episode, fimmake Madeeeha Raza shares how her work has
              high....
            </p>
            <img
              src="/latest-Image-7.svg"
              alt="Empowering Researches"
              className="mb-4 rounded-md w-full object-cover"
            />
            <Link href="#" className="text-green-700 flex items-center space-x-2">
              <span>Podcast</span>
              <ArrowRight className="transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

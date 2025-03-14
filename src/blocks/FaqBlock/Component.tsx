'use client'
import { getImageUrl } from '@/imageObject'
import { useState } from 'react'
import { FaqBlock as FaqProps } from '@/payload-types'
import Link from 'next/link'

export const FaqBlock: React.FC<FaqProps> = ({ accordion, image, cities }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [selectedCityIndex, setSelectedCityIndex] = useState<number>(0) // Default to first city
  const [hoveredFaqIndex, setHoveredFaqIndex] = useState<number | null>(null) // Track the hovered FAQ index
  const [hoveredIconIndex, setHoveredIconIndex] = useState<number | null>(null) // Track the hovered icon index

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleCityClick = (index: number) => {
    setSelectedCityIndex(index)
    setOpenIndex(null)
  }

  const handleFaqHover = (index: number) => {
    setHoveredFaqIndex(index)
  }

  const handleFaqLeave = () => {
    setHoveredFaqIndex(null)
  }

  const handleIconHover = (index: number) => {
    setHoveredIconIndex(index)
  }

  const handleIconLeave = () => {
    setHoveredIconIndex(null)
  }

  const selectedAccordion = accordion ? accordion[selectedCityIndex] : null

  const cityIconPositions = [
    // For Islamabad City 1
    [
      { top: '10%', left: '65%' },
      { top: '30%', left: '68%' },
      { top: '10%', left: '70%' },
      { top: '20%', left: '72%' },
      { top: '25%', left: '63%' },
    ],
    // For Lahore City
    [
      { top: '50%', left: '70%' },
      { top: '45%', left: '65%' },
      { top: '48%', left: '60%' },
      { top: '40%', left: '70%' },
      { top: '53%', left: '65%' },
    ],
    // For Karachi City 3
    [
      { top: '85%', left: '40%' },
      { top: '85%', left: '55%' },
      { top: '83%', left: '45%' },
      { top: '80%', left: '35%' },
      { top: '87%', left: '48%' },
    ],
    // For Peshawar City 4
    [
      { top: '10%', left: '70%' },
      { top: '18%', left: '66%' },
    ],
  ]

  return (
    <div className="container mt-10">
      {/* City Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 my-20 gap-8">
        {cities?.map((city, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-4 transform transition duration-300 hover:scale-105 group cursor-pointer`}
            onClick={() => handleCityClick(index)}
          >
            <img
              src={getImageUrl(city.image)}
              alt={`image of ${city.cityname}`}
              className="rounded-full"
              style={{
                boxShadow:
                  selectedCityIndex === index ? '0px -4px 8px rgba(4, 120, 87, 0.8)' : 'none',
              }}
            />
            <p className="text-green-700 text-xl font-semibold">{city.cityname}</p>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col md:flex-row gap-10 md:gap-48 justify-center">
        {/* FAQ Section - Based on selected city */}
        {selectedAccordion && (
          <div className="w-full md:w-1/3 my-1 bg-green-700 text-white p-5 rounded-xl overflow-hidden">
            {selectedAccordion.title && (
              <h2 className="text-xl font-semibold mb-2">{selectedAccordion.title}</h2>
            )}
            <ul className="flex flex-col">
              {selectedAccordion.faqs?.map((faq, faqIndex) => (
                <li
                  key={faqIndex}
                  className={`bg-green-700 my-2 rounded-md border-b border-white`}
                  onMouseEnter={() => handleFaqHover(faqIndex)} // Hover event
                  onMouseLeave={handleFaqLeave} // Mouse leave event
                >
                  <h2
                    onClick={() => toggleAccordion(faqIndex)}
                    className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`fill-current text-white h-6 w-6 transform transition-transform duration-500 ${openIndex === faqIndex ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                    </svg>
                  </h2>
                  <div
                    className={`border-l-2 border-white-600 overflow-hidden duration-500 transition-all ${openIndex === faqIndex ? 'max-h-96' : 'max-h-0'}`}
                    style={{ transition: 'max-height 0.5s ease-in-out' }}
                  >
                    {faq.answere?.map((answer, answerIndex) => (
                      <div key={answerIndex} className="p-3 text-white">
                        {answer.address && (
                          <Link href="/corners-pakistan">
                            <p className="cursor-pointer">
                              <strong>Address:</strong> {answer.address}
                            </p>
                          </Link>
                        )}
                        {answer.phone && (
                          <p>
                            <strong>Phone:</strong> {answer.phone}
                          </p>
                        )}
                        {answer.email && (
                          <p>
                            <strong>Email:</strong> {answer.email}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Image Section */}
        <div className="w-full md:w-1/3">
          <div className="relative">
            <img src={getImageUrl(image)} alt="map-image" className="w-full rounded-md relative" />

            {cityIconPositions[selectedCityIndex]?.map((position, index) => (
              <div
                key={index}
                style={{
                  top: position.top,
                  left: position.left,
                }}
                className="absolute"
                onMouseEnter={() => handleIconHover(index)}
                onMouseLeave={handleIconLeave}
              >
                {hoveredIconIndex === index && selectedAccordion && selectedAccordion.faqs && (
                  <div
                    className="absolute w-[250px] md:w-[380px] bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white shadow-xl text-green-700 p-2 rounded-md text-sm"
                    style={{
                      zIndex: 1000,
                      opacity: 0.8,
                    }}
                  >
                    <p>
                      <strong>Address: </strong>
                      {selectedAccordion.faqs[index]?.answere?.[0]?.address}
                    </p>
                    <p>
                      <strong>Phone: </strong>
                      {selectedAccordion.faqs[index]?.answere?.[0]?.phone}
                    </p>
                    <p>
                      <strong>Email: </strong>
                      {selectedAccordion.faqs[index]?.answere?.[0]?.email}
                    </p>
                  </div>
                )}

                <img
                  src="/map-icon.svg"
                  alt="map-icon"
                  className="cursor-pointer w-5 h-5 hover:scale-150"
                  style={{
                    filter: hoveredIconIndex === index ? 'brightness(1.5)' : 'none',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

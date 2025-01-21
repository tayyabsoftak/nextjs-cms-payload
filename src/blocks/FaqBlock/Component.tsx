'use client'
import { getImageUrl } from '@/imageObject'
import { useState } from 'react'
import { FaqBlock as FaqProps } from '@/payload-types'

export const FaqBlock: React.FC<FaqProps> = ({ accordion, image, cities }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [selectedCityIndex, setSelectedCityIndex] = useState<number>(0) // Default to first city

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleCityClick = (index: number) => {
    setSelectedCityIndex(index)
    setOpenIndex(null)
  }

  const selectedAccordion = accordion ? accordion[selectedCityIndex] : null

  return (
    <div className="container mt-10">
      {/* City Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 my-20 gap-8">
        {cities?.map((city, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-4 transform transition duration-300 hover:scale-105 group cursor-pointer `}
            onClick={() => handleCityClick(index)}
          >
            <img
              src={getImageUrl(city.image)}
              alt={`image of ${city.cityname}`}
              className={`${selectedCityIndex === index ? 'rounded-full shadow-md shadow-green-700' : ''}`}
            />
            <p className="text-green-700 text-xl font-semibold">{city.cityname}</p>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col md:flex-row gap-10 md:gap-48 justify-center">
        {/* FAQ Section - Based on selected city */}
        {selectedAccordion && (
          <div className="w-full md:w-1/3 my-1 bg-green-700 text-white p-5 rounded-xl">
            {selectedAccordion.title && (
              <h2 className="text-xl font-semibold mb-2">{selectedAccordion.title}</h2>
            )}
            <ul className="flex flex-col">
              {selectedAccordion.faqs?.map((faq, faqIndex) => (
                <li key={faqIndex} className="bg-green-700 my-2 rounded-md border-b border-white">
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
                          <p>
                            <strong>Address:</strong> {answer.address}
                          </p>
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
          <img src={getImageUrl(image)} alt="map-image" className="w-full rounded-md relative" />
        </div>
      </div>
    </div>
  )
}

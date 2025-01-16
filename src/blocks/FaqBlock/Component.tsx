'use client'
import { getImageUrl } from '@/imageObject'
import { useState } from 'react'
export const FaqBlock: React.FC<any> = ({ faqs, image, title, cities }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="px-10 md:px-20 mt-10">
      <div className="container w-full flex flex-col md:flex-row gap-20 justify-center">
        {/* FAQ Section */}
        <div className="w-full sm:w-10/12 md:w-1/3 my-1 bg-green-700 text-white p-5 rounded-xl">
          {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
          <ul className="flex flex-col">
            {faqs.map((faq, index) => (
              <li key={index} className="bg-green-700 my-2 rounded-md border-b border-white">
                <h2
                  onClick={() => toggleAccordion(index)}
                  className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`fill-current text-white h-6 w-6 transform transition-transform duration-500 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                  </svg>
                </h2>
                <div
                  className={`border-l-2 border-white-600 overflow-hidden duration-500 transition-all ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                  style={{ transition: 'max-height 0.5s ease-in-out' }}
                >
                  <p className="p-3 text-white">{faq.answere}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="">
          <img
            src={getImageUrl(image)}
            alt="pakistan-map-image"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-20 gap-8">
        {cities.map((city, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 transform transition duration-300 hover:scale-105 group"
          >
            <img src={getImageUrl(city.image)} alt={`image of ${city.cityname}`} />
            <p className="text-green-700 text-xl font-semibold">{city.cityname}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

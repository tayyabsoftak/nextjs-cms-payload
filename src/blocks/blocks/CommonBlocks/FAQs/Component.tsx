'use client'
import React, { useState } from 'react'
import type { FAQsBlock as FAQsBlockProps } from '@/payload-types'

export const FAQs: React.FC<FAQsBlockProps> = ({ badge, title, cards }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  if (!cards || cards.length === 0) return null
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <section className="bg-white pt-10">
      <div
        className="bg-[#F3F3F3]"
        style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}
      >
        <div className="container">
          <div className="mx-auto pt-10 text-black">
            {badge && (
              <p className="bg-white p-1 rounded-lg w-fit mx-auto mb-4 uppercase">{badge}</p>
            )}
            {title && <h1 className="font-bold text-3xl text-center">{title}</h1>}
          </div>
          <section className="py-12">
            <div className="mx-auto md:w-[840px] px-4 sm:px-6 lg:px-8">
              {cards.map((card, index) => {
                const { question, answer } = card
                return (
                  <div className="accordion-group" key={index}>
                    <div
                      className={`accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 ${
                        openIndex === index ? 'bg-[#007AFF] border-[#007AFF]' : ''
                      } mb-8 lg:p-4`}
                    >
                      <button
                        className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 w-full transition duration-500 ${
                          openIndex === index ? 'text-white' : 'text-black'
                        }`}
                        onClick={() => toggleAccordion(index)}
                      >
                        {question && (
                          <h5 className={openIndex === index ? 'text-white' : ''}>{question}</h5>
                        )}
                        {openIndex === index ? (
                          <svg
                            className="w-6 h-6 text-white transition duration-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 12H18"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        ) : (
                          <svg
                            className="w-6 h-6 text-gray-900 transition duration-500 block"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 12H18M12 18V6"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        )}
                      </button>
                      {openIndex === index && (
                        <div className="accordion-content w-full overflow-hidden pr-4 ">
                          {answer && (
                            <p className="text-base text-white font-normal leading-6">{answer}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

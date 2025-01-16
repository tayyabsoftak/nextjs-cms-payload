import RichText from '@/components/RichText'
import { getImageUrl } from '@/imageObject'
import { GetinTouchBlock as GetinTouchProps } from '@/payload-types'
import React from 'react'
import { FormBlock } from '../Form/Component'

export const GetinTouchBlock: React.FC<GetinTouchProps> = ({
  title,
  image,
  desc,
  contactInfo,
  officetiming,
  subDescription,
  richText,
  backgroundColor,
  form,
}) => {
  const transformedForm: any | null = typeof form === 'object' && form !== null ? form : null
  return (
    <div className={`mt-5 ${backgroundColor} p-5`}>
      <div className="sm:p-10 lg:p-20 flex flex-col lg:flex-row gap-10 lg:gap-10">
        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2">
          <FormBlock enableIntro={false} form={transformedForm} />
        </div>
        {/* Image and Info Section */}
        <div
          className="bg-[#034FA3] w-full lg:w-2/3 rounded-2xl relative flex h-screen md:h-auto"
          style={{
            backgroundImage: 'url(/bg-contact.svg)',
          }}
        >
          <div className="absolute flex flex-col items-center justify-center w-full h-full text-white lg:p-10 cursor-pointer">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-center">{title}</h1>
              <img className="mt-6 mx-auto w-48" src={getImageUrl(image)} alt="Contact Animation" />
            </div>
            <div>
              {desc && (
                <p className="text-center text-sm sm:text-base lg:text-lg mx-1 md:max-w-[25rem]">
                  {desc}
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6 mx-auto">
                {officetiming && officetiming.length > 0 && (
                  <div className="flex flex-col text-center">
                    <p className="font-semibold">Office Hours</p>
                    <p>
                      {officetiming[0].startDay} - {officetiming[0].endDay}
                    </p>
                    <p>
                      {officetiming[0].startTime} - {officetiming[0].endTime}
                    </p>
                  </div>
                )}
                <div className="flex flex-col text-center">
                  <p className="font-semibold">{title}</p>
                  {contactInfo?.map((contact, index) => <p key={index}>{contact.phone}</p>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center flex flex-col gap-3 px-10 md:px-0">
        {subDescription && (
          <h1 className="text-xl font-semibold text-green-700">{subDescription}</h1>
        )}
        {richText && (
          <RichText
            className="mb-0 text-center text-3xl font-bold max-w-[35rem] mx-auto"
            data={richText}
            enableGutter={false}
          />
        )}
        <div className="relative w-full md:w-[30rem] mx-auto">
          <input
            type="text"
            className="p-3 pr-16 border border-gray-400 rounded-sm text-black placeholder:text-gray-700 w-full"
            placeholder="Enter Email Address"
          />
          <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-green-700 text-white px-4 py-2 rounded-sm transition-all duration-300">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  )
}

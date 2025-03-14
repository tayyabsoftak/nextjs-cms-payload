import React from 'react'
import type { CawiyeProcessBlock as CawiyeProcessBlockProps } from '@/payload-types'
import Image from 'next/image'
import YellowBadgeButton from '@/components/ui/yellowBadgeButton'

export const CawiyeProcess: React.FC<CawiyeProcessBlockProps> = ({
  badge,
  title,
  description,
  plans,
}) => {
  return (
    <section className="bg-white pt-10">
      <div className="container text-black pb-10">
        <div className="flex flex-col md:flex-row  md:justify-between items-center">
          <div className="side1 flex flex-col space-y-3 mr-auto">
            <div className="items-start">
              <YellowBadgeButton>{badge}</YellowBadgeButton>
            </div>
            <h1 className="text-xl font-bold py-2">{title}</h1>
            <p>{description}</p>
            {plans?.map((plan, index) => (
              <div className="flex gap-2 items-center space-y-5" key={index}>
                <img src="/cawiye/blue img.png" alt="" />
                <div className="flex flex-col">
                  <h1 className="font-bold">{plan.step}</h1>
                  <p className="text-sm text-gray-600">{plan.Choose_plan}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="side2">
            <Image src="/cawiye/process_blank img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import type { BusinessHeadachesBlock as BusinessHeadachesBlockProps } from '@/payload-types'
import YellowBadgeButton from '@/components/ui/yellowBadgeButton'

const BusinessHeadachesBlock: React.FC<BusinessHeadachesBlockProps> = ({
  badge,
  title,
  beforeTitle,
  beforeList,
  afterTitle,
  afterList,
}) => {
  return (
    <section
      className="bg-white"
      style={{ borderTopRightRadius: '30px', borderTopLeftRadius: '30px' }}
    >
      <div className="text-black py-20">
        <div className="flex justify-center">
          <YellowBadgeButton>{badge}</YellowBadgeButton>
        </div>
        <h1 className="text-3xl font-bold text-center pt-6">{title}</h1>
        <div className="flex flex-col sm:flex-row justify-center gap-10 pt-10 mx-3 md:mx-0">
          <div className="side1 p-10 bg-[#FEF2F2] rounded-xl border-2 border-[#FFC9C9]">
            <h1 className="text-xl font-bold pb-4">{beforeTitle}</h1>
            <ul className="space-y-1 text-gray-600 list-[disc]">
              {beforeList &&
                beforeList.map((itemObj, index) => <li key={index}>{itemObj.item}</li>)}
            </ul>
          </div>
          <div className="side2 p-10 bg-[#ECFDF5] rounded-xl border-2 border-[#A4F4CF]">
            <h1 className="text-xl font-bold pb-4">{afterTitle}</h1>
            <h1 className="text-xl font-bold pb-4">{afterTitle}</h1>
            <ul className="list-[disc] space-y-1 text-gray-600">
              {afterList && afterList.map((itemObj, index) => <li key={index}>{itemObj.item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessHeadachesBlock

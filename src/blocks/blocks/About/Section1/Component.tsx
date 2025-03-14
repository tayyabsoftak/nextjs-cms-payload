import React from 'react'
import type { AboutSection1Block as AboutSection1BlockProps } from '@/payload-types'
import CustomButton from '@/components/ui/CustomButton'
export const AboutSection1: React.FC<AboutSection1BlockProps> = (props) => {
  const { columns } = props
  return (
    <section
      className="bg-white "
      style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}
    >
      {columns &&
        columns.length > 0 &&
        columns.map((col, index) => {
          const { title, description } = col
          return (
            <div key={index} className="pt-8">
              <div className="container w-full text-black space-y-5" key={index}>
                {title && <h1 className="text-gray-600 capitalize">{title || 'Our Story '}</h1>}
                {description && <p className="">{description || 'Our Story '}</p>}
              </div>
              <div className="container py-4">
                <CustomButton>Start Free Trial</CustomButton>
              </div>
            </div>
          )
        })}
    </section>
  )
}

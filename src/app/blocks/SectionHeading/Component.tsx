import React from 'react'

import type { SectionsHeading as SectionsProps } from '@/payload-types'

import RichText from '@/components/RichText'

export const SectionsHeading: React.FC<SectionsProps> = ({ backgroundColor, title, richText }) => {
  return (
    <div className={`${backgroundColor}`}>
      <div className="container p-8">
        <div className="max-w-[48rem] mx-auto">
          {title && <h2 className="text-4xl font-bold text-center">{title}</h2>}
          {richText && (
            <RichText className="mb-0 text-center" data={richText} enableGutter={false} />
          )}
        </div>
      </div>
    </div>
  )
}

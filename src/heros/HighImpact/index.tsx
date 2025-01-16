'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div className="relative flex items-center justify-center text-white" data-theme="dark">
      <div className="container mb-8 z-10 relative flex items-center justify-center">
        <div className="md:text-left">
          {richText && (
            <RichText className="mb-6 text-white" data={richText} enableGutter={false} />
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex  gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink
                      {...link}
                      className="bg-green-700 text-white px-4 py-3 rounded-md w-[12rem] flex items-center justify-center space-x-2 group"
                    />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="min-h-[80vh] select-none">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
        )}
      </div>
      <div className="absolute inset-0 bg-themeprimary bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out"></div>
    </div>
  )
}

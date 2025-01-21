'use client'
import React, { useState, useEffect, useRef } from 'react'
import CountUp from 'react-countup'
import type { CountersBlock as CountProps } from '@/payload-types'

export const CountersBlock: React.FC<CountProps> = (props) => {
  const { columns } = props
  const [inView, setInView] = useState(false) // Track if the section is in view
  const sectionRef = useRef<HTMLDivElement | null>(null) // Ref for the section element

  useEffect(() => {
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className="md:h-72 flex relative mt-20"
      style={{
        backgroundImage: 'url(/number-load-image.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute w-full h-full bg-[#1C274C] opacity-70"></div>
      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center mx-auto gap-6 md:gap-24 text-white my-4 md:my-0">
        {columns?.map((column, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <p className="text-5xl font-bold">
              {inView && <CountUp start={0} end={column.heading || 0} duration={2.5} />}+
            </p>
            <p className="mt-4">{column.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

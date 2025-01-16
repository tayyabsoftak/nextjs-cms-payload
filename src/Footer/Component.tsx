import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { Search } from 'lucide-react'

const socialFooterLinks = [
  {
    to: 'https://instagram.com',
    src: '/instagram.svg',
    alt: 'Instagram',
    label: 'Instagram',
  },
  {
    to: 'https://facebook.com',
    src: '/f.svg',
    alt: 'Facebook',
    label: 'Facebook',
  },
  {
    to: 'https://twitter.com',
    src: '/x.svg',
    alt: 'Twitter',
    label: 'Twitter',
  },
  {
    to: 'https://youtube.com',
    src: '/youtube.svg',
    alt: 'Youtube',
    label: 'Youtube',
  },
]
export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()
  console.log('Footer', footerData)

  const columns = footerData?.columns || [] // Use columns instead of navItems

  return (
    <footer className="bg-[#072C49] w-full md:px-20 py-8 px-10 text-white">
      <div className="container py-8 flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col space-y-6 lg:col-span-1 items-start">
          <Link className="flex items-center" href="/">
            <Logo />
          </Link>
          <h4 className="text-lg font-bold">Lincoln Corner Academy</h4>

          {/* Search Bar */}
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
            <input
              type="text"
              className="p-3 pl-10 pr-16 border border-green-700 rounded-full bg-green-700 text-white placeholder:text-white w-full"
              placeholder="Enter here"
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 px-4 py-2 rounded-full transition-all duration-300">
              Search
            </button>
          </div>

          {/* Social Media Links */}
          <div className="flex md:justify-start items-center gap-4">
            {socialFooterLinks.map((link, index) => (
              <a
                key={index}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110 hover:opacity-80"
              >
                <img
                  src={link.src}
                  alt={link.alt}
                  className="transition-all duration-300 h-6 ease-in-out"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <div className="flex flex-col md:flex-row gap-16">
            {' '}
            {/* Adjusted container to hold columns */}
            {columns.map((column, columnIndex) => {
              return (
                <div key={columnIndex} className="flex flex-col gap-8">
                  {' '}
                  {/* Create a column for each */}
                  <h3 className="font-semibold text-lg hover:text-gray-300 cursor-pointer">
                    {column?.columnTitle}
                  </h3>
                  {/* Display column title */}
                  <nav className="flex flex-col gap-3 ">
                    {column?.navItems?.map(({ link }, i) => {
                      return (
                        <CMSLink className="text-white hover:text-gray-300" key={i} {...link} />
                      )
                    })}
                  </nav>
                </div>
              )
            })}
          </div>
        </div>
        {/* <ThemeSelector /> */}
      </div>
    </footer>
  )
}

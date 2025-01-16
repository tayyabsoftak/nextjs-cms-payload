'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import clsx from 'clsx'
import { PhoneCall, SearchIcon } from 'lucide-react'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <header className="relative z-20 bg-white py-2" {...(theme ? { 'data-theme': theme } : {})}>
      <div className="px-5">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Logo loading="eager" priority="high" className="invert dark:invert-0" />
          </Link>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-500 rounded-lg focus:outline-none text-right"
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            {!isMenuOpen && <RxHamburgerMenu className="w-6 h-6 text-right" />}
          </button>
          <div className="hidden md:block">
            <HeaderNav data={data} className="hover:no-underline" />
          </div>
          <div className="h-[40px] p-2 hidden xl:flex border text-green-700 border-green-700 rounded-md text-center hover:scale-105 justify-center items-center transition-all duration-300 ease-in-out">
            <Link href="" className="flex items-center gap-2">
              <PhoneCall className="h-5 w-5 text-green-700" />
              <span>Contact Us</span>
            </Link>
          </div>
          <div className="hidden xl:flex items-center space-x-3 relative">
            <div className="relative">
              {/* Search icon */}
              <SearchIcon className="w-5 text-primary absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
              <input
                type="text"
                className="p-3 pl-10 pr-16 border border-gray-300 rounded-md bg-green-700 text-white placeholder:text-white"
                placeholder="Enter here"
              />
            </div>
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 px-4 py-2 rounded-md transition-all duration-300">
              Search
            </button>
          </div>
        </div>
        <div
          className={clsx(
            'lg:hidden fixed top-0 left-0 w-full h-auto bg-white transition-transform duration-300 ease-in-out z-10',
            { 'translate-x-0': isMenuOpen, 'translate-x-full': !isMenuOpen },
          )}
        >
          <div className="flex justify-between p-6">
            <Logo />
            <button onClick={toggleMenu} className="text-">
              <RxCross2 className="w-6 h-6" />
            </button>
          </div>
          <ul>
            <li>
              <HeaderNav data={data} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

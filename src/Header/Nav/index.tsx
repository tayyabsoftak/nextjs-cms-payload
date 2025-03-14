'use client'
import React, { useState, useEffect } from 'react'
import { CMSLink } from '@/components/Link'
import type { Header } from '@/payload-types'
import { GoPlus } from 'react-icons/go'
import { HiOutlineMinusSmall } from 'react-icons/hi2'
import { useMenu } from '@/context'

export const HeaderNav: React.FC<{ data: Header; className?: string }> = ({ data, className }) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null)
  const [currentPath, setCurrentPath] = useState<string>('')
  const { toggleMenu } = useMenu()

  const navItems = data?.navItems || []

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index)
  }

  return (
    <nav
      className={`flex flex-col md:flex-row items-start gap-3 md:items-center md:ml-8 ${className || ''}`}
    >
      {navItems.map((navItem, i) => {
        const { link, dropDownMenu = [] } = navItem
        const hasDropdown = dropDownMenu!.length > 0
        const isActive = currentPath === link.url
        const isDropdownOpen = openDropdownIndex === i
        return (
          <div key={navItem.id || i} className="relative group md:block w-full md:w-auto">
            {/* Main Link */}
            <div
              className={`flex justify-center items-center bg-[#FAFAFA] mx-5 mb-4 md:mx-0 md:mb-0 rounded-md ${
                isActive ? 'border-b-2 border-green-700 text-white' : ''
              }`}
            >
              <CMSLink
                {...link}
                appearance="link"
                onClick={() => toggleMenu()}
                className="hover:no-underline text-gray-700 p-3 flex-grow"
              />
              {hasDropdown && (
                <img src="/down.svg" alt="down-icon" className="w-4 h-4 hidden md:block" />
              )}

              {hasDropdown && (
                <button
                  type="button"
                  className="text-black md:hidden p-2"
                  onClick={() => toggleDropdown(i)}
                >
                  {isDropdownOpen ? (
                    <HiOutlineMinusSmall className="w-6 h-6" />
                  ) : (
                    <GoPlus className="w-6 h-6" />
                  )}
                </button>
              )}
            </div>

            {/* Dropdown Menu */}
            {hasDropdown && (
              <div
                className={`md:absolute left-0 top-full md:bg-white md:rounded-md md:shadow-md ${
                  isDropdownOpen ? 'block' : 'hidden'
                } md:group-hover:block`}
              >
                {dropDownMenu?.map((dropdownLink, subIndex) => (
                  <CMSLink
                    onClick={() => toggleMenu()}
                    key={dropdownLink.id || subIndex}
                    {...dropdownLink.link}
                    appearance="link"
                    className="hover:no-underline md:border-b-2 border-green-700 ml-5 md:ml-0 block p-2 text-gray-700 hover:bg-gray-100"
                  />
                ))}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}

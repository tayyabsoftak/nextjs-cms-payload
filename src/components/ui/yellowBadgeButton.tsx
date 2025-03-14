import React from 'react'

interface CustomBadgeProps {
  children: React.ReactNode
}

const YellowBadgeButton: React.FC<CustomBadgeProps> = ({ children }) => {
  return (
    <button className="bg-[#FEE685] w-auto p-1 rounded-lg mx-auto text-black uppercase">
      {children}
    </button>
  )
}

export default YellowBadgeButton

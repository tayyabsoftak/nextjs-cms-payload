import Link from 'next/link'
import React from 'react'

const YoutubeVideoBlock: React.FC<any> = ({ link }) => {
  return (
    <>
      <div
        className="h-screen flex relative mt-5 cursor-pointer"
        style={{
          backgroundImage: 'url(/your-image)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="relative mx-auto flex items-center">
          <Link href={`${link}`} target="blank" rel="noopener noreferrer">
            <img src="/youtube-2.svg" alt="youtube-icon" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default YoutubeVideoBlock

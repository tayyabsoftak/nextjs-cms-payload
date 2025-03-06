'use client'
import React from 'react'

const HomeVideoBlock: React.FC<{ video: string }> = ({ video }) => {
  const extractVideoId = (url: string): string | null => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/?|(?:v|e(?:mbed)?)\/|\S*\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    const match = url.match(regex)
    return match ? match[1] : null
  }

  const videoId = extractVideoId(video)

  return (
    <div id="video-block" className="relative w-full h-60 md:h-screen overflow-hidden mt-5">
      {videoId ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&mute=1&rel=0`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-60 object-cover sm:h-auto sm:w-auto md:h-full md:w-full"
        />
      ) : null}
    </div>
  )
}

export default HomeVideoBlock

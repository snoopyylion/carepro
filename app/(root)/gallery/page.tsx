import Gallery from '@/components/Gallery'
import VideoGallery from '@/components/VideoGallery'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen'>
        <Gallery/>
        <VideoGallery/>        
    </div>
  )
}

export default page
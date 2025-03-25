import Cta from '@/components/Cta'
import React from 'react'

const page = () => {
  return (
    <div className="contact-us">
        <div className='header'>
            <h2 className="text-3xl sm:text-4xl font-bold text-green-600">Contact Us</h2>
        </div>
        <div className="description">
            <p>Any question or remarks? Just write us a message!</p>
        </div>
        <div className="contact-section">
            <div className="contact-left">

            </div>
            <div className="contact-right">
                
            </div>
        </div>
        <div className="cta-section">
            <Cta/>
        </div>
    </div>
  )
}

export default page
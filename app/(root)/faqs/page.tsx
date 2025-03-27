import ContactUs from '@/components/ContactUs'
import Cta from '@/components/Cta'
import FAQSection from '@/components/Faqs'
import React from 'react'

const page = () => {
  return (
    <div className='mt-14'>
      <FAQSection/>
      <ContactUs/>
      <Cta/>
    </div>
  )
}

export default page
import Image from 'next/image'
import React from 'react'
import Button from './Button'

const WhyChooseUs = () => {
  return (
    <section className="relative bg-[#17426F] text-white py-16 px-6 sm:px-10 md:px-20 overflow-visible">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative">
        
        {/* Left Side - Image (Starts at h2 and Extends Above Next Section) */}
        <div className="relative flex-1 md:static lg:absolute lg:top-[-1%] lg:-left-20 xl:-left-32 lg:w-[40%] lg:h-[180%] lg:max-h-none z-10">
          <Image 
            src="/img/whyimg.png" 
            width={500} 
            height={800} 
            alt="About Care-Pro Academy" 
            className="rounded-lg shadow-lg lg:overflow-visible"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 lg:pl-[45%]">
          
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose Us?
          </h2>

          {/* Description */}
          <p className="text-lg text-[#EDEDED] mb-6">
            At CarePro Academy, We Provide:
          </p>

          {/* Features */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Image src="/img/whyicon.png" width={20} height={20} alt="icon" />
              <p className="text-lg">
                Comprehensive Caregiver/Healthcare Assistant training to meet Visa processing standards.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Image src="/img/whyicon.png" width={20} height={20} alt="icon" />
              <p className="text-lg">
                Certificates are CPD certified, internationally recognized and accepted worldwide including UK, Canada & US.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Image src="/img/whyicon.png" width={20} height={20} alt="icon" />
              <p className="text-lg">
                Expert guidance on CV packaging to Global Health Care Assistance standards.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <Button title='ENROLL NOW' href="https://wa.me/2348125444216" containerClass="!bg-green-600 hover:!bg-green-700 text-white uppercase py-3 px-6 rounded-lg shadow-md transition-all"/>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

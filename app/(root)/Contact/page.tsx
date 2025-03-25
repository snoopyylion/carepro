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
                <div className="contact-info">
                    <div className="phone">
                        <div className="phone-icon">

                        </div>
                        <div className="phone-num">
                            <a href=""><p>+234 812 544 4216 </p></a> or <a href=""><p> +234 811 295 3103</p></a>
                        </div>
                    </div>
                    <div className="email">
                        <div className="email-icon">

                        </div>
                        <div className="email-ad">

                        </div>
                    </div>
                    <div className="address">
                        <div className="location-icon">

                        </div>
                        <div className="address">

                        </div>
                    </div>
                </div>
                <div className="contact-connect">
                    <div className="connect-">

                    </div>
                    <div className="social-icons">

                    </div>
                </div>
                <div className="card-theme-design">
                    <div className="elipseup">
                        <img src="/img/Ellipseup.png" alt="" />
                    </div>
                    <div className="elipsedown">
                    <img src="/img/Ellipsedown.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <div className="contact-form">
                    <div className="firstname">
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder='First Name'/>
                    </div>
                </div>         
            </div>
        </div>
        <div className="cta-section">
            <Cta/>
        </div>
    </div>
  )
}

export default page
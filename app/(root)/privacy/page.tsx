import React from 'react'

const page = () => {
  return (
    <section className="bg-white mt-14 py-16 px-4 sm:px-6 lg:px-20 text-gray-800">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#17426F] mb-8 text-center">
        Privacy Policy
      </h1>

      <p className="text-base sm:text-lg leading-relaxed mb-6">
        At CarePro Health Care Academy, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
      </p>

      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-[#17426F] mb-2">1. Information We Collect</h2>
          <p className="text-gray-700">
            We may collect personal information such as your name, email address, phone number, and any other information you provide when you enroll or contact us.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#17426F] mb-2">2. How We Use Your Information</h2>
          <p className="text-gray-700">
            Your information is used to provide and improve our services, process enrollments, communicate updates, and ensure a personalized experience.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#17426F] mb-2">3. Information Sharing</h2>
          <p className="text-gray-700">
            We do not sell or rent your personal information to third parties. We may share your data with trusted partners who help us operate our platform, subject to strict confidentiality.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#17426F] mb-2">4. Data Security</h2>
          <p className="text-gray-700">
            We implement appropriate technical and organizational security measures to protect your personal data from unauthorized access, use, or disclosure.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#17426F] mb-2">5. Your Rights</h2>
          <p className="text-gray-700">
            You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#17426F] mb-2">6. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy periodically. Any changes will be reflected on this page with an updated effective date.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#17426F] mb-2">7. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:careproacademyltd@gmail.com" className="hover:underline">careproacademyltd@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default page
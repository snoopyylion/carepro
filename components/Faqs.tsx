"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
      "question": "What is the duration of the training program?",
      "answer": "The duration of the training program varies depending on the specific course. Our caregiver training typically lasts between 6 to 12 weeks, with intensive practical and theoretical sessions to fully prepare students for international caregiving roles."
    },
    {
      "question": "What learning options are available?",
      "answer": "CarePro Academy offers flexible learning options, including in-person classes at our training center, online courses for remote learning, and hybrid programs that combine both. This ensures students can learn at their own pace while balancing other commitments."
    },
    {
      "question": "What certifications will I receive?",
      "answer": "Upon successful completion of the program, students receive internationally recognized certifications, including a Caregiver Certification, Basic Life Support (BLS) and First Aid certification, and other relevant healthcare qualifications required for overseas job placements."
    },
    {
      "question": "What are the benefits included in the program?",
      "answer": "Our program includes hands-on training with experienced healthcare professionals, visa guidance, and networking opportunities with global recruiters. Additionally, students receive mentorship and career counseling to help them transition into the caregiving profession abroad."
    }
  ]
  

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Subscribed successfully!");
        setEmail("");
      } else {
        setMessage("Subscription failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Try again.");
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#17426F] text-white py-16 px-4 sm:px-10 md:px-20">
      <div className="max-w-4xl mx-auto">
        {/* FAQ Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white tracking-wide mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-200 text-sm sm:text-base md:text-lg">
            Still have more questions? You can contact our team via
          </p>
          <p className="mb-10 text-center text-green-600 text-sm sm:text-base md:text-lg">
            <a href="mailto:careproacademyltd@gmail.com" className="hover:underline">
                careproacademyltd@gmail.com
              </a><br /> <span>
                <a href="tel:+2348125444216" className="hover:underline">
                  +234 812 544 4216
                </a>{" "}
                or{" "}
                <a href="tel:+2348112953103" className="hover:underline">
                  +234 811 295 3103
                </a>
              </span>
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-700 rounded-lg p-4 bg-gradient-to-r from-blue-950 to-green-950 hover:border-green-400 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <button
                  className="flex justify-between items-center w-full text-base sm:text-lg md:text-xl font-bold"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <FaChevronUp className="text-green-600" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="mt-2 text-gray-300 font-thin text-sm sm:text-base md:text-lg"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Subscribe Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-950 to-green-950 rounded-lg p-6 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-center text-white mb-4">
            Stay Updated with Our Latest Updates
          </h3>
          <p className="text-gray-300 text-center text-sm sm:text-base md:text-lg mb-4">
            Subscribe to get updates on our healthcare training programs and job opportunities.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base md:text-lg"
            />
            <button
              type="submit"
              className="group relative z-10 w-fit cursor-pointer overflow-hidden rounded-sm bg-green-600 hover:bg-green-700 font-semibold px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base shadow-md transition duration-300 uppercase"
            >
              Subscribe
            </button>

          </form>

          {message && (
            <p className="text-center mt-3 text-sm sm:text-base md:text-lg text-gray-300">
              {message}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

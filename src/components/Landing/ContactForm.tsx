import { useState } from "react";
import { motion, Variants, Transition } from "motion/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.08,
      } as Transition,
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      } as Transition,
    },
  };

  const inputClass =
    "w-full pl-11 pr-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-xl outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all duration-200 placeholder-gray-400";

  const iconClass =
    "absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 flex items-center pointer-events-none";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10 font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-gray-50 rounded-2xl shadow-md w-full max-w-2xl px-6 py-10 sm:px-10 sm:py-12"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-9">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-2">
            Contact Us
          </h1>
          <p className="text-sm text-gray-500">We&apos;d love to hear from you</p>
        </motion.div>

        {/* Row 1: Name + Phone — stacked on mobile, side-by-side on sm+ */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-4"
        >
          {/* Name */}
          <div className="relative flex-1">
            <span className={iconClass}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Phone */}
          <div className="relative flex-1">
            <span className={iconClass}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.08 6.08l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </motion.div>

        {/* Row 2: Email — full width on mobile, half width on sm+ */}
        <motion.div variants={itemVariants} className="mb-4">
          <div className="relative w-full sm:w-[calc(50%-8px)]">
            <span className={iconClass}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </motion.div>

        {/* Row 3: Message */}
        <motion.div variants={itemVariants} className="mb-6">
          <textarea
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-xl outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all duration-200 placeholder-gray-400 resize-y min-h-[140px]"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            onClick={handleSubmit}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-7 py-3 rounded-full transition-colors duration-200 cursor-pointer w-full sm:w-auto"
          >
            Submit Enquiry
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
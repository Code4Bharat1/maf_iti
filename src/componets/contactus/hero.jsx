"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMobileChange = (e) => {
    const value = e.target.value;
    const numbersOnly = value.replace(/[^0-9]/g, "");
    if (numbersOnly.length <= 10) {
      setFormData((prev) => ({
        ...prev,
        mobile: numbersOnly,
      }));
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
      setSubmitStatus("validation");
      setIsSubmitting(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("invalid_email");
      setIsSubmitting(false);
      return;
    }
    if (formData.mobile.length !== 10) {
      setSubmitStatus("invalid_mobile");
      setIsSubmitting(false);
      return;
    }

    // Backend untouched
  }

  return (
    <section className="py-12 bg-[#f5faff]">
      <h2 className="text-center text-4xl font-extrabold text-[#1F2A44] mb-10">
        Contact Us
      </h2>

      <div
        className="max-w-6xl mx-auto bg-cover bg-center overflow-hidden relative flex flex-col md:flex-row shadow-lg"
        style={{ backgroundImage: "url('/contactus/class.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F2A44]/80 via-[#1F2A44]/60 to-[#1F2A44]/40" />

        {/* Contact Info (Left) */}
        <div className="flex-1 text-white p-12 md:p-16 relative z-10 flex flex-col justify-center space-y-8 text-2xl">
          {/* Address - side by side */}
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-400 rounded-full p-3">
              <FaMapMarkerAlt className="text-white text-3xl" />
            </div>
            <div className="leading-snug">
              Mazgaon, Taluka Murud,<br />
              District Raigad,<br />
              Maharashtra – 402401
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-400 rounded-full p-3">
              <FaEnvelope className="text-white text-3xl" />
            </div>
            <p className="leading-snug">awtmtaft@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-400 rounded-full p-3">
              <FaPhone className="text-white text-3xl" />
            </div>
            <p className="leading-snug">+91 8983508919</p>
          </div>
        </div>

        {/* Contact Form (Right) */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 p-8 relative z-10 mx-6 md:mx-10 space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white outline-none placeholder-black"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-white outline-none placeholder-black"
            required
          />
          <div className="relative">
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleMobileChange}
              placeholder="Your Mobile no. (10 digits)"
              className="w-full p-3 rounded-lg bg-white outline-none placeholder-black"
              required
              maxLength="10"
              pattern="[0-9]{10}"
              title="Please enter exactly 10 digits"
            />
            <div className="absolute right-3 top-3 text-sm text-gray-500">
              {formData.mobile.length}/10
            </div>
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            rows={4}
            className="w-full p-3 rounded-lg bg-white outline-none placeholder-black"
            required
          />

          {/* Status messages (same as before) */}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#FFD700] hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md transition-colors duration-300"
            >
              {isSubmitting ? "SENDING..." : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

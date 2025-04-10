"use client";

import React from "react";
import Anims from '../components/Anims'

const ContactSection = () => {
  return (
    <div className="bg-primary py-12 items-center justify-center md:px-12 lg:px-24">
      <div className="w-full items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Get In Touch
        </h2>
        <p className="text-center text-white mt-2">
          Have questions? We're here to help with your hair donation journey.
        </p>

        <div className="mt-10 flex items-center justify-center gap-8">
          {/* Contact Information */}
          {/* <div className="bg-white ww-[400px] shadow-lg rounded-lg p-6 h-fit" >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-primary text-2xl"><IoMdMail /></span>
                <div>
                  <p className="font-medium text-gray-800">Email Us</p>
                  <p className="text-gray-600">contact@hairdonation555.org</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
              <span className="text-primary text-2xl"><FaPhoneAlt /></span> 
                <div>
                  <p className="font-medium text-gray-800">Call Us</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-primary text-2xl"><FaLocationDot /></span>
                <div>
                  <p className="font-medium text-gray-800">Visit Us</p>
                  <p className="text-gray-600">
                    123 Hair Care Street, Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Contact Form */}
          <Anims inAnimation="fadeIn" outAnimation="fadeOut"  delay={0.2}>
          <div className="bg-white shadow-lg w-[500px] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="text-gray-700 block mb-1">Your Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="text-gray-700 block mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="text-gray-700 block mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter subject"
                />
              </div>

              <div>
                <label className="text-gray-700 block mb-1">Message</label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
          </Anims>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

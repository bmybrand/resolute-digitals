"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  budget: string;
  country: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    console.log("Form Submitted:", data);
    // API call logic here
  };

  return (
    <section className="bg-[#0F1930] py-16 px-5 xl:px-49">
      <div className="mx-auto flex flex-col lg:flex-row gap-8 lg:gap-30">

        {/* Left: Contact Form */}
        <div className="rounded-2xl w-full lg:w-1/2">

  <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
    
    <div>
      <label className="text-lg text-white">Your Name*</label>
      <input
        type="text"
        {...register("name", { required: "Name is required" })}
        placeholder="John Doe"
        className="w-full mt-1 p-3 border border-white/10 text-base rounded-lg placeholder-white/30 text-white bg-[#172036]"
      />
      {errors.name && <p className="text-red-500 text-lg">{errors.name.message}</p>}
    </div>

    <div>
      <label className="text-lg text-white">Email*</label>
      <input
        type="email"
        {...register("email", { required: "Email is required" })}
        placeholder="JohnDoe23@gmail.com"
        className="w-full mt-1 p-3 border border-white/10 text-base rounded-lg placeholder-white/30 text-white bg-[#172036]"
      />
      {errors.email && <p className="text-red-500 text-lg">{errors.email.message}</p>}
    </div>

    <div>
      <label className="text-lg text-white">Phone*</label>
      <input
        type="tel"
        {...register("phone", { required: "Phone is required" })}
        placeholder="Enter Phone Number"
        className="w-full mt-1 p-3 border border-white/10 text-base rounded-lg placeholder-white/30 text-white bg-[#172036]"
      />
      {errors.phone && <p className="text-red-500 text-lg">{errors.phone.message}</p>}
    </div>

    <div className="relative">
      <label className="text-lg text-white">I’m Interested In*</label>
      
      <div className="mt-1 relative">
      <select
        {...register("interest", { required: "Please select interest" })}
        className="w-full  p-3 border border-white/10 text-base rounded-lg placeholder-white/30 text-white bg-[#172036] appearance-none pr-10"
      >
        <option value="" className="text-[#2378DA]">Select</option>
        <option value="web">Web Development</option>
        <option value="app">App Development</option>
        <option value="uiux">UI/UX Design</option>
        <option value="marketing">Digital Marketing</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      </div>
      {errors.interest && <p className="text-red-500 text-lg">{errors.interest.message}</p>}
    </div>

    <div className="relative">
      <label className="text-lg text-white">Budget Range (USD)*</label>
      
      <div className="mt-1 relative">
      <select
        {...register("budget", { required: "Please select budget" })}
        className="w-full  p-3 border border-white/10 text-base rounded-lg placeholder-white/30 text-white bg-[#172036] appearance-none pr-10"
      >
        <option value="" className="text-[#2378DA]">Select Range</option>
        <option value="1-5k">$1,000 – $5,000</option>
        <option value="5-10k">$5,000 – $10,000</option>
        <option value="10k+">$10,000+</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      </div>
      {errors.budget && <p className="text-red-500 text-lg">{errors.budget.message}</p>}
    </div>

    <div className="relative">
      <label className="text-lg text-white">Country*</label>
      <div className="mt-1 relative">
      <select
        {...register("country", { required: "Please select country" })}
        className="w-full  p-3 border border-white/10 text-base rounded-lg placeholder-white/30 text-white bg-[#172036] appearance-none pr-10"
      >
        <option value="" className="text-[#2378DA]">Select Country</option>
        <option value="us">United States</option>
        <option value="pk">Pakistan</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3  flex items-center ">
        <svg className=" w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      </div>
      {errors.country && <p className="text-red-500 text-lg">{errors.country.message}</p>}
    </div>

    <div className="md:col-span-2">
      <label className="text-lg text-white">Your Message*</label>
      <textarea
        {...register("message", { required: "Message is required" })}
        rows={4}
        placeholder="Enter here..."
        className="w-full h-50 mt-1 p-3 border border-white/10 text-base rounded-lg placeholder-white/30 text-white bg-[#172036]"
      />
      {errors.message && <p className="text-red-500 text-lg">{errors.message.message}</p>}
    </div>

    <div className="md:col-span-2">
      <button
        type="submit"
        className="z-10 bg-gradient-to-r from-[#2378DA] to-[#042F61] flex gap-1 font-medium relative text-white rounded-full hover:opacity-90 transition justify-center items-center whitespace-nowrap text-xs sm:text-lg md:text-base lg:text-lg  px-3 sm:px-5 md:px-6 lg:px-7  py-1 sm:py-2 md:py-3 lg:py-4  pointer-events-auto"
      >
        <span className="absolute inset-x-0 w-1/2 mx-auto -top-px bg-gradient-to-r from-transparent via-white to-transparent h-px" />
        <span>Send Message</span>
        <img src="/assets/Vector (Stroke).svg" className="pt-0.5 w-3 sm:w-3.5" alt="" />
      </button>
    </div>

  </form>
</div>


        {/* Right: Contact Info */}
        <div className="flex flex-col justify-center w-full lg:w-1/2">

  {/* Head Office */}
  <div className="mb-6 text-white">
    <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold mb-6 text-[#2378DA]">
Head Office</h2>
    <p className="text-[19px]">📧 info@resolutedigitals.com</p>
    <p className="mt-2 text-[19px]">📞 +1 (800) 465-7890</p>
    <p className="mt-2 text-[19px] opacity-80">
      Plot No. E-88, Block B Gulshan e Jamal, Karachi, 75260
    </p>
  </div>

  {/* US Office */}
  <div className="mb-6 text-white ">
    <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold mb-6 text-[#2378DA]">
US Office</h2>
    <p className="text-[19px]">📧 info@resolutedigitals.com</p>
    <p className="mt-2 text-[19px]">📞 +1 (800) 465-7890</p>
    <p className="mt-2 text-[19px] opacity-80">
      738, Fawn Valley Dr., Allen, TX 75002, United States
    </p>
  </div>


    <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold mb-6 text-[#2378DA]">
Stay Connected</h2>
  {/* Social Media Bubbles */}
  <div className="flex flex-wrap gap-4 mt-6">

    {/* Facebook */}
    <a
      href="#"
      className="flex items-center gap-2 px-4 py-2 border border-[#2378DA] bg-transparent rounded-full hover:bg-[#2378DA] transition"
    >
      <img src="/assets/facebook.svg" alt="Facebook" className="w-5 h-5" />
      <span className="text-white font-semibold">Facebook</span>
    </a>

    {/* Twitter */}
    <a
      href="#"
      className="flex items-center gap-2 px-4 py-2 border border-[#1DA1F2] bg-transparent rounded-full hover:bg-[#1DA1F2] transition"
    >
      <img src="/assets/twitter.svg" alt="Twitter" className="w-5 h-5" />
      <span className="text-white font-semibold">Twitter</span>
    </a>

    {/* Instagram */}
    <a
      href="#"
      className="flex items-center gap-2 px-4 py-2 border border-pink-500 bg-transparent rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 transition"
    >
      <img src="/assets/instagram.svg" alt="Instagram" className="w-5 h-5" />
      <span className="text-white font-semibold">Instagram</span>
    </a>

    {/* LinkedIn */}
    <a
      href="#"
      className="flex items-center gap-2 px-4 py-2 border border-[#0A66C2] bg-transparent rounded-full hover:bg-[#0A66C2] transition"
    >
      <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
      <span className="text-white font-semibold">LinkedIn</span>
    </a>

    {/* YouTube */}
    <a
      href="#"
      className="flex items-center gap-2 px-4 py-2 border border-red-600 bg-transparent rounded-full hover:bg-red-600 transition"
    >
      <img src="/assets/youtube.svg" alt="YouTube" className="w-5 h-5" />
      <span className="text-white font-semibold">YouTube</span>
    </a>
  </div>
</div>


      </div>
    </section>
  );
};

export default ContactSection;

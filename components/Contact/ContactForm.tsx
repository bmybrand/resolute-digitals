"use client";
import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  budget: string;
  country: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
  };

  return (
    <div className="mx-5 2xl:mx-58  border text-white border-white/15 rounded-3xl p-6 lg:p-12">
      <h2 className="text-3xl lg:text-4xl font-bold mb-8">
        Send Us a Message
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Name */}
        <div>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name*"
            className="w-full mt-2  border bg-[#0F1930] border-white/20 rounded-xl px-5 py-3 outline-none focus:border-[#2378DA] placeholder-white/50"
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email",
              },
            })}
            placeholder="Email*"
            className="w-full mt-2 border bg-[#0F1930] border-white/20 rounded-xl px-5 py-3 outline-none focus:border-[#2378DA] placeholder-white/50"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <input
            {...register("phone")}
            placeholder="Phone"
            className="w-full mt-2 border bg-[#0F1930] border-white/20 rounded-xl px-5 py-3 outline-none focus:border-[#2378DA] placeholder-white/50"
          />
        </div>

        {/* Interest */}
        <div className="relative">
          <div className="relative">
            <select
              {...register("interest", { required: "Please select interest" })}
              className="w-full mt-2 bg-[#0F1930] border border-white/20 rounded-xl px-5 py-3 outline-none focus:border-[#2378DA] appearance-none text-white"
            >
              <option value="">I'm Interested In*</option>
              <option>Web Development</option>
              <option>Mobile App</option>
              <option>UI/UX Design</option>
              <option>Marketing</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center mt-1.5">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          {errors.interest && (
            <p className="text-red-400 text-xs mt-1">{errors.interest.message}</p>
          )}
        </div>

        {/* Budget */}
        <div className="relative">
          <div className="relative">
            <select
              {...register("budget", { required: "Please select budget" })}
              className="w-full mt-2 bg-[#0F1930] border border-white/20 rounded-xl px-5 py-3 outline-none focus:border-[#2378DA] appearance-none text-white"
            >
              <option value="">Budget Range (USD)*</option>
              <option>$1,000 – $5,000</option>
              <option>$5,000 – $10,000</option>
              <option>$10,000 – $25,000</option>
              <option>$25,000+</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center mt-1.5">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          {errors.budget && (
            <p className="text-red-400 text-xs mt-1">{errors.budget.message}</p>
          )}
        </div>

        {/* Country */}
        <div className="relative">
          <div className="relative">
            <select
              {...register("country")}
              className="w-full mt-2 bg-[#0F1930] border border-white/20 rounded-xl px-5 py-3 outline-none focus:border-[#2378DA] appearance-none text-white"
            >
              <option value="">Select Country</option>
              <option>Pakistan</option>
              <option>USA</option>
              <option>UK</option>
              <option>UAE</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center mt-1.5">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <textarea
            rows={5}
            {...register("message", { required: "Message is required" })}
            placeholder="Cover Letter*"
            className="w-full mt-2 bg-[#0F1930] border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-[#2378DA] placeholder-white/50"
          />
          {errors.message && (
            <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#2378DA] to-[#134074] rounded-xl text-xl px-10 py-4  hover:opacity-90 transition bold font-bold"
          >
            Send a Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

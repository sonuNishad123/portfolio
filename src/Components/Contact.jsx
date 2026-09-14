import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setSubmitting(true);
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      await axios.post("https://getform.io/f/axojxerb", userInfo);
      toast.success("Your message has been sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="Contact"
      className="py-20 px-6 md:px-12 max-w-6xl mx-auto text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-accent-gradient inline-block">
          Get In Touch
        </h2>
        <p className="text-slate-400 mt-2 text-sm md:text-base">
          Have a question or want to work together? Drop a message!
        </p>
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-xl glass rounded-3xl p-8 md:p-12 space-y-6 hover-glow transition-all duration-300 relative overflow-hidden"
        >
          {/* Subtle neon ambient light */}
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-accent-solid/10 rounded-full blur-3xl pointer-events-none"></div>

          <h3 className="text-xl md:text-2xl font-bold text-slate-100 border-b border-slate-800 pb-4">
            Send Message
          </h3>

          {/* Full Name */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-slate-300"
            >
              Full Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              id="name"
              type="text"
              placeholder="Enter your fullname"
              className={`w-full bg-slate-950/60 border rounded-xl py-3 px-4 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 transition-all ${
                errors.name
                  ? "border-rose-500 focus:ring-rose-500 focus:border-rose-500"
                  : "border-slate-800 focus:ring-accent focus:border-accent"
              }`}
            />
            {errors.name && (
              <span className="text-xs text-rose-500 font-medium pl-1">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email Address */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-slate-300"
            >
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              id="email"
              type="email"
              placeholder="Enter your email address"
              className={`w-full bg-slate-950/60 border rounded-xl py-3 px-4 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 transition-all ${
                errors.email
                  ? "border-rose-500 focus:ring-rose-500 focus:border-rose-500"
                  : "border-slate-800 focus:ring-accent focus:border-accent"
              }`}
            />
            {errors.email && (
              <span className="text-xs text-rose-500 font-medium pl-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-slate-300"
            >
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              id="message"
              rows="4"
              placeholder="Enter your query or message..."
              className={`w-full bg-slate-950/60 border rounded-xl py-3 px-4 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 transition-all resize-none ${
                errors.message
                  ? "border-rose-500 focus:ring-rose-500 focus:border-rose-500"
                  : "border-slate-800 focus:ring-accent focus:border-accent"
              }`}
            />
            {errors.message && (
              <span className="text-xs text-rose-500 font-medium pl-1">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 px-6 font-bold uppercase tracking-wider rounded-xl bg-accent-gradient hover:opacity-90 text-white transition-all transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

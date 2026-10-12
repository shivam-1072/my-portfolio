"use client";

import { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const encodedFormData = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === "string") {
        encodedFormData.append(key, value);
      }
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedFormData.toString(),
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
        // Auto-hide success message after 6 seconds
        setTimeout(() => setFormStatus("idle"), 6000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full max-w-5xl mx-auto py-12 px-4 scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
        
        {/* LEFT SIDE - Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              Let&apos;s <span className="text-blue-600">Connect</span>
            </h2>
            <p className="text-gray-500">
              Have a project in mind or just want to chat? Reach out to me.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
              📧
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <a href="mailto:sshivam1072@gmail.com" className="text-gray-800 font-medium hover:text-blue-600">
                sshivam1072@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
              📱
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <a href="tel:+917506992276" className="text-gray-800 font-medium hover:text-blue-600">
                +91 7506992276
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
              🌐
            </div>
            <div>
              <p className="text-sm text-gray-500">Find me online</p>
              <div className="flex gap-4 mt-1">
                <a href="https://github.com/shivam-1072" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 text-sm font-medium">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/shivamsharma1072" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 text-sm font-medium">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">📍 Mumbai, India</p>
          </div>
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <div className="w-full bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Send a Message</h3>

          {/* ===== SUCCESS MESSAGE ===== */}
          {formStatus === "success" && (
            <div className="mb-4 p-4 bg-green-50 border-2 border-green-500 rounded-lg flex items-start gap-3 animate-fadeIn">
              <span className="text-2xl">✅</span>
              <div>
                <p className="text-green-800 font-bold">Message Sent Successfully!</p>
                <p className="text-green-700 text-sm mt-1">
                  Thanks for reaching out. I'll get back to you as soon as possible! 🚀
                </p>
              </div>
            </div>
          )}

          {/* ===== ERROR MESSAGE ===== */}
          {formStatus === "error" && (
            <div className="mb-4 p-4 bg-red-50 border-2 border-red-500 rounded-lg flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <div>
                <p className="text-red-800 font-bold">Oops! Something went wrong.</p>
                <p className="text-red-700 text-sm mt-1">
                  Please try again or email me directly at sshivam1072@gmail.com
                </p>
              </div>
            </div>
          )}

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input 
                type="text" 
                name="name"
                required
                placeholder="John Doe" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-900 bg-white placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="john@example.com" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-900 bg-white placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                rows={4} 
                name="message"
                required
                placeholder="Tell me about your project..." 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none text-gray-900 bg-white placeholder-gray-400"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={formStatus === "submitting"}
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === "submitting" ? "⏳ Sending..." : "📤 Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
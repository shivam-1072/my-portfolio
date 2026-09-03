"use client";

export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-5xl mx-auto py-12 px-4 scroll-mt-20">
      <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
        Let's <span className="text-blue-600">Connect</span>
      </h2>
      <p className="mb-10 text-gray-500 max-w-2xl">
        Have a project in mind or just want to chat? Reach out to me.
      </p>

      {/* SIMPLE FLEXBOX - NO GRID TRICKS */}
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* LEFT SIDE - Contact Info */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
              📧
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <a href="mailto:shivam1072@gmail.com" className="text-gray-800 font-medium hover:text-blue-600">
                shivam1072@gmail.com
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
                <a href="https://github.com/shivam-1072" target="_blank" className="text-gray-600 hover:text-blue-600 text-sm font-medium">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/shivamsharma1072" target="_blank" className="text-gray-600 hover:text-blue-600 text-sm font-medium">
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
        <div className="w-full md:w-1/2 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                rows={4} 
                placeholder="Tell me about your project..." 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              📤 Send Message
            </button>
            <p className="text-xs text-gray-400 text-center mt-2">
              * This is a demo form. For now, please email me directly.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
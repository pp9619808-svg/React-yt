import React from 'react'

const Contact = () => {
  return (
   <section className="py-20 px-10 bg-gray-100 min-h-screen ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Left Side */}
        <div>
          <h4 className="text-blue-600 font-bold text-lg mb-2">
            CONTACT US
          </h4>

          <h4 className="text-5xl font-bold mb-6 text-cyan-950">
            Get In Touch
          </h4>
           <p className="text-gray-600 text-lg mb-6">
            Have questions? Contact us anytime.
            We are here to help you.
          </p>

          <div className="space-y-4">
            <p className="text-gray-700">
              📍 India
            </p>

            <p className="text-gray-700">
              📞 +91 9876543210
            </p>

            <p className="text-gray-700">
              ✉️ travel@gmail.com
            </p>
          </div>
        </div>
         {/* Right Side Form */}
        <div className=" p-8 rounded-2xl shadow-xl">
          
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border text-cyan-950 p-3 rounded-lg outline-none focus:border-blue-600"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border text-cyan-950 p-3 rounded-lg outline-none focus:border-blue-600"
            />
             <input
              type="text"
              placeholder="Subject"
              className="w-full border text-cyan-950 p-3 rounded-lg outline-none focus:border-blue-600"
            
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border text-cyan-950 p-3 rounded-lg outline-none focus:border-blue-600"
            ></textarea>

            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
        </section>    


  )
}

export default Contact

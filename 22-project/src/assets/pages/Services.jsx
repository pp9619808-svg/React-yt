import React from 'react'

const Services = () => {
  const services = [
      {
      title: "Travel Guide",
      desc: "Best travel guides for your journey.",
      icon: "🌍",
    },

    {
      title: "Hotel Booking",
      desc: "Book hotels at affordable prices.",
      icon: "🏨",
    },
   {
      title: "Flight Booking",
      desc: "Easy and fast flight booking service.",
      icon: "✈️",
    },

    {
      title: "Adventure Trips",
      desc: "Enjoy exciting adventure activities.",
      icon: "⛰️",
    },

    {
      title: "24/7 Support",
      desc: "We are always here to help you.",
      icon: "📞",
    },
  {
      title: "Custom Packages",
      desc: "Personalized travel packages for everyone.",
      icon: "🎒",
    },
  ];

  return (
    <section className="py-20 px-10 bg-gray-100 min-h-screen">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h4 className="text-blue-600 font-bold text-lg">
          OUR SERVICES
        </h4>

        <h4 className=" text-cyan-900 text-5xl font-bold mt-3">
          What We Offer
        </h4>
 <p className="text-gray-600 mt-4 text-lg">
          Explore our best travel services.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {services.map((item, index) => (
          <div
            key={index}
            className=" bg-cyan-900 p-8 rounded-2xl shadow-xl hover:-translate-y-2 duration-300 text-center"
          >
            <div className="text-5xl mb-5">
              {item.icon}
            </div>

            <h2 className="text-2xl font-bold mb-3">
              {item.title}
            </h2>
               <p className="text-shadow-cyan-500">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
    
  )
}

export default Services

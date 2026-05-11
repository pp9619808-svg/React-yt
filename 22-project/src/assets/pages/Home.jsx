import React from 'react'
import About from './About';

const Home = () => {
  return (
    <>
      {/* Navbar */}
    
        <h1 className="text-3xl font-bold text-blue-600">
             TravelGo
        </h1>
       
      

      {/* Hero Section */}
      <section
        className="h-9/12 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        }}
      >
        <div className="w-full h-full bg-black/50 flex items-center">
          <div className=" pl-10 text-white">
            
                <h4 className="text-7xl  font-bold leading-tight ">
              Explore The World <br />
              With Us
            </h4>
            

            <p className="mt-5 text-xl w-125">
              Discover amazing places and make your
              journey unforgettable.
            </p>

            <div className="flex gap-5 mt-8">
              <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
                Get Started
              </button>

              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="flex justify-center  gap-8 px-10 -mt-20 relative z-10 text-black">
        <div className="bg-white  w-72 p-8  rounded-2xl shadow-xl text-center ">
         <div className='flex justify-center items-center ' >
            <img className="w-20 h-20  rounded-full object-cover  " src='https://media.istockphoto.com/id/174937309/photo/world-travel.jpg?s=2048x2048&w=is&k=20&c=fZJqY7ze-aN12qeOPxmPb7KSvnT37wJQSYLiAX7isqE='/>
         </div>
          <h2 className="text-2xl font-bold mb-3">
            Best Destinations
          </h2>

          <p className="text-gray-600">
            Explore top places around the world.
          </p>
        </div>

        <div className="bg-white w-72 p-8 rounded-2xl shadow-xl text-center">
          <div className='flex justify-center items-center ' >
            <img className="w-20 h-20  rounded-full object-cover  " src='https://images.unsplash.com/photo-1667113579462-0a2d6a988c5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fEhlYWRwaG9uZSUyMHdhbGElMjBzdXBwb3J0JTIwYWdlbnQlMjAlRjAlOUYlOTElQTklRTIlODAlOEQlRjAlOUYlOTIlQkJ8ZW58MHx8MHx8fDA%3D'/>
         </div>
          <h2 className="text-2xl font-bold mb-3">
            24/7 Support
          </h2>

          <p className="text-gray-600">
            We are always here to help you.
          </p>
        </div>

<div className="bg-white w-72 p-8 rounded-2xl shadow-xl text-center">
          <div className='flex justify-center items-center ' >
            <img className="w-20 h-20  rounded-full object-cover  " src='https://plus.unsplash.com/premium_photo-1764411368609-ab6368eba28c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWluaW1hbCUyMGljb25zJTIwd2l0aCUyMHRyYXZlbCUyMGVsZW1lbnRzfGVufDB8fDB8fHww'/>
         </div>
          <h2 className="text-2xl font-bold mb-3">
            Best Price Guarantee
          </h2>

          <p className="text-gray-600">
            We offer the best prices for your trips.
          </p>
        </div>


        <div className="bg-white w-72 p-8 rounded-2xl shadow-xl text-center">
           <div className='flex justify-center items-center ' >
            <img className="w-20 h-20  rounded-full object-cover  " src='https://media.istockphoto.com/id/2257846786/photo/vibrant-shield-icon-with-location-pin-symbolizing-security-protection-and-digital-privacy.webp?a=1&b=1&s=612x612&w=0&k=20&c=TY53mTkaZsdcPe6bqFnIowH0GhhIyIGijk4L8sQDf9Y='/>
         </div>
          <h2 className="text-2xl font-bold mb-3 ">
            Safe Travel
          </h2>
             <p className="text-gray-600">
            Your safety is our first priority.
          </p>
        
        </div>
      </section>
      
    </>
  );
}


export default Home

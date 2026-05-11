

 
const About = () =>{
  return (
    <section className="py-20 px-10 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="travel"
            className="rounded-2xl shadow-xl"
          />
        </div>

        {/* Content */}
        <div>
           
          <h4 className="text-blue-600 font-bold text-lg mb-2">
            ABOUT US
          </h4>
 <h4 className="text-5xl font-bold md-6 leading-tight   text-gray-600">
            We Create Journeys You Will Love
          </h4>
          
  <p className="text-gray-600 text-lg mb-6">
            We are passionate travelers who love exploring
            beautiful places around the world. Our mission is
            to make your travel experience unforgettable and
            full of adventure.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Read More
          </button>
        </div>
      </div>
    </section>

  )
}

export default About

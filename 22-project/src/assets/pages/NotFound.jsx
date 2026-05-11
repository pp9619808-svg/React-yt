import React from 'react'
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <section className="h-screen flex items-center justify-center  px-5">
      
      <div className="text-center">
        
        <h1 className="text-8xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="text-4xl font-bold mt-4 text-indigo-950 ">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link to="/">
          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 duration-300">
            Go To Home
          </button>
        </Link>

      </div>
    </section>

  )
}

export default NotFound

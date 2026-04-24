import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDatil = () => {

    const params=useParams()
    
  return (
    <div>
      <h1>{params.coursesId} Courses Detail Page</h1>
    </div>
  )
}

export default CoursesDatil

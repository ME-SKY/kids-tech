import React from 'react';
import './course.scss';

function Course({course}) {
  const {name, image, bgColor} = course;

  return (
    <div className="course" >
      <div className="course-image" style={{ backgroundColor: bgColor }}>
        <img src={image} alt="course-image" />
      </div>
      <div className="course-name">
        <h2>{name}</h2>
      </div>
    </div>
  )
}

export default Course;
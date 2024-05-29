import { useContext } from 'react';
import Course from '../../components/course';
import { CoursesProviderContext } from '../../providers';
import './courses.scss';

function Courses() {
  const { activeCourses } = useContext(CoursesProviderContext);

  return (
    <div className="courses">
      {
        activeCourses.map(course => <Course key={course.id} course={course} />)
      }
    </div>

  )
}

export default Courses
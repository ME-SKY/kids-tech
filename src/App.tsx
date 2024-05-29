import CoursesProvider from '@providers'
import Sidebar from '@containers/sidebar'
import Courses from '@containers/courses'
import './App.scss'

function App() {
  return (
    <CoursesProvider>
      <div className="App">
        <Sidebar />        
        <Courses />
      </div>
    </CoursesProvider>
  )
}

export default App

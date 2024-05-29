const CoursesApi = {
  getCourses: async () => {
    try {
      const response = await fetch('https://logiclike.com/docs/courses.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching courses:', error);
      return [];
    }
  }
}

export default CoursesApi;
import { useState, useEffect, useMemo, createContext } from "react";
import { DEFAULT_TAG_NAMES } from "../consts";
import CoursesApi from "@/api";

export const CoursesProviderContext = createContext<{
  courses: Course[],
  tagNames: TagNames,
  activeCourses: Course[],
  activeCategory: string | null,
  setActiveCategory: () => void
}>({
  courses: [],
  tagNames: new Set(),
  activeCourses: [],
  activeCategory: null,
  setActiveCategory: () => { },
});

const CoursesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [coursesData, setCoursesData] = useState<{ courses: Course[], tagNames: TagNames }>({ courses: [], tagNames: new Set() });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    CoursesApi.getCourses().then((data: Course[]) => {
      const tagNames: TagNames = new Set<string>(DEFAULT_TAG_NAMES);
      data.forEach(course => course.tags.forEach(tag => tagNames.add(tag)));
      setCoursesData({ courses: data, tagNames });
    })
  }, []);

  const activeCourses = useMemo(() => {
    if (activeCategory === null || activeCategory === DEFAULT_TAG_NAMES[0]) {
      return coursesData.courses.length > 0 ? coursesData.courses : [];
    } else {
      return coursesData.courses.filter(course => course.tags.includes(activeCategory))
    }
  },
    [activeCategory, coursesData.courses]
  );

  return (
    <CoursesProviderContext.Provider value={{ ...coursesData, activeCategory, activeCourses, setActiveCategory }}>
      {children}
    </CoursesProviderContext.Provider>
  );
};

export default CoursesProvider;

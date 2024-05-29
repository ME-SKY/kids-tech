import { useContext, useMemo } from 'react';
import Category from '../../components/category';
import { CoursesProviderContext } from '../../providers';
import './sidebar.scss';

function Sidebar() {
  const { tagNames, setActiveCategory, activeCategory } = useContext(CoursesProviderContext);

  const categories = useMemo(() => {

    if (!tagNames) {
      return;
    }
    return [...tagNames.values()].map(name =>
      <Category key={name} name={name}
        onClick={(name) => setActiveCategory(name)} isActive={activeCategory === name} />
    );
  }, [tagNames, setActiveCategory, activeCategory]);

  return (
    <nav className="sidebar">
      {categories}
    </nav>
  )
}

export default Sidebar
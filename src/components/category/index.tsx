import React from 'react'
import './category.scss';

function Category({ isActive, name, onClick }) {
  return (
    <div className={`category ${isActive ? 'active' : ''}`} onClick={() => onClick(name)}>
      <h2>
        {name}
      </h2>
    </div>
  )
}

export default Category;
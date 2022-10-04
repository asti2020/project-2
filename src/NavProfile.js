import React from 'react'

export const NavProfile = () => {
    const handleCategoryChange =(e) =>{
        console.log(e.target.value);
    }
  return (
    <div>
        <div className="dropdown">
            <span>Product Filter</span>
            <div className="dropdown-content">
            <select
        name="category-list"
        id="category-list"
        onChange={handleCategoryChange}
      >
         <option value="">All</option>
         <option value="">Outdoor</option>
         <option value="">Indoor</option>
         <option value="">Aquatics</option>
      </select>
            </div>
        </div>
        <div className="dropdown">
            <span>Product Price Filter</span>
            <div className="dropdown-content">
        <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
        >
            <option value="">All</option>
            <option value="">Outdoor</option>
            <option value="">Indoor</option>
            <option value="">Aquatics</option>
        </select>
            </div>
        </div>
  </div>
  )
}

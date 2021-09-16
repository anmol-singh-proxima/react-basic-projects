import React from 'react'

function Category({ categories, filterItems }) {
    return (
        <article className="btn-container">
            {categories.map((category, index) => {
                return (
                    <button 
                        key={index}
                        className="filter-btn"
                        onClick={() => filterItems(category)}
                    >{category}
                    </button>
                );
            })}
        </article>
    )
}

export default Category;
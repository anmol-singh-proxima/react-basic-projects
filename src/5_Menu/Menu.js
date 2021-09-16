import React from 'react'

function Menu({ items }) {
    return (
        <section className="section-center">
            {items.map((menuItem) => {
                const {id, title, category, price, desc, img} = menuItem;
                return <article className="menu-item">
                    <img src={img} alt={title} className="photo" />
                    <div className="item-info">
                        <header>
                            <h4>{title}</h4>
                            <p className="price">${price}</p>
                        </header>
                        <p className="item-text">{desc}</p>
                    </div>
                </article>
            })}
        </section>
    )
}

export default Menu;
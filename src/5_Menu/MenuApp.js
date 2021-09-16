import React, {useState} from 'react';
import Menu from './Menu';
import Category from './Category';
import items from "./data";
import "./style.css";

const allCategories = ["all", ...new Set(items.map(item => item.category))];

function MenuApp() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if(category === "all") {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter(item => item.category === category);
        setMenuItems(newItems);
    }

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline" />
                </div>
                <Category categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    )
}

export default MenuApp;
import React, {useState} from 'react';
import List from './List';
import data from "./data";
import "./style.css";

function BirthdayReminderApp() {
    const [people, setPeople] = useState(data);
    return (
        <main>
            <section className="container">
                <h3>{people.length} Birthdays Today</h3>
                <List people={people} />
                <button onClick={() => setPeople([])}>Clear All</button>
            </section>
        </main>
    )
}

export default BirthdayReminderApp;
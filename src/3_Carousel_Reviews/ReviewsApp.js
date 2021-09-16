import React, {useState} from 'react';
import Reviews from './Reviews';
import reviews from "./data";
import "./style.css";

function ReviewsApp() {
    const [people, setPeople] = useState(reviews);
    return (
        <main>
            <section className="container">
                <div className="title">
                    <h2>our reviews</h2>
                    <div className="underline" />
                </div>
                <Reviews people={people} />
            </section>
        </main>
    )
}

export default ReviewsApp;
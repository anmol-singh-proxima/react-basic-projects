import React, {useState} from 'react';
import PersonSliderOne from './PersonSliderOne';
import PersonSliderTwo from './PersonSliderTwo';
import data from "./data";
import "./style.css";

function SliderApp() {
    const [people, setPeople] = useState(data);

    return (
        <section className="section">
            <div className="title">
                <h2><span>/</span>reviews</h2>
                <div className="uderline" />
            </div>
            <div className="section-center">
                {/* Comment any one Component and check for the other and vice versa */}
                <PersonSliderOne people={people} />
                {/* <PersonSliderTwo people={people} /> */}
            </div>
        </section>
    )
}

export default SliderApp;
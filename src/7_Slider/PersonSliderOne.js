import React, {useState, useEffect} from 'react';
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import { FaQuoteRight } from 'react-icons/fa';

function PersonSliderOne({people}) {
    const [index, setIndex] = useState(0);

    // Set the correct index number
    useEffect(() => {
        const lastIndex = people.length - 1;
        if(index > lastIndex) {
            setIndex(0);
        }
        if(index < 0) {
            setIndex(lastIndex);
        }
    }, [index]);

    // Set the automation of the Slider
    useEffect(() => {
        const slider = setInterval(() => {
            setIndex(index + 1);
        }, 3000);

        return () => {
            clearInterval(slider);
        }
    }, [index]);

    return (
        <>
        {people.map((person, personIndex) => {
            const {id, image, name, title, quote} = person;

            // Set the CSS class to the article based on the index number
            let position = "nextSlide";
            if(personIndex === index) {
                position = "activeSlide";
            }
            if(personIndex === index-1 || (index === 0 && personIndex === people.length-1)) {
                position = "lastSlide";
            }

            return <article key={id} className={position}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p>{title}</p>
                <p>{quote}</p>
                <FaQuoteRight className="icon" />
            </article>
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronsLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronsRight />
        </button>
        </>
    )
}

export default PersonSliderOne;
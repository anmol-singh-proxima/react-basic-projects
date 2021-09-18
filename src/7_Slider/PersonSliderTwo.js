import React, {useState, useEffect} from 'react';
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import { FaQuoteRight } from 'react-icons/fa';

function PersonSliderTwo({people}) {
    const [index, setIndex] = useState(0);
    const [arraySize, setArraySize] = useState(people.length);

    // Check the index number for its correctness
    const checkIndexNumber = (number) => {
        if(number >= arraySize) {
            number = 0;
        }
        if(number < 0) {
            number = arraySize - 1;
        }
        return number;
    }

    // Decrease the index number by 1 and move the slide backward
    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1;
            return checkIndexNumber(index);
        })
    }

    // Increase the index number by 1 and move the slide forward
    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1;
            return checkIndexNumber(index);
        })
    }

    // Set the interval to automate the forward movement of Slider
    useEffect(() => {
        const slider = setInterval(nextSlide, 3000);
        return () => {
            clearInterval(slider);
        }
    }, [index]);

    return (
        <>
        {people.map((person, personIndex) => {
            const {id, name, title, image, quote} = person;

            let position = "nextSlide";
            if(personIndex === index) {
                position = "activeSlide";
            }
            if(personIndex === index-1 || (index === 0 && personIndex === arraySize-1)) {
                position = "lastSlide"
            }

            return <article key={id} className={position}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p>{title}</p>
                <p>{quote}</p>
                <FaQuoteRight className="icon" />
            </article>
        })}
        <button className="prev" onClick={prevSlide}>
            <FiChevronsLeft />
        </button>
        <button className="next" onClick={nextSlide}>
            <FiChevronsRight />
        </button>
        </>
    );
}

export default PersonSliderTwo;
import React, {useState} from 'react';
import { FaQuoteRight, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

function Reviews({people}) {
    const [index, setIndex] = useState(0);
    const {name, job, text, image} = people[index];

    const checkNumber = (number) => {
        if(number > people.length - 1) {
            number = 0;
        }
        if(number < 0) {
            number = people.length - 1;
        }
        return number;
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if(randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    }

    return (
        <div className="review">
            <div className="img-container">
                <img src={image} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="btn-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaAngleDoubleLeft />
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaAngleDoubleRight />
                </button>
            </div>
            <button className="random-btn" onClick={randomPerson}>surprise me</button>
        </div>
    );
}

export default Reviews;
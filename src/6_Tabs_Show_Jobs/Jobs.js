import React, {useState} from 'react';
import { BsChevronDoubleRight } from "react-icons/bs";

function Jobs({jobs}) {
    const [value, setValue] = useState(0);
    const {id, title, dates, duties, company} = jobs[value];
    return (
        <section className="section">
            <div className="title">
                <h2>experience</h2>
                <div className="underline" />
            </div>
            <div className="jobs-center">
                <div className="btn-container">
                    {jobs.map((job, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => setValue(index)}
                                className={`job-btn ${value === index && 'active-btn'}`}
                            >
                                {job.company}
                            </button>
                        )
                    })}
                </div>
                <div className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-dates">{dates}</p>
                    {duties.map((duty, index) => {
                        return (
                            <div className="job-desc">
                                <BsChevronDoubleRight className="job-icon" />
                                <p>{duty}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Jobs;
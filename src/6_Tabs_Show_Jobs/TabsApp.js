import React, {useState, useEffect} from 'react';
import Jobs from './Jobs';
import "./style.css";
const url = "https://course-api.com/react-tabs-project";

export default function TabsApp() {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setJobs(data);
            setLoading(false);
        } catch(error) {
            setLoading(false);
            console.log("ERROR: ", error);
        }
    }

    useEffect(() => {
        fetchJobs()
    }, []);

    if(loading) {
        return <section className="section loading">
            <h2>loading...</h2>
        </section>
    }

    return (
        <Jobs jobs={jobs} />
    )
}
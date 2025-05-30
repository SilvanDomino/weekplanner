import { useEffect, useState } from "react"
import { Day } from "./Day";
import { format } from "date-fns";
import styles from './Weekplanner.module.css';

export function Weekplanner({ periodWeek }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("./data.json")
            .then(response => response.json())
            .then(content => setData(content))
    }, [])

    
    if (data === null) {
        return (
            <section>
                <h1>Weekplanner</h1>
                <p>Loading week</p>
            </section>
        )
    } else{
        const thisWeekEvents = FilterEvents2(data);
        return (
            <section className={styles.weekPlanner}>
                <h1 className={styles.header}>Weekplanner</h1>
                <ul className={styles.weekCalender}>
                    {thisWeekEvents.map(day => {
                        return <Day date={day.date} events={day.events} key={day.date.getDay()}/>
                    })}
                </ul>

            </section>
        )
    }
    

}

function FilterEvents2(data) {
    let filteredEvents = [];
    const date = new Date();
    const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 1, 0);
    
    for (let i = 0; i < 5; i++) {
        let date = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i);
        let strDate = format(date, 'yyyy-MM-dd');
        filteredEvents.push(
            {
                date: date,
                events: data[strDate] ? data[strDate] : []
            }
        )
    }
    return filteredEvents;
}
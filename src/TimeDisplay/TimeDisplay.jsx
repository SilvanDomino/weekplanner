import styles from './TimeDisplay.module.css';
import { useEffect, useState } from 'react';
import { getWeek } from 'date-fns';

export function TimeDisplay({periodWeek}) {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        // Update the time every second
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(timer);
    }, []);

    let dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    return (
        <section className={styles.timeDisplay}>
            <div className={styles.date}>{date.toLocaleDateString("nl-NL", dateOptions)}</div>
            <div className={styles.weekNumber}>Week: {getWeek(date)}</div>
            <div className={styles.periodWeek}>P{periodWeek.period}.W{periodWeek.week}</div>
            <div className={styles.time}>
                {date.toLocaleTimeString("nl-NL", timeOptions)}
            </div>
        </section>
    )
}
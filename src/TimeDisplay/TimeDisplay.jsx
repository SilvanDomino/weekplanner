import styles from './TimeDisplay.module.css';
import { useEffect, useState } from 'react';
import { getWeek } from 'date-fns';
import { se } from 'date-fns/locale';

export function TimeDisplay() {
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
        weekday: "short",
        month: "long",
        day: "numeric",
    };
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit'
    };
    const timeSecOptions = {
        second: '2-digit'
    };
    return (
        <section className={styles.timeDisplay}>
            <div className={styles.date}>{date.toLocaleDateString("nl-NL", dateOptions)}</div>
            <div className={styles.time}>
                {date.toLocaleTimeString("nl-NL", timeOptions)}<span>:{date.toLocaleTimeString("nl-NL", timeSecOptions)}</span>
            </div>
            <div className={styles.weekContainer}>
                <div className={styles.weekTile}>Week: {getWeek(date)}</div>
                <div className={styles.period}>
                    <span>Periode 1</span>
                    <span>Week 7</span>
                </div>
            </div>
        </section>
    )
}
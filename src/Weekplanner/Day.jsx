import styles from './Weekplanner.module.css';

export function Day({date, events}){
    const dateOptions = {
        weekday: "long",
        month: "long",
        day: "numeric",
    };
    if(events.length===0){
        return (
            <li className={styles.day}>
                <div className={styles.date}>
                    {date.toLocaleDateString("nl-NL", dateOptions)}
                </div>
            </li>
        )
    }
    return (
        <li className={styles.day}>
            <div className={styles.date}>
                {date.toLocaleDateString("nl-NL", dateOptions)}
            </div>
            <ul className={styles.events}>
                {events.map((event, index) =>{
                    return <li className={styles.event} key={index}>{event}</li>
                })}
            </ul>
            
        </li>
    )
}
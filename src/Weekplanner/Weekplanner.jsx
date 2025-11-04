import { useEffect, useState } from "react"
import { TrelloEvent } from "./TrelloEvent";
import styles from './Weekplanner.module.css';
import { FutureEvent } from "./FutureEvent";


export function WeekplannerT() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const url = "https://weekplanner.mediacollege.dev/getCards.php";
        const settings = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
        fetch(url, settings)
            .then(response => response.json())
            .then(content => setData(content))
            .catch(err=>console.error(err))
    }, [])

    
    if (data === null) {
        return (
            <section>
                <h1>Weekplanner</h1>
                <p>Loading week</p>
            </section>
        )
    } else{
        let futureEvents = getFutureEvents(data);
        let formattedData = filterSortCards(data);
        return (
            <section className={styles.weekPlanner}>
                <h1 className={styles.header}>Weekplanner</h1>
                <ul className={styles.weekCalender}>
                    {formattedData.map(card => {
                        return <TrelloEvent trelloCard={card} key={card.id}/>
                    })}
                    
                </ul>
                <ul className={styles.futureEvents}>
                    {futureEvents.map(card => {
                        return <FutureEvent trelloCard={card} key={card.id}/>
                    })}
                </ul>
            </section>
        )
    }
}
function getFutureEvents(data){
    data.forEach(element => {
        element.date = new Date(element.due);
    });
    let now = new Date();
    data = data.filter(element => {
        return element.date > new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    });
    data.sort((a, b)=>{
        if(a.due == null){
            return 1;
        }
        if(a.date < b.date){
            return -1;
        } else if(a.date > b.date){
            return 1;
        } else return 0;
    });
    return data;
}
function filterSortCards(data){
    data.forEach(element => {
        element.date = new Date(element.due);
    });
    let now = new Date();
    data = data.filter(element => {
        return element.date < new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    });
    data.sort((a, b)=>{
        if(a.due == null){
            return 1;
        }
        if(a.date < b.date){
            return -1;
        } else if(a.date > b.date){
            return 1;
        } else return 0;
    });
    return data;
}

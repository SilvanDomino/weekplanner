import { useEffect, useState } from "react"
import { TrelloEvent } from "./TrelloEvent";
import styles from './Weekplanner.module.css';


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

    let formattedData = data;
    if (data === null) {
        return (
            <section>
                <h1>Weekplanner</h1>
                <p>Loading week</p>
            </section>
        )
    } else{
        formattedData = sortCards(formattedData);
        return (
            <section className={styles.weekPlanner}>
                <h1 className={styles.header}>Weekplanner</h1>
                <ul className={styles.weekCalender}>
                    {formattedData.map(card => {
                        return <TrelloEvent trelloCard={card} key={card.id}/>
                    })}
                </ul>

            </section>
        )
    }
}
function sortCards(data){
    data.forEach(element => {
        element.date = new Date(element.due);
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

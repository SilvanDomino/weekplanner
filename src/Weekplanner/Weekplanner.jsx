import { useEffect, useState } from "react"
import { TrelloEvent } from "./TrelloEvent";
import styles from './Weekplanner.module.css';

export function WeekplannerT() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const url = "https://api.trello.com/1/lists/68ccfc627a0245274a1f9825/cards?key=c5f7c16db786ddf46b16c25f9ec7fffe&token=ATTA3dc8035b07e58b88d8ca76bc3f0946b5c0faebee5029485dbeeb5292a367983cE6AB4D91";
        const settings = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
        fetch(url, settings)
            .then(response => response.json())
            .then(content => setData(content))
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
async function fetchCard(id){
    const url = "https://api.trello.com/1/cards/NBiho7dI?key=c5f7c16db786ddf46b16c25f9ec7fffe&token=ATTA3dc8035b07e58b88d8ca76bc3f0946b5c0faebee5029485dbeeb5292a367983cE6AB4D91";
    const settings = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
    let response = await fetch(url, settings)
    let data = await response.json();
    return data;
}
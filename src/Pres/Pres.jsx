import { useState, useEffect } from "react"
import clsx from "clsx";
import styles from "./Pres.module.css";
import { PersonDot } from "./PersonDot";

export function Pres(){
    const [data, setData] = useState(null);
    const fetchPresData = async()=>{
        let url = "present.json";
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }
    useEffect(()=>{
        fetchPresData()
        .then(presData=>setData(presData));
    }, [])
    
    if(data){
        return(
            <div className={styles.pres}>
                {data.map(person=>{
                    return <PersonDot person={person}/>
                })}
            </div>
        )
    } else {
        return "Loading";
    }
    

    
}


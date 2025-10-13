import clsx from "clsx";
import styles from "./Pres.module.css";

export function PersonDot({person}){
    let today = (new Date()).getDay() -1;
    return (
        <div className={styles.personDot}>
            <div className="name">
                {person.code}
            </div>
            <div className={clsx(
                styles.dot,
                {
                    [styles["SD"]]: person.pres[today] == "SD",
                    [styles["out"]] : !person.pres[today],
                }
                )}></div>
        </div>
    )
}
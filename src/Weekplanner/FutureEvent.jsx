import styles from "./FutureEvent.module.css";
export function FutureEvent({ trelloCard }) {
  const dateOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };
  
  return (
    <li className={styles.event}>
      <h3 className={styles.name}>{trelloCard.name}</h3>
      {trelloCard.due ? DateFormat():""}
    </li>
  );

  function DateFormat() {
    if (trelloCard.due) {
      return (
        <div className={styles.date}>
          {trelloCard.date.toLocaleDateString("nl-NL", dateOptions)}
        </div>
      );
    } else {
      return <div>no date</div>;
    }
  }
}

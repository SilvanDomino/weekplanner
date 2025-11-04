import styles from "./Event.module.css";
import clsx from "clsx";
export function TrelloEvent({ trelloCard }) {
  const dateOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  let todoStatus = isDueCheck();
  
  return (
    <li className={clsx(
        styles.event,
        !todoStatus && styles.noDate,              //No date found
        todoStatus == "pastDue" && styles.pastDue,  //Date is in the past
        todoStatus == "today" && styles.isToday,    //Date is today
        todoStatus == "future" && styles.future,    //Date is in the future
    )}>
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
  /*Returns future, today or pastDue*/
  function isDueCheck(){
    if(trelloCard.due){
      let today = new Date();
        if(trelloCard.date.getFullYear() === today.getFullYear() &&
            trelloCard.date.getMonth() === today.getMonth() &&
            trelloCard.date.getDate() === today.getDate()){
          return "today";
        } else if(today < trelloCard.date){
          return "future";
        } else if(today > trelloCard.date){
          return "pastDue";
        }
    } else return false;
  }
}

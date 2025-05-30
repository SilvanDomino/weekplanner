
export function Day({date, events}){
    const dateOptions = {
        weekday: "long",
        month: "long",
        day: "numeric",
    };
    return (
        <li>
            <div>
                {date.toLocaleDateString("nl-NL", dateOptions)}
            </div>
            <ul>
                {events.map((event, index) =>{
                    return <li key={index}>{event}</li>
                })}
            </ul>
            
        </li>
    )
}
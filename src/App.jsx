
import './App.css'
import { TimeDisplay } from './TimeDisplay/TimeDisplay'
import { Weekplanner } from './Weekplanner/Weekplanner';

function App() {
  const periodWeek = { period: 4, week: 4 };

  return (
    <main>
      <h1>Welkom Software Development Team</h1>
      <TimeDisplay periodWeek={periodWeek}/>
      <Weekplanner/>
    </main>
    
  )
}

export default App

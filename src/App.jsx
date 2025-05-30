
import './App.css'
import { TimeDisplay } from './TimeDisplay/TimeDisplay'
import { Weekplanner } from './Weekplanner/Weekplanner';

function App() {
  const periodWeek = { period: 4, week: 4 };

  return (
    <main className='app'>
      <Weekplanner/>
      <TimeDisplay periodWeek={periodWeek}/>
      
    </main>
    
  )
}

export default App

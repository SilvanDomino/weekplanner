
import './App.css'
import { Pres } from './Pres/Pres';
import { TimeDisplay } from './TimeDisplay/TimeDisplay'
import { WeekplannerT } from './Weekplanner/Weekplanner';

function App() {

  return (
    <main className='app'>
      <WeekplannerT/>
      <div className='rightbar'>
        <TimeDisplay/>
        <Pres/>
      </div>
      
      
    </main>
    
  )
}

export default App

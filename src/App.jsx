import { useState } from 'react'
import './index.css';
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'


function App() {
  	const [workout, setWorkout] = useState(null)
	const [destiny, setDestiny]     = useState('individual')
	const [muscles, setMuscles]     = useState([])
	const [goal, setGoal]			= useState('strength_power')

	function updateWorkout() {
		if (muscles.length < 1) {
		  return
		}
		let newWorkout = generateWorkout({ destiny, muscles, goal })
		setWorkout(newWorkout)
		console.log(newWorkout)
		window.location.href = '#workout'
	  }

  return (
    <>
      <main className='min-h-screen flex flex-col bg-gradient-to-l
		from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
          <Hero/>
		  {/*  We pass the data from the App.jsx cause we need it in order to se the 
		  		workout */}
          <Generator
			destiny={destiny}
		  	setDestiny={setDestiny}
		  	muscles={muscles}
		  	setMuscles={setMuscles}
		  	goal={goal}
		  	setGoal={setGoal}
			updateWorkout={updateWorkout}
		  />
		  {/*  Only display workout if there's one */}
          {workout && (<Workout workout={workout} />)}
      </main>
    </>
  )
}

export default App

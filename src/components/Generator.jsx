import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import Button from './Button'
import { WORKOUTS } from '../utils/user'
import { SCHEMES } from '../utils/user'

function Header(props){
	const { index, title, description } = props

	return (
		<div className='flex flex-col gap-4'>
			<div className='flex items-center justify-center gap-2'>
				<p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>
					{index}
				</p>
				<h4 className='text-xl sm:text-2xl md:text-3xl'>
					{title}
				</h4>
			</div>
			<p className='text-sm sm:text-base mx-auto'>{description}</p>
		</div>
	)
}

export default function Generator(props) {
	const { muscles, setMuscles, destiny, setDestiny, goal, setGoal, updateWorkout } = props
	const [showModal, setShowModal] = useState(false)

	// let showModal = false   This line won't work due to its an interactive element so we need a useState variable

	function toggleModal() {
		setShowModal(!showModal)
	}

	function updateMuscles(muscleGroup) {
		// If the muscleGroup is already selected, remove it
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 2) {
            return
        }

        if (destiny !== 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }
		// Add the selected one to the muscleGroup
        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2) {
            setShowModal(false)
        }

    }

	return (
		<SectionWrapper id={'generate'} header={"Crea tu entrenamiento"} title={["Son las", " a entrenar ", "en punto"]}>
			<Header index={'01'} title={'Elige tu destino'} description={'Elige el entrenamiento que deseas mejorar'}></Header>
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
				{/*  We get the key object and call map() that calls the callbackfn one time for eachelement in the array WORKOUT
				 also when you render content like this you have to give the parent element a key that's unique (typeIndex in our case) */}
			{Object.keys(WORKOUTS).map((type, typeIndex) => {
				return(
					// We have to call the function with the useState setter cause if we'd called like toggleModal()
					// it will be called when the page is actually painted
					<button onClick={() => {
						// We set the setMuscles array empty whenever we click on a trainment
						 setMuscles([]) 
						 setDestiny(type)
						}} className={'bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg cursor-pointer'
					 + (type === destiny ? ' border-blue-600 ' : ' border-blue-400')} key={typeIndex}>
						<p className='capitalize'>
							{type.replaceAll('_', " ")}
						</p>
					</button>
				)
			})}
			</div>
			<Header index={'02'} title={'Fija tus objetivos'} description={'Elige qué músculos machacar'}></Header>
			<div className="bg-slate-950 p-3 border border-solid border-blue-400 rounded-lg flex flex-col">
				<button onClick={ toggleModal }className='relative flex items-center justify-center cursor-pointer'>
					<p className='capitalize'>{muscles.length == 0 ? 'Seleccione grupo muscular' : muscles.join(' ')}</p>
					<i className="fa-solid fa-caret-down absolute right-3"></i>
				</button>
					{/*  Declare a condition to display so we need useState, either it wont work */}
				{showModal && (
					<div className='flex flex-col px-3 pb-3'>
						{/*  First condition is due to the WORKOUTS structure, we need to check wether
								 is an string array or an object  */}
						{(destiny === 'individual' ? WORKOUTS[destiny] : Object.keys(WORKOUTS[destiny])).map((muscleGroup, muscleGroupIndex) => {
							return (
								<button onClick={() => {
									updateMuscles(muscleGroup)
								}} key={muscleGroupIndex} className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}>
									<p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
								</button>
							)
						})}
					</div>
				)}
			</div>
			<Header index={'03'} title={'Conviértete en Machoke'} description={'Selecciona tu objetivo final'}></Header>
			<div className="grid grid-cols-3 gap-4">
				{/*  We get the key object and call map() that calls the callbackfn one time for eachelement in the array WORKOUT
				 also when you render content like this you have to give the parent element a key that's unique (typeIndex in our case) */}
			{Object.keys(SCHEMES).map((scheme, schemeIndex) => {
				return(
					<button onClick={() => {
						setGoal(scheme)
					}
					} className={'bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg cursor-pointer'
					 + (scheme === goal ? ' border-blue-600 ' : ' border-blue-400')} key={schemeIndex}>
						<p className='capitalize'>
							{scheme.replaceAll('_', " ")}
						</p>
					</button>
				)
			})}
			</div>
			<Button func={updateWorkout} text="Formular"></Button>
		</SectionWrapper>
		
	)
}

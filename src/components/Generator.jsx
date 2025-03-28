import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
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

export default function Generator() {

	const [showModal, setShowModal] = useState(false)
	const [destiny, setDestiny]     = useState('individual')
	const [muscles, setMuscles]     = useState([])
	const [coals, setGoals]			= useState('strength_power')

	// let showModal = false   This line won't work due to its an interactive element so we need a useState variable

	function toggleModal() {
		setShowModal(!showModal)
	}

	return (
		<SectionWrapper header={"Crea tu entrenamiento"} title={["Son las", " a entrenar ", "en punto"]}>
			<Header index={'01'} title={'Elige tu destino'} description={'Elige el entrenamiento que deseas mejorar'}></Header>
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
				{/*  We get the key object and call map() that calls the callbackfn one time for eachelement in the array WORKOUT
				 also when you render content like this you have to give the parent element a key that's unique (typeIndex in our case) */}
			{Object.keys(WORKOUTS).map((type, typeIndex) => {
				return(
					<button className={'bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg '
										 + (type === destiny ? 'border-blue-600' : 'border-blue-400')} key={typeIndex}>
						<p className='capitalize'>
							{type.replaceAll('_', " ")}
						</p>
					</button>
				)
			})}
			</div>
			<Header index={'02'} title={'Fija tus objetivos'} description={'Elige qué músculos machacar'}></Header>
			<div className="bg-slate-950 p-3 border border-solid border-blue-400 rounded-lg flex flex-col">
				<button onClick={() => {
					setDestiny(type)
				}

				} className='relative flex items-center justify-center cursor-pointer'>
					<p>Seleccione grupo muscular</p>
					<i className="fa-solid fa-caret-down absolute right-3"></i>
				</button>
					{/*  Declare a condition to display so we need useState, either it wont work */}
				{showModal && (
					<div>
						modal
					</div>
				)}
			</div>
			<Header index={'03'} title={'Conviértete en Machoke'} description={'Selecciona tu objetivo final'}></Header>
			<div className="grid grid-cols-3 gap-4">
				{/*  We get the key object and call map() that calls the callbackfn one time for eachelement in the array WORKOUT
				 also when you render content like this you have to give the parent element a key that's unique (typeIndex in our case) */}
			{Object.keys(SCHEMES).map((scheme, schemeIndex) => {
				return(
					<button className='bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg' key={schemeIndex}>
						<p className='capitalize'>
							{scheme.replaceAll('_', " ")}
						</p>
					</button>
				)
			})}
			</div>
		</SectionWrapper>
	)
}

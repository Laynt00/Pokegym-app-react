import React from 'react'
import Button from './Button'

export default function Hero() {
	return (
		<div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto'>
			<div className='flex flex-col gap-4 p-4'>
			<p>HORA DE PONERSE</p>
			<h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>MACHOKE</h1>
			</div>
			<p className='text-sm md:text-base font-light'>
				Por la presente, reconozco que puedo volverme increíblemente
				<span className='text-blue-400 font-medium'> magro </span>
				 y acepto todos los riesgos de convertirme en una <span className='text-blue-400 font-medium'>masiva masa de músculo</span>,
				incapaz de pasar por los cuadros puertas.
			</p>
			<Button func={() => {
				window.location.href = '#generate'
			}} text="Aceptar y Empezar"></Button>
		</div>
  )
}

import React from 'react'

export default function Button(props) {
const { text, func } = props

  return (
	<button onClick={func} className='px-8 mx-auto py-4 rounded-md border-2 border-blue-400 border-solid bg-slate-900 blueShadow duration-200'>
				<p>
					{text}
				</p>
			</button>
  )
}

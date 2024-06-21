'use client';
import React from 'react'

const EventHandling = () => {
  return (
    <div>
        <h1 className='text-center text-2xl font-bold'>Event Handling</h1>

        <button onClick={ () => { alert ('Button was clicked')} } > Click me </button>
        <input  className='border-2 border-gray-500 block w-full mt-3'
         type="text"
         onChange={(e) => ( console.log(e.target.value))}
         />

        <input type="color" onChange = {(e) => {document.body.style.backgroundColor = e.target.value }} />
    </div>
  )
}

export default EventHandling;
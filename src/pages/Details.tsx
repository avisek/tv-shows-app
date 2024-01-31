import { useState } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'

export default function Details() {
  const [searchParams] = useSearchParams()
  
  const name = searchParams.get('name')
  
  return (
    <div className="about">
      <h2>Show Details</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident
        consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut
        dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis
        quia illum officia obcaecati provident nulla odio molestiae suscipit
        quasi.
      </p>
      
      <button>Book Movie Ticket</button>
    </div>
  )
}

import React from 'react'
import Products from '../Components/Products'

export default function Home() {
  return (
    <div>
        <h1 className='heading'>Welcome to the redux toolkit</h1>
        <section>
            <h3>Products</h3>
            <Products/>
        </section>
    </div>
  )
}

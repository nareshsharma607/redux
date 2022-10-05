import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'

export default function Cart() {
  const items=useSelector((state)=>state.cart)
  const dispatch=useDispatch()
  const handleRemove=(productId)=>{
    dispatch(remove(productId))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {items.map((product)=>(<div key={product.id+items.length} className='cartCard'>
          <img src={product.image}/>
          <h5>{product.title}</h5>
          <h5>{product.price}</h5>
          <button onClick={handleRemove(product.id)}>Remove</button>
        </div>))}
      </div>
    </div>
  )
}

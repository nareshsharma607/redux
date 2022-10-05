import React, { useEffect, useState } from 'react'
 import {useDispatch} from 'react-redux'
 import {add} from '../store/cartSlice'
export default function Products() {
    const [products,setProducts]=useState([])
    const dispatch=useDispatch()
    useEffect(()=>{
        const fetchProducts=async()=>{
            const res=await fetch('https://fakestoreapi.com/products')
            const data=await res.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts();
    },[])
   function handleAdd(product){
            dispatch(add(product))
    }
  return (
    <div className='productsWrapper'>
        {products.map((product)=>{
            return <div className='card' key={product.id}>
                
                <img src={product.image}/>
                <h4>product.title</h4>
                <h5>product.price</h5>
                <button  onClick={()=>{handleAdd(product)}} className='btn'>Add to cart</button>
            </div>
        })}

    </div>
  )
}

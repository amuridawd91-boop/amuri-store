import { useEffect, useState } from 'react'
import './App.css'
import ProductCard from './ProductCard'
import CurrentCart from './Cart'


function App() {
  const [cart, setCart] = useState([])

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => setProducts(data.products))
  }, [])


  function handleCart(product){
      if (cart.some(item => item.product.id === product.id)){
      setCart(cart.map((item) =>{
          if (item.product.id === product.id){
            return {...item, quantity: item.quantity + 1}
          } else {
            return item
          }
      }))
        
      } else {
       return setCart([...cart, {product, quantity: 1 }])
      }
    }

  function handleRemove(key){
     setCart(cart => {
     return cart.filter((item) => item.product.id !== key)
      })
  }

  function handleIncrease(productId){
    setCart(cart.map((item) =>{
          if (item.product.id === productId){
            return {...item, quantity: item.quantity + 1}
          } else {
            return item
          }
      }))

  }

  function handleDecrease(productId){
    const itemToDecrease = cart.find((item) => item.product.id === productId)
    if (itemToDecrease.quantity > 1){
     setCart(cart.map(item => item.product.id === productId ? {...item, quantity: item.quantity - 1} : item)
    )} else if (itemToDecrease.quantity === 1){ 
      setCart(cart.filter((item)=> item.product.id !== productId))
    }
    
  }



  return (
    <>
      <section id="center">
        <div className='cart-section'>
        <p>Cart {cart.length}</p>
        <CurrentCart cartHolder = {cart} delete = {handleRemove} increase = {handleIncrease} decrease = {handleDecrease}/>
        </div>
        <div className='products-grid'>
          {products.map((product) => {
              
            return  <ProductCard key = {product.id} product = {product} cart = {handleCart}/>  
             
              
          })}
          
         </div>
         
      </section>

      
    </>
  )
}

export default App

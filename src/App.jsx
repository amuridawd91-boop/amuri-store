import { useEffect, useState } from 'react'
import './App.css'
import ProductCard from './ProductCard'
import CurrentCart from './Cart'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './ProductDetails'


function App() {
  const [cart, setCart] = useState([])

  const [products, setProducts] = useState([])

  const [showCart, setShowCart] = useState(false)

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

      setShowCart(false)
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

  function openCart(){
    setShowCart(!showCart)
  }

  function cartTotal(){
  return cart.reduce((total, item) => 
    total + (item.product.price * item.quantity)

  , 0)
  }



  return (
    <Routes>

      <Route
        path="/"
        element={
          <>
            <section id="center">
              <div className='cart-button-wrapper'>
                  <button onClick = {openCart} className='cart-button'>🛒</button>
                  <span className='cart-badge'>{cart.length}</span>
              </div>
              {showCart ? (
                  <div className='cart-section' >
                        <CurrentCart cartHolder = {cart} delete = {handleRemove} increase = {handleIncrease} decrease = {handleDecrease} totalPrice = {cartTotal()}/>
                  </div>) : null }
        
              <div className='products-grid'>
                {products.map((product) => {
                  return  <ProductCard key = {product.id} product = {product} cart = {handleCart}/>  
             })}
              </div>
         
            </section>

          </>
        }
      />

      <Route
      path="/products/:id"
      element={<ProductDetails products = {products}/>}
      />

    </Routes>
  )
  
}

export default App

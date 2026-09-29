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
      setCart([...cart, product])
      console.log("added to cart")
  }



  return (
    <>
      <section id="center">
        <p>Cart {cart.length}</p>
        <CurrentCart cartHolder = {cart}/>
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

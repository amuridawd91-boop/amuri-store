import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProductCard from './ProductCard'


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

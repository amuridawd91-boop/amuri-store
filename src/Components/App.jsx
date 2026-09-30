import { useEffect, useState } from 'react'
import '../../public/App.css'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import About from './About'

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart){
      return JSON.parse(savedCart)
    }
    return []
  })

  const [products, setProducts] = useState([])

  const [showCart, setShowCart] = useState(false)

   useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => setProducts(data.products))
  }, [])

   useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
      if  (cart.length === 0){
          setShowCart(false)
      }
    }, [cart])

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
            <Header 
                cart={cart}
                openCart={openCart}
            />
            <Home
                products={products}
                cart={cart}
                showCart={showCart}
                openCart={openCart}
                handleCart={handleCart}
                handleRemove={handleRemove}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
                cartTotal={cartTotal}
              />
            <Footer />
          </>
        }
      />

      <Route
      path="/products/:id"
      element={<ProductDetails products = {products}/>}
      />
      <Route path="/about" element={<About />} />
    </Routes>
  )
  
}

export default App

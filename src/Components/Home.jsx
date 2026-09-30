import ProductCard from "./ProductCard"
import CurrentCart from "./Cart"
import '../../public/App.css'

function Home(props) {
  return (
    <section id="center">    

      {props.showCart && props.cart.length > 0 ? (
        <div className="cart-section">
          <CurrentCart
            cartHolder={props.cart}
            delete={props.handleRemove}
            increase={props.handleIncrease}
            decrease={props.handleDecrease}
            totalPrice={props.cartTotal()}
          />
        </div>
      ) : null}

      <div className="products-grid">
        {props.products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              cart={props.handleCart}
            />
          )
        })}
      </div>

    </section>
  )
}

export default Home
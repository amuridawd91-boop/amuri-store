import ProductCard from "./ProductCard"
import CurrentCart from "./Cart"

function Home(props) {
  return (
    <section id="center">

      <div className="cart-button-wrapper">
        <button onClick={props.openCart} className="cart-button">
          🛒
        </button>

        <span className="cart-badge">
          {props.cart.length}
        </span>
      </div>

      {props.showCart ? (
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
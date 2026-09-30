
 function Header(props){
      return    (  
      <header className="store-header">
              <div className="store-brand">
                  <div className="store-logo">🛍️</div>

                  <div>
                    <h1>Amuri Store</h1>
                    <p>Simple shopping, built with React</p>
                  </div>
              </div>
              <div className="header-actions">
                <div className="store-nav">
                  <span>Shop</span>
                  <span>About</span>
                </div>
                <div className="header-cart">
                    <button onClick={props.openCart} className="cart-button">
                      🛒
                    </button>

                    <span className="cart-badge">
                         {props.cart.length}
                    </span>
                </div>
              </div>  
      </header>
        )}

export default Header;
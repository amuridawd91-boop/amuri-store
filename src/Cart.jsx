import './App.css'


function CurrentCart(props){

 return (
    props.cartHolder.map((item) =>
        <div key ={item.product.id} className='cart-item' >
        <p>{item.product.title}</p>
        <p>{item.product.price}$</p>
        <img src= {item.product.thumbnail} alt= {item.product.title}/>
        <div className="quantity-controls">
        <button onClick={() => props.decrease(item.product.id)}>-</button>
        <p>{item.quantity}</p>
        <button onClick={()=> props.increase(item.product.id)}>+</button>
        </div>
        <button className = "remove-button" onClick={() => props.delete(item.product.id)}>Remove</button>
        </div>
    )
 )

}



export default CurrentCart
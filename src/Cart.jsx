

function CurrentCart(props){

 return (
    props.cartHolder.map((item) =>
        <div key ={item.product.id}>
        <p>{item.product.title}</p>
        <p>{item.product.price}$</p>
        <p>{item.quantity}</p>
        <button onClick={() => props.delete(item.product.id)}>Remove</button>
        </div>
    )
 )

}



export default CurrentCart


function CurrentCart(props){

 return (
    props.cartHolder.map((product) =>
        <div key ={product.id}>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <button onClick={() => props.delete(product.id)}>Remove</button>
        </div>
    )
 )

}



export default CurrentCart
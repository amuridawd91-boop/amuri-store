

function CurrentCart(props){

 return (
    props.cartHolder.map((product) =>
        <div key ={product.id}>
        <p>{product.title}</p>
        <p>{product.price}</p>
        </div>
    )
 )

}



export default CurrentCart
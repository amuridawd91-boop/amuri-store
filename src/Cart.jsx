

function CurrentCart(props){

 return (
    props.cartHolder.map(() =>
        <>
        <p>{props.title}</p>
        <p>{props.price}</p>
        </>
    )
 )

}



export default CurrentCart
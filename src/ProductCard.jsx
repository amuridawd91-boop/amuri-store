import { useState } from "react";



function ProductCard(props){
     return (
     <div className="product-card">
        <p>{props.product.title}</p>
        <img src = {props.product.thumbnail}/>
        <p>{props.product.price} $</p>
        <button onClick = {() => props.cart(props.product)}>Add to Cart</button>
    </div>
    )
}



export default ProductCard;
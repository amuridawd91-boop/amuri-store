import { useState } from "react";
import "./App.css";


function ProductCard(props){
     return (
     <div className="product-card">
        <p>{props.product.title}</p>
        <img src = {props.product.thumbnail}/>
        <p>{props.product.price} $</p>
        <button className = "add-cart-button" onClick = {() => props.cart(props.product)}>Add to Cart</button>
    </div>
    )
}



export default ProductCard;
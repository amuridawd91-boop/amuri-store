import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";


function ProductCard(props){
    return (
    <div className="product-card">
        <Link to={`/products/${props.product.id}`} className="product-link">
            <p>{props.product.title}</p>
            <img src = {props.product.thumbnail}/>
            <p>{props.product.price} $</p>
        </Link>
        <button className = "add-cart-button" onClick = {() => props.cart(props.product)}>Add to Cart</button>
    </div>        
    )
}



export default ProductCard;
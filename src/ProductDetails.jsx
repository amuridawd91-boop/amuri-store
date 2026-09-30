
import { useParams } from "react-router-dom"

function ProductDetails(props) {
  const { id } = useParams()

  const product = props.products.find(
    (item) => item.id === Number(id)
  )

  if (!product) {
    return <p>Loading...</p>
  }

  return (
    <div className="product-details">
      <img src={product.thumbnail} alt={product.title} />

      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>{product.price} $</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
        <p>Brand: {product.brand}</p>
      </div>
    </div>
  )
}

export default ProductDetails
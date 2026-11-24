
function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children
}) {
  return (
    <div className={`product-card ${!inStock ? "out-of-stock" : ""}`}>
      <div className="badge-container">
        {children}
      </div>

      <h2>{title}</h2>

      <p className="product-category">
        Category: {category}
      </p>

      <p className="product-price">
        Price: ₱{price.toFixed(2)}
      </p>

      {inStock ? (
        <p className="stock-status in-stock">In Stock</p>
      ) : (
        <p className="stock-status out-of-stock-label">Out of Stock</p>
      )}

      <button
        onClick={() => onAddToCart(title)}
        disabled={!inStock}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

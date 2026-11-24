
import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import products from "./data/products";
import "./App.css";

function App() {
  // Lab 3 cart states
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  // Lab 4 states
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // Debounce Effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  // Filter and Sort Products
  const filteredProducts = [...products]
    .filter((product) =>
      product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .filter((product) =>
      category === "All" || product.category === category
    );

  if (sortOrder === "low-to-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-to-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  // Update Document Title Effect
  useEffect(() => {
    document.title = `CvSU Mini Store (${filteredProducts.length} results)`;
  }, [filteredProducts.length]);

  // Add to Cart callback
  const handleAddToCart = (productTitle) => {
    setCartCount(cartCount + 1);
    setLastAdded(productTitle);
  };

  // Clear Filters callback
  const handleClearFilters = () => {
    setSearchText("");
    setCategory("All");
    setSortOrder("default");
  };

  return (
    <div className="app">
      <header className="header">
        <h1>CvSU Mini Store</h1>
        <p>Welcome to our Mini Product Catalog!</p>
      </header>

      <div className="cart-message">
        {cartCount === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <p>
            Items added to cart: {cartCount}
            (Last added: {lastAdded})
          </p>
        )}
      </div>

      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        category={category}
        setCategory={setCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        onClear={handleClearFilters}
      />

      <p className="product-count">
        Showing {filteredProducts.length} of {products.length} products
      </p>

      <main className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              inStock={product.inStock}
              onAddToCart={handleAddToCart}
            >
              {product.id === 1 && <span className="badge">New</span>}
              {product.id === 5 && <span className="badge">Sale</span>}
            </ProductCard>
          ))
        ) : (
          <p className="empty-message">
            No products found. Try a different keyword or category.
          </p>
        )}
      </main>
    </div>
  );
}

export default App;

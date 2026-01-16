import { useState } from "react";
import products from "../data/products";
import { useCart } from "../context/CartContext";

function Products({ showDiscountBadge = false, onlyDiscounts = false }) {
  const [search, setSearch] = useState("");
  const { addToCart } = useCart();

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) =>
      onlyDiscounts ? product.discount : true
    );

  return (
    <div style={{ padding: "40px" }}>
      <h2>{onlyDiscounts ? "Ofertas 🔥" : "Productos"}</h2>

      {!onlyDiscounts && (
        <input
          type="text"
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "10px", marginBottom: "20px" }}
        />
      )}

      <div className="products-grid">
        {filteredProducts.map((product) => {
          const finalPrice = product.discount
            ? product.price * (1 - product.discount)
            : product.price;

          const ahorro = product.discount
            ? product.price - finalPrice
            : 0;

          return (
            <div className="product-card" key={product.id}>
              {product.image && (
                <img src={product.image} alt={product.name} />
              )}

              <h3>{product.name}</h3>
              <p>{product.description}</p>

              {/* BADGE SOLO EN OFERTAS */}
              {showDiscountBadge && product.discount && (
                <span className="badge">
                  -{product.discount * 100}%
                </span>
              )}

              {/* PRECIOS */}
              <p className="price">
                {product.discount && (
                  <span className="old-price">
                    ${product.price.toFixed(2)}
                  </span>
                )}
                <strong>${finalPrice.toFixed(2)}</strong>
              </p>

              {/* AHORRO */}
              {product.discount && (
                <p className="ahorro">
                  Ahorras ${ahorro.toFixed(2)}
                </p>
              )}

              <button onClick={() => addToCart(product)}>
                Agregar al carrito
              </button>
            </div>
          );
        })}
      </div>

      {onlyDiscounts && filteredProducts.length === 0 && (
        <p>No hay ofertas disponibles en este momento.</p>
      )}
    </div>
  );
}

export default Products;

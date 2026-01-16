import products from "../data/products";
import { useCart } from "../context/CartContext";

function Ofertas() {
  const { addToCart } = useCart();

  const ofertas = products.filter(
    (product) => Number(product.discount) > 0
  );

  return (
    <div className="ofertas-container fade-in">
      <h2>🔥 Ofertas Especiales</h2>

      <p className="ofertas-subtitle">
        Aprovecha nuestros descuentos por tiempo limitado.
        ¡Ahorra más en tus productos favoritos!
      </p>

      {ofertas.length === 0 ? (
        <p>No hay ofertas disponibles en este momento. ¡Vuelve pronto!</p>
      ) : (
        <div className="products-grid">
          {ofertas.map((product) => {
            const finalPrice = product.price * (1 - product.discount);
            const ahorro = product.price - finalPrice;
            const envioGratis = finalPrice > 500;

            return (
              <div className="product-card slide-up" key={product.id}>
                {product.discount && (
                  <div className="badge">
                    {product.discount * 100}% OFF
                  </div>
                )}

                <img
                  src={product.image || "/placeholder.png"}
                  alt={product.name}
                  loading="lazy"
                />

                <h3>{product.name}</h3>
                <p>{product.description}</p>

                <div style={{ margin: "10px 0" }}>
                  {envioGratis && (
                    <span
                      style={{
                        display: "inline-block",
                        background: "#2563eb",
                        color: "#fff",
                        padding: "4px 8px",
                        borderRadius: "8px",
                        fontSize: "0.8rem",
                        marginRight: "6px",
                      }}
                    >
                      🚚 Envío gratis
                    </span>
                  )}
                </div>

                <div className="price">
                  <span className="old-price">
                    ${product.price.toFixed(2)}
                  </span>
                  <strong>${finalPrice.toFixed(2)}</strong>
                </div>

                <p className="ahorro">Ahorras ${ahorro.toFixed(2)}</p>

                <button
                  onClick={() => addToCart(product)}
                  aria-label={`Agregar ${product.name} al carrito`}
                >
                  Agregar al carrito
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Ofertas;

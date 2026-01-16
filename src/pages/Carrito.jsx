import { useCart } from "../context/CartContext";

function Carrito() {
  const { cart, removeFromCart, total } = useCart();

  if (cart.length === 0) {
    return (
      <h2 style={{ padding: "40px", textAlign: "center" }}>
        Tu carrito está vacío 🛒
      </h2>
    );
  }

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>🛒 Carrito de compras</h2>

      {cart.map((item) => {
        const finalPrice =
          item.price * (1 - (item.discount || 0));

        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
            }}
          >
            <div>
              <strong>{item.name}</strong>
              {item.quantity && <span> x{item.quantity}</span>}
              <p>
                {item.discount && (
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#9ca3af",
                      marginRight: "6px",
                    }}
                  >
                    ${item.price.toFixed(2)}
                  </span>
                )}
                <span>${finalPrice.toFixed(2)}</span>
              </p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                background: "#ef4444",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "4px 8px",
                cursor: "pointer",
              }}
            >
              ❌ Eliminar
            </button>
          </div>
        );
      })}

      <h3 style={{ marginTop: "20px" }}>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default Carrito;

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.png"; // tu logo

function Header() {
  const { cart } = useCart();

  return (
    <header className="header">
      {/* Logo + Nombre */}
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
        <img src={logo} alt="Logo ElectroHogar" style={{ width: "120px" }} />
        <h1 style={{ fontSize: "1.8rem", color: "white", margin: 0 }}>ElectroHogar</h1>
      </Link>

      {/* Navegación */}
      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/ofertas">Ofertas</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/carrito">🛒 ({cart.length})</Link>
      </nav>
    </header>
  );
}

export default Header;

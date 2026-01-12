import "./App.css";
import logo from "./assets/logo.png";


function App() {
  return (
    <div className="container">
      {/* HEADER */}
     <header className="header">
  <div className="logo-container">
    <img src={logo} alt="Logo ElectroHogar" className="logo-img" />
    <h1 className="logo">ElectroHogar</h1>
  </div>

  <nav className="nav">
    <a href="#">Inicio</a>
    <a href="#">Productos</a>
    <a href="#">Ofertas</a>
    <a href="#">Contacto</a>
  </nav>
</header>


      {/* HERO */}
      <section className="hero">
        <h2>Electrodomésticos para tu hogar</h2>
        <p>Calidad, tecnología y confianza en un solo lugar</p>
      </section>

      {/* INFO */}
      <section className="info">
        <div className="card">
          <h3>Calidad Garantizada</h3>
          <p>Productos seleccionados con altos estándares.</p>
        </div>

        <div className="card">
          <h3>Precios Accesibles</h3>
          <p>Ofertas pensadas para tu presupuesto.</p>
        </div>

        <div className="card">
          <h3>Soporte Técnico</h3>
          <p>Atención y asesoría para cada compra.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 ElectroHogar | Proyecto académico</p>
      </footer>
    </div>
  );
}

export default App;


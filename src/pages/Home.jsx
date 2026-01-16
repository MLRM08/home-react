import Hero from "../components/Hero";
import Info from "../components/Info";

function Home() {
  return (
    <div>
      {/* Hero principal */}
      <Hero />

      {/* Sección de información / beneficios */}
      <Info />

      {/* Sección llamativa para atraer usuarios */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg, #2563eb, #9333ea)",
          color: "white",
          borderRadius: "20px",
          margin: "60px 40px",
        }}
      >
        <h2 style={{ fontSize: "2.8rem", marginBottom: "20px" }}>
          ✨ Dale vida a tu hogar con nuestros electrodomésticos
        </h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "30px", maxWidth: "600px", marginInline: "auto" }}>
          Descubre productos de calidad, tecnología y confianza. ¡Todo lo que tu hogar necesita en un solo lugar!
        </p>

        <a
          href="/productos"
          style={{
            display: "inline-block",
            background: "white",
            color: "#2563eb",
            padding: "16px 36px",
            borderRadius: "12px",
            fontSize: "1.1rem",
            fontWeight: "700",
            textDecoration: "none",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
          }}
        >
          🛒 Explora Productos
        </a>
      </section>
    </div>
  );
}

export default Home;

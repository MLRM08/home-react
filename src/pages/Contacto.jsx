import { useState } from "react";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // evita recargar la página
    console.log("Mensaje enviado:", { nombre, correo, mensaje });
    setEnviado(true);

    // Limpiar formulario
    setNombre("");
    setCorreo("");
    setMensaje("");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Contacto</h2>
      <p>¿Tienes alguna pregunta? Escríbenos.</p>

      {enviado && <p style={{ color: "green" }}>¡Mensaje enviado con éxito! ✅</p>}

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <textarea
          placeholder="Mensaje"
          rows="4"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        ></textarea>
        <button type="submit" style={{ padding: "10px 20px" }}>Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;

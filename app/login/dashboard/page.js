export default function Dashboard() {
  return (
    <main style={{ padding: 20, textAlign: "center" }}>
      <h1>Área interna</h1>

      <p>Bem-vindo ao seu espaço de apoio TEA</p>

      <a href="https://wa.me/5581988057613?text=Preciso de ajuda com TEA">
        <button style={{
          padding: 15,
          marginTop: 20,
          background: "#25D366",
          color: "#fff",
          border: "none",
          borderRadius: 8
        }}>
          Falar no WhatsApp
        </button>
      </a>
    </main>
  );
}

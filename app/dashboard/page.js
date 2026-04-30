export default function Home() {
  return (
    <main style={{ padding: 20, textAlign: "center" }}>
      <h1>Meu Apoio TEA</h1>

      <p>Plataforma de apoio para famílias e profissionais</p>

      <a href="/login">
        <button style={{
          padding: 15,
          marginTop: 20,
          background: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: 8
        }}>
          Entrar
        </button>
      </a>
    </main>
  );
}

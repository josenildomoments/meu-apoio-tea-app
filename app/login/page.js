export default function Login() {
  return (
    <main style={{ padding: 20, textAlign: "center" }}>
      <h1>Login</h1>

      <input
        placeholder="Seu email"
        style={{
          padding: 12,
          width: "100%",
          maxWidth: 300,
          marginBottom: 10
        }}
      />

      <br />

      <button style={{
        padding: 12,
        width: "100%",
        maxWidth: 300,
        background: "#000",
        color: "#fff",
        borderRadius: 8
      }}>
        Entrar
      </button>
    </main>
  );
}

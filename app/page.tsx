export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontFamily: "Arial"
    }}>
      <h1>Meu Apoio TEA</h1>
      <p>App funcionando 🚀</p>

      <a href="/auth">Entrar</a>
    </main>
  )
}

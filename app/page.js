import Link from "next/link";

export default function Login() {
  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h1>Login</h1>

      <input
        placeholder="Seu email"
        style={{ padding: 10, width: "80%", maxWidth: 300 }}
      />

      <br /><br />

      <Link href="/dashboard">
        <button
          style={{
            padding: 12,
            width: "80%",
            maxWidth: 300,
            background: "#000",
            color: "#fff",
            borderRadius: 8
          }}
        >
          Entrar
        </button>
      </Link>
    </div>
  );
}

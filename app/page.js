import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h1>Meu Apoio TEA</h1>
      <p>Plataforma de apoio para famílias e profissionais</p>

      <br />

      <Link href="/login">
        <button
          style={{
            padding: 12,
            background: "#4CAF50",
            color: "#fff",
            borderRadius: 10
          }}
        >
          Entrar
        </button>
      </Link>
    </div>
  );
}

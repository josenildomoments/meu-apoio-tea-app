"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h1>Login</h1>

      <input
        placeholder="Seu email"
        style={{ padding: 10, width: "80%", maxWidth: 300 }}
      />

      <br /><br />

      <button
        onClick={() => router.push("/dashboard")}
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
    </div>
  );
}

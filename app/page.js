"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/dashboard")}>
      Entrar
    </button>
  );
}

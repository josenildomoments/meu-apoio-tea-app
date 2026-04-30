export const metadata = {
  title: 'Meu Apoio TEA',
  description: 'App para famílias e profissionais TEA',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

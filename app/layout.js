export const metadata = {
  title: 'XIA',
  description: 'No se puede no existe. COSMONTO SEFRIDJE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body style={{margin:0, background:'#0a0a0a', color:'#e5e5e5'}}>{children}</body>
    </html>
  )
}

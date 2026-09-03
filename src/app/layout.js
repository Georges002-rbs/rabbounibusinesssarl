export const metadata = {
  title: 'Rabbouni Business SARL',
  description: 'Site officiel de Rabbouni Business SARL',
}
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
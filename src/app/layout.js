import './globals.css';

export const metadata = {
  title: 'Rabbouni Business SARL',
  description: 'Entreprise Multisectorielle Internationale - Des solutions diversifiées, un seul partenaire.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-[#0f172a] text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
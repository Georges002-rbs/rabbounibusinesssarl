export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-blue-400">
          Rabbouni Business SARL
        </h1>
        <p className="text-gray-300">
          Bienvenue sur notre plateforme officielle.
        </p>

        <footer className="mt-12 pt-6 border-t border-blue-900 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Rabbouni Business SARL. Tous droits réservés.
        </footer>
      </div>
    </main>
  );
}
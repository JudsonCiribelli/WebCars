import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-9xl font-bold text-gray-200">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Ops! Página não encontrada.
      </h2>
      <p className="text-gray-600 mt-2 mb-8 max-w-md">
        Parece que você pegou a contramão. A página que você está procurando não
        existe ou foi movida.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
      >
        Voltar para a garagem (Início)
      </Link>
    </div>
  );
}

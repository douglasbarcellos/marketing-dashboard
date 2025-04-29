export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Cellão. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

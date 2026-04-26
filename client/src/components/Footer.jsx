/*
  Keyla Paguaga Jarquin

  Shared footer component for all pages
  to keep the design consistent.
*/

export default function Footer() {
  return (
    <footer className="bg-primary px-6 py-6 text-white">
      <div className="mx-auto max-w-7xl text-center font-body">

        {/* Footer text */}
        <p>
          © 2026 Model Agency Management System
        </p>

        {/* Small supporting text */}
        <p className="mt-2 text-sm text-gray-300">
          Designed for Web Technologies Assignment 3
        </p>

      </div>
    </footer>
  );
}
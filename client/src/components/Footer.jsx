/*
  Keyla Paguaga Jarquin

  Shared footer component for all pages
  to keep the design consistent.
*/

export default function Footer() {
  return (
    <footer className="bg-primary px-6 py-8 text-white">
      <div className="mx-auto max-w-7xl text-center font-body">

        {/* Footer text */}
        <p className="mt-2 text-sm text-gray-300">
          © 2026 Model Agency Management System
        </p>

        {/* Contact details */}
        <div className="mt-4 text-sm text-gray-300">
          <p>Contact: valerieagency@email.com</p>
        </div>

        {/* Social links */}
        <div className="mt-4 flex justify-center gap-6 text-sm">
          <a href="#" className="hover:text-accent">
            Twitter
          </a>

          <a href="#" className="hover:text-accent">
            Instagram
          </a>

          <a href="#" className="hover:text-accent">
            Facebook
          </a>
        </div>

      </div>
    </footer>
  );
}
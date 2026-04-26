import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/Runway-homepage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0,0,0,0.55)",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="max-w-3xl rounded-3xl bg-[rgba(255,255,255,0.10)] p-16 text-center text-white backdrop-blur-xl shadow-2xl">

        <h1 className="font-heading text-6xl">
          Valerie Agency
        </h1>

        <p className="mt-6 text-lg text-gray-200">
          Discover talent, build portfolios,
          and connect with agencies worldwide.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/models"
            className="rounded-xl bg-accent px-8 py-4 text-white"
          >
            Browse Models
          </Link>

          <Link
            to="/login"
            className="rounded-xl border border-white px-8 py-4"
          >
            Login / Register
          </Link>
        </div>
      </div>
    </main>
  );
}
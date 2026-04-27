/*
  Nahal Kianpour

  Description:
  Home page for the Model Agency website.

  This page acts as the landing page
  for users when they first enter the site.

  It introduces the agency and provides
  quick navigation to browse models
  or login/register.
*/

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        /*
          Nahal Kianpour

          Background styling:
          Uses a runway image with a dark overlay
          so text stays readable.
        */
        backgroundImage: "url('/Runway-homepage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0,0,0,0.55)",
        backgroundBlendMode: "darken",
      }}
    >
      {/*
        Nahal Kianpour

        Main content container with glassmorphism effect.
      */}
      <div className="max-w-3xl rounded-3xl bg-[rgba(255,255,255,0.10)] p-16 text-center text-white backdrop-blur-xl shadow-2xl">

        {/* Agency title */}
        <h1 className="font-heading text-6xl">
          Valerie Agency
        </h1>

        {/* Short introduction text */}
        <p className="mt-6 text-lg text-gray-200">
          Discover talent, build portfolios,
          and connect with agencies worldwide.
        </p>

        {/*
          Navigation buttons
          to main user flows.
        */}
        <div className="mt-10 flex justify-center gap-4">

          {/* Browse Models button */}
          <Link
            to="/models"
            className="rounded-xl bg-accent px-8 py-4 text-white"
          >
            Browse Models
          </Link>

          {/* Login/Register button */}
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
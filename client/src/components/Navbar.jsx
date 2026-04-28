/*
  Keyla Paguaga Jarquin

  Shared navigation bar for consistent layout
  and easy page navigation.
*/

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-[rgba(20,20,20,0.85)] backdrop-blur-md text-white px-8 py-5 shadow-lg border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Brand logo and project name */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.jpeg"
            alt="Model Agency Logo"
            className="h-10 w-10 object-contain"
          />

          <h1 className="font-heading text-2xl">
            Valerie Agency
          </h1>
        </Link>

        {/* Navigation links using React Router */}
        <div className="flex items-center gap-3 font-body text-sm md:text-base">

          <Link
            to="/models"
            className="rounded-full bg-white/10 px-4 py-2 hover:bg-accent transition"
          >
            Browse Models
          </Link>

          <Link to="/agency/dashboard">Dashboard</Link>

          <Link
            to="/agency/models"
            className="rounded-full px-4 py-2 hover:bg-white/10 transition"
          >
            Manage Models
          </Link>

          <Link
            to="/agency/models/add"
            className="rounded-full px-4 py-2 hover:bg-white/10 transition"
          >
            Add Model
          </Link>

        </div>
      </div>
    </nav>
  );
}
/*
  Keyla Paguaga Jarquin

  Shared navigation bar for consistent layout
  and easy page navigation.

  Updated by Trinity Kendi:

  Added logout confirmation modal.
  This ensures users must confirm before logging out.
*/

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {

  /*
    Trinity Kendi

    Used to redirect user after logout.
  */
  const navigate = useNavigate();

  /*
    Trinity Kendi

    Controls visibility of logout confirmation modal.
  */
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  /*
    Trinity Kendi

    Opens the logout confirmation modal.
  */
  function openLogoutModal() {
    setShowLogoutModal(true);
  }

  /*
    Trinity Kendi

    Closes the modal without logging out.
  */
  function closeLogoutModal() {
    setShowLogoutModal(false);
  }

  /*
    Trinity Kendi

    Confirms logout action.
    Currently UI-only (no backend connected yet).
  */
  function confirmLogout() {
    setShowLogoutModal(false);

    // future: connect to backend logout endpoint
    alert('Logged out (UI only)');

    navigate('/');
  }

  return (
    <>
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

            {/* 
              Trinity Kendi

              Logout button that opens confirmation modal
              instead of logging out instantly.
            */}
            <button
              onClick={openLogoutModal}
              className="rounded-full border border-white/30 px-4 py-2 hover:bg-white/10 transition"
            >
              Logout
            </button>

          </div>
        </div>
      </nav>

      {/* 
        Trinity Kendi

        Logout confirmation modal.
        Appears when user clicks logout.
      */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">

          <div className="bg-[#111] text-white rounded-xl p-10 w-full max-w-xl shadow-lg">

            <h2 className="text-2xl font-semibold text-center mb-4">
              Are you sure you want to log out?
            </h2>

            <p className="text-center text-gray-400 mb-8 text-sm">
              You can log back in at any time.
            </p>

            <div className="flex justify-center gap-6">

              {/* Cancel button */}
              <button
                onClick={closeLogoutModal}
                className="px-6 py-3 rounded bg-red-400 hover:bg-red-500 text-white"
              >
                Cancel
              </button>

              {/* Confirm logout */}
              <button
                onClick={confirmLogout}
                className="px-6 py-3 rounded bg-green-600 hover:bg-green-700 text-white"
              >
                Log Out
              </button>

            </div>
          </div>

        </div>
      )}
    </>
  );
}
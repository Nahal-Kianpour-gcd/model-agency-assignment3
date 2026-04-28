import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

/*
  Trinity Kendi - 3134657

  Description:
  This page handles user login for the Model Agency system.

  It allows users to:
  - enter their email and password
  - send login credentials to the backend API
  - receive success or error feedback messages

  If login is successful,
  the user is redirected to the Dashboard page.
*/

function LoginPage() {
  const navigate = useNavigate();

  // State variables for form inputs and messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login request to backend API
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      // If login successful
      if (res.ok) {
        setMessage("Login successful");

        // Redirect user to dashboard
        navigate("/dashboard");
      } else {
        setMessage(data.error || "Login failed");
      }
    } catch (err) {
      setMessage("Error connecting to server");
    }
  };

  return (
    <main
      className="min-h-screen px-4 py-8 font-body"
      style={{
        background:
          "linear-gradient(135deg, rgba(45,45,45,0.96), rgba(60,60,60,0.92), rgba(249,123,107,0.10))",
      }}
    >

      <div className="mx-auto max-w-6xl rounded-3xl bg-[rgba(255,255,255,0.88)] p-10 shadow-2xl backdrop-blur-xl">

        {/* HEADER */}
        <div className="mb-8 border-b pb-4">
          <h1 className="font-heading text-3xl text-primary">
            Valerie Agency
          </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="py-6">

            <h2 className="mb-8 font-heading text-5xl text-primary">
              Welcome Back
            </h2>

            <p className="mb-8 text-gray-600 leading-8">
              Login to access your account and continue
              managing your profile and opportunities.
            </p>

            <p className="mb-8 text-gray-600 leading-8">
              Our platform connects talent with agencies
              and helps aspiring models showcase their work.
            </p>

            <p className="mb-8 text-gray-600 leading-8">
              Build your portfolio, explore opportunities,
              and manage your account securely.
            </p>

            <p className="text-gray-500 leading-8">
              Welcome back to the runway.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-200">

            <h2 className="mb-8 text-center font-heading text-3xl text-primary">
              Login Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 bg-background p-4"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* PASSWORD */}
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-xl border border-gray-300 bg-background p-4"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* LOGIN BUTTON */}
              <button
                className="w-full rounded-xl bg-accent py-3 text-white shadow-md hover:opacity-90"
              >
                Login
              </button>
            </form>

            {/* MESSAGE */}
            <p className="mt-4 text-center text-sm text-red-500">
              {message}
            </p>

            <div className="mt-10 border-t pt-6 text-center">
              <p className="mb-3 text-gray-500">
                Don’t have an account?
              </p>

              <Link
                to="/register"
                className="inline-block rounded-xl border border-primary px-8 py-3 text-primary hover:bg-primary hover:text-white"
              >
                Register
              </Link>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default LoginPage;
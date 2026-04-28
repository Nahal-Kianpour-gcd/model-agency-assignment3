import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/*
  Trinity Kendi

  Description:
  This page handles new user registration for the Model Agency system.

  It allows users to:
  - enter their email and password
  - confirm their password before submitting
  - send the registration request to the backend API
  - receive success or error feedback messages

  If registration is successful,
  the user is redirected to the Login page.
*/

function RegisterPage() {
  const navigate = useNavigate();

  // State variables for form inputs and messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("/api/users/register", {
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

      if (res.status === 201) {
        setMessage("Registration successful");
        navigate("/login");
      } else {
        setMessage(data.error || "Registration failed");
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

      <div className="mx-auto max-w-6xl rounded-3xl bg-surface p-10 shadow-xl">
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
              Welcome
            </h2>

            <p className="mb-8 text-gray-600 leading-8">
              Our mission is to empower aspiring models and
              give them a platform to showcase their talent
              to the world.
            </p>

            <p className="mb-8 text-gray-600 leading-8">
              We believe every model deserves the opportunity
              to walk the runway and express their unique identity.
            </p>

            <p className="mb-8 text-gray-600 leading-8">
              Our platform connects talent with opportunity,
              helping you grow, build your portfolio,
              and reach global audiences.
            </p>

            <p className="text-gray-500 leading-8">
              Join us and remember to dream the runway.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-200">

            <h2 className="mb-8 text-center font-heading text-3xl text-primary">
              Register Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 bg-background p-4"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full rounded border p-3"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full rounded border p-3"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-accent py-3 text-white shadow-md hover:opacity-90"
              >
                Register
              </button>
            </form>

            <p className="mt-4 text-center text-red-500">
              {message}
            </p>

            <div className="mt-10 border-t pt-6 text-center">
              <p className="mb-3 text-gray-500">
                Already a member?
              </p>

              <Link
                to="/login"
                className="inline-block rounded-xl border border-primary px-8 py-3 text-primary hover:bg-primary hover:text-white"
              >
                Login
              </Link>
            </div>

          </div>
        </div>

      </div>

    </main>
  );
}

export default RegisterPage;
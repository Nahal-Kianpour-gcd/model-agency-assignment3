/*
  Thanh Phuong Hoang

  Description:
  Add Model page.

  This page allows agency users to create
  a new model profile by entering the model's
  details into the form.

  The page includes client-side validation
  to ensure important fields are completed
  before submission.

  The design follows the proposed Assignment 1 wireframe.
*/

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddModelPage() {

  const navigate = useNavigate();

  /*
    Thanh Phuong Hoang

    Stores all form input values entered
    by the user for the new model profile.
  */
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    measurements: '',
    specialty: '',
    photoUrl: '',
    biography: ''
  });

  /*
    Thanh Phuong Hoang

    Stores validation error messages
    for each form field if needed.
  */
  const [errors, setErrors] = useState({});

  /*
    Thanh Phuong Hoang

    Updates the correct form field dynamically
    whenever the user types into an input.
  */
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  /*
    Thanh Phuong Hoang

    Validates all required fields before
    allowing the form to be submitted.

    Returns true if validation passes,
    otherwise false.
  */
  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.age.trim()) {
      newErrors.age = 'Age is required';
    } else if (isNaN(formData.age)) {
      newErrors.age = 'Age must be numeric';
    }

    if (!formData.height.trim()) {
      newErrors.height = 'Height is required';
    }

    if (!formData.specialty.trim()) {
      newErrors.specialty = 'Modeling specialty is required';
    }

    if (!formData.biography.trim()) {
      newErrors.biography = 'Biography is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  /*
    Thanh Phuong Hoang

    Handles form submission.

    First checks validation.
    If valid, it simulates saving the model
    and redirects the user back to the
    Manage Models page.
  */
  function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    alert('Model saved (UI prototype only)');
    navigate('/agency/models');
  }

  return (
    <main
      className="min-h-screen px-4 py-8"
      style={{
        background:
          "linear-gradient(135deg, rgba(34,34,34,0.95), rgba(70,70,70,0.85), rgba(249,123,107,0.25))",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="mx-auto max-w-6xl rounded-3xl bg-[rgba(15,15,15,0.72)] p-8 shadow-2xl backdrop-blur-xl text-white">

        <div className="mx-auto max-w-4xl">

          {/* Navigation link back to Manage Models page */}
          <Link
            to="/agency/models"
            className="inline-block mb-6 text-gray-300 hover:text-white"
          >
            ← Back to Models
          </Link>

          {/* Page heading and description */}
          <h2 className="font-heading text-5xl mb-2 text-white">
            Add New Model
          </h2>

          <p className="mb-8 text-gray-300">
            Create a new model profile
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">

            {/*
              Thanh Phuong Hoang

              Main model information section.

              This section collects the basic
              required details about the model.
            */}
            <div className="rounded-2xl border border-white/10 bg-white/95 p-6 text-black shadow-lg">
              <h3 className="mb-6 text-xl font-semibold">
                Model Information
              </h3>

              <div className="grid gap-6 md:grid-cols-2">

                {/* Name input */}
                <div>
                  <label className="mb-2 block font-medium">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter model's full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded border p-3"
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Age input */}
                <div>
                  <label className="mb-2 block font-medium">
                    Age <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="age"
                    placeholder="Enter age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full rounded border p-3"
                  />
                  {errors.age && (
                    <p className="mt-1 text-red-500">
                      {errors.age}
                    </p>
                  )}
                </div>

                {/* Height input */}
                <div>
                  <label className="mb-2 block font-medium">
                    Height <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="height"
                    placeholder='e.g., 5&apos;9&quot;'
                    value={formData.height}
                    onChange={handleChange}
                    className="w-full rounded border p-3"
                  />
                  {errors.height && (
                    <p className="mt-1 text-red-500">
                      {errors.height}
                    </p>
                  )}
                </div>

                {/* Measurements input */}
                <div>
                  <label className="mb-2 block font-medium">
                    Measurements
                  </label>
                  <input
                    type="text"
                    name="measurements"
                    placeholder="e.g., 34-24-36"
                    value={formData.measurements}
                    onChange={handleChange}
                    className="w-full rounded border p-3"
                  />
                </div>

              </div>

              {/* Specialty input */}
              <div className="mt-6">
                <label className="mb-2 block font-medium">
                  Modeling Specialty <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="specialty"
                  placeholder="e.g., Fashion & Editorial, Commercial, Runway"
                  value={formData.specialty}
                  onChange={handleChange}
                  className="w-full rounded border p-3"
                />
                {errors.specialty && (
                  <p className="mt-1 text-red-500">
                    {errors.specialty}
                  </p>
                )}
              </div>
            </div>

            {/*
              Thanh Phuong Hoang

              Additional model information section.

              Allows optional image input and
              biography details.
            */}
            <div className="rounded-2xl border border-white/10 bg-white/95 p-6 text-black shadow-lg">

              {/* Photo URL input */}
              <div className="mb-6">
                <label className="mb-2 block font-medium">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Enter photo URL (optional)"
                  value={formData.photoUrl}
                  onChange={handleChange}
                  className="w-full rounded border p-3"
                />
              </div>

              {/* Biography input */}
              <div>
                <label className="mb-2 block font-medium">
                  Biography <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="biography"
                  placeholder="Enter a short biography..."
                  value={formData.biography}
                  onChange={handleChange}
                  rows="4"
                  className="w-full rounded border p-3"
                />
              </div>

              {/* Form action buttons */}
              <div className="mt-8 flex flex-col gap-4 md:flex-row">
                <button
                  type="submit"
                  className="rounded-lg bg-accent px-6 py-3 text-white md:min-w-[220px] hover:opacity-90"
                >
                  Save Model
                </button>

                <Link
                  to="/agency/models"
                  className="rounded-lg border border-gray-300 px-6 py-3 text-center md:min-w-[220px] hover:bg-gray-100"
                >
                  Cancel
                </Link>
              </div>

            </div>

          </form>

        </div>

      </div>

    </main>
  );
}
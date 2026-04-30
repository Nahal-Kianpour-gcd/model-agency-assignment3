/*
  Thanh Phuong Hoang

  Description:
  Edit Model page.

  This page allows agency users to update
  an existing model profile.

  The form is pre-filled using the selected
  model's current information from mock data.

  It also includes client-side validation
  before saving changes.
*/

import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { models } from '../data/models';

export default function EditModelPage() {

  /*
    Thanh Phuong Hoang

    Gets the model ID from the URL
    and allows page redirection.
  */
  const params = useParams();
  const navigate = useNavigate();

  /*
    Thanh Phuong Hoang

    Finds the selected model from the
    mock data array using the ID from URL.
  */
  const existingModel = models.find(function(item) {
    return item.id === Number(params.id);
  });

  /*
    Thanh Phuong Hoang

    If no matching model is found,
    show an error message.
  */
  if (!existingModel) {
    return <h1>Model not found</h1>;
  }

  /*
    Thanh Phuong Hoang

    Pre-fills the form with existing
    model information.

    If any field is missing, it uses
    an empty string instead.
  */
  const [formData, setFormData] = useState({
    name: existingModel.name || '',
    age: existingModel.age || '',
    height: existingModel.heightCm ? String(existingModel.heightCm) : '',
    measurements: existingModel.measurements || '',
    specialty: existingModel.category || '',
    photoUrl: existingModel.imageUrl || '',
    biography: existingModel.bio || ''
  });

  /*
    Thanh Phuong Hoang

    Stores validation error messages
    for each form field.
  */
  const [errors, setErrors] = useState({});

  /*
    Thanh Phuong Hoang

    Updates form input values when
    the user types in any field.
  */
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  /*
    Thanh Phuong Hoang

    Checks if required fields are filled.

    Also checks if Age is a number.

    If something is wrong, the correct
    error message is shown under the field.
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

    Runs when the form is submitted.

    Stops page refresh, validates input,
    and redirects back after success.
  */
  function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    alert('Model updated (UI only)');
    navigate('/agency/models');
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">

      <div className="mx-auto max-w-6xl rounded-xl bg-white p-8 shadow-sm">


        <div className="mx-auto max-w-4xl">

          {/* Back button */}
          <Link
            to="/agency/models"
            className="inline-block mb-6"
          >
            ← Back to Models
          </Link>

          {/* Page heading */}
          <h2 className="text-5xl font-bold mb-2">
            Edit Model
          </h2>

          <p className="mb-8 text-gray-600">
            Update model profile information
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">

            {/* 
              Thanh Phuong Hoang

              Main model information section.
            */}
            <div className="rounded-xl border bg-white p-6">
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
            */}
            <div className="rounded-xl border bg-white p-6">

              {/* Photo URL input */}
              <div className="mb-6">
                <label className="mb-2 block font-medium">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoUrl"
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
                  value={formData.biography}
                  onChange={handleChange}
                  rows="4"
                  className="w-full rounded border p-3"
                />
                {errors.biography && (
                  <p className="mt-1 text-red-500">
                    {errors.biography}
                  </p>
                )}
              </div>

              {/* Action buttons */}
              <div className="mt-8 flex flex-col gap-4 md:flex-row">
                <button
                  type="submit"
                  className="rounded bg-black px-6 py-3 text-white md:min-w-[220px]"
                >
                  Save Changes
                </button>

                <Link
                  to="/agency/models"
                  className="rounded border px-6 py-3 text-center md:min-w-[220px]"
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
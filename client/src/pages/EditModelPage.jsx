/*
  Thanh Phuong Hoang

  Description:
  Edit Model page.
  This page follows Thanh Phuong's wireframe style
  and pre-fills model data from mock records.
*/

import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { models } from '../data/models';

export default function EditModelPage() {

  const params = useParams();
  const navigate = useNavigate();

  const existingModel = models.find(function(item) {
    return item.id === Number(params.id);
  });

  if (!existingModel) {
    return <h1>Model not found</h1>;
  }

  const [formData, setFormData] = useState({
    name: existingModel.name || '',
    age: existingModel.age || '',
    height: existingModel.heightCm ? String(existingModel.heightCm) : '',
    measurements: existingModel.measurements || '',
    specialty: existingModel.category || '',
    photoUrl: existingModel.imageUrl || '',
    biography: existingModel.bio || ''
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

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

        {/* Thanh Phuong Hoang
           Top navigation area matching wireframe structure
        */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b pb-4">

          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold">
              Valerie Agency
            </h1>

            <nav className="flex gap-6 text-gray-600">
              <span>Dashboard</span>
              <Link to="/agency/models" className="hover:text-black">
                Models
              </Link>
              <span className="font-semibold text-black border-b-2 border-blue-500 pb-1">
                Edit Model
              </span>
            </nav>
          </div>

          <button className="border px-4 py-2 rounded">
            Logout
          </button>
        </div>

        <div className="mx-auto max-w-4xl">

          <Link
            to="/agency/models"
            className="inline-block mb-6"
          >
            ← Back to Models
          </Link>

          <h2 className="text-5xl font-bold mb-2">
            Edit Model
          </h2>

          <p className="mb-8 text-gray-600">
            Update model profile information
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">

            <div className="rounded-xl border bg-white p-6">
              <h3 className="mb-6 text-xl font-semibold">
                Model Information
              </h3>

              <div className="grid gap-6 md:grid-cols-2">

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

            <div className="rounded-xl border bg-white p-6">

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
/*
  Thanh Phuong Hoang

  Description:
  Agency-side Model List Dashboard.

  This page allows agency users to view
  all registered models in a table layout.

  It also provides navigation to Add Model
  and Edit Model pages.

  This page follows the proposed Assignment 1 wireframe design.
*/

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { models } from '../data/models';

export default function ModelListDashboardPage() {
  const [modelList, setModelList] = useState(models);
/*Keyla Paguaga

Description:

Handles the deletion of a model from the list.
When the delete button is clicked, it prompts the user for confirmation.


*/
  function handleDelete(id) {
    if (!window.confirm('Are you sure you want to delete this model?')) return;
    setModelList(prev => prev.filter(m => m.id !== id));
  }

  return (
    <main
      className="min-h-screen px-4 py-8 font-body"
      style={{
        /*
          Thanh Phuong Hoang

          Background gradient styling
          to match the dark modern theme.
        */
        background:
          "linear-gradient(135deg, rgba(45,45,45,0.96), rgba(60,60,60,0.92), rgba(249,123,107,0.08))",
      }}
    >

      {/*
        Thanh Phuong Hoang

        Main page container with rounded corners,
        shadow, and glassmorphism effect.
      */}
      <div className="mx-auto max-w-6xl rounded-3xl bg-[rgba(255,255,255,0.90)] p-10 shadow-2xl backdrop-blur-xl">

        {/*
          Thanh Phuong Hoang

          Page heading section with title
          and Add Model button.
        */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="mb-2 font-heading text-4xl text-primary">
              Model List
            </h2>
            <p className="text-gray-600">
              Manage all registered models
            </p>
          </div>

          {/* Button to navigate to Add Model page */}
          <Link
            to="/agency/models/add"
            className="rounded-xl bg-accent px-5 py-3 text-white shadow-md hover:opacity-90"
          >
            + Add Model
          </Link>
        </div>

        {/*
          Thanh Phuong Hoang

          Table section showing all model records.
        */}
        <div className="overflow-x-auto rounded-2xl bg-white p-6 shadow-lg border border-gray-200">

          {/* Shows total number of models */}
          <h3 className="mb-6 text-xl font-semibold text-primary">
            All Models ({modelList.length})
          </h3>

          <table className="w-full min-w-[800px] border-collapse">

            {/* Table headings */}
            <thead>
              <tr className="border-b border-gray-300 text-left text-primary">
                <th className="pb-4 pr-4">Photo</th>
                <th className="pb-4 pr-4">Name</th>
                <th className="pb-4 pr-4">Age</th>
                <th className="pb-4 pr-4">Height</th>
                <th className="pb-4 pr-4">Specialty</th>
                <th className="pb-4 pr-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {/*
                Thanh Phuong Hoang

                Loops through the models array
                and creates one row per model.
              */}
              {modelList.map(function(model) {
                return (
                  <tr
                    key={model.id}
                    className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                  >
                    {/* Model image or placeholder */}
                    <td className="py-5 pr-4">
                      {model.imageUrl ? (
                        <img
                          src={model.imageUrl}
                          alt={model.name}
                          className="h-16 w-16 rounded-xl object-cover"
                        />
                      ) : (
                        <div className="h-16 w-16 rounded-xl bg-gray-200"></div>
                      )}
                    </td>

                    {/* Model name */}
                    <td className="py-5 pr-4 font-medium text-primary">
                      {model.name}
                    </td>

                    {/* Model age */}
                    <td className="py-5 pr-4">
                      {model.age}
                    </td>

                    {/* Model height */}
                    <td className="py-5 pr-4">
                      {model.heightCm} cm
                    </td>

                    {/* Model specialty/category */}
                    <td className="py-5 pr-4">
                      {model.category}
                    </td>

                    {/* Actions: Edit + Delete */}
                    <td className="py-5 pr-4">
                      <div className="flex flex-col items-start gap-2">
                        <Link
                          to={'/agency/models/edit/' + model.id}
                          className="inline-block rounded-xl border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => handleDelete(model.id)}
                          className="inline-block rounded-xl bg-red-500 px-4 py-2 text-white hover:opacity-90"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>

      </div>

    </main>
  );
}
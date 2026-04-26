 /*
  Thanh Phuong Hoang

  Description:
  Agency-side model list dashboard.
  This page displays models in table format and provides
  access to Add Model and Edit Model pages.

  This page follows Thanh Phuong's wireframe for the
  Model List Dashboard.
*/

import { Link } from 'react-router-dom';
import { models } from '../data/models';

export default function ModelListDashboardPage() {
  return (
    <main
      className="min-h-screen px-4 py-8 font-body"
      style={{
        background:
          "linear-gradient(135deg, rgba(45,45,45,0.96), rgba(60,60,60,0.92), rgba(249,123,107,0.08))",
      }}
    >

      <div className="mx-auto max-w-6xl rounded-3xl bg-[rgba(255,255,255,0.90)] p-10 shadow-2xl backdrop-blur-xl">

        {/* Thanh Phuong Hoang
          Page heading section
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

          <Link
            to="/agency/models/add"
            className="rounded-xl bg-accent px-5 py-3 text-white shadow-md hover:opacity-90"
          >
            + Add Model
          </Link>
        </div>

        {/* Thanh Phuong Hoang
           Model table section
        */}
        <div className="overflow-x-auto rounded-2xl bg-white p-6 shadow-lg border border-gray-200">
          <h3 className="mb-6 text-xl font-semibold text-primary">
            All Models ({models.length})
          </h3>

          <table className="w-full min-w-[800px] border-collapse">
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
              {models.map(function(model) {
                return (
                  <tr
                    key={model.id}
                    className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                  >
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

                    <td className="py-5 pr-4 font-medium text-primary">
                      {model.name}
                    </td>

                    <td className="py-5 pr-4">
                      {model.age}
                    </td>

                    <td className="py-5 pr-4">
                      {model.heightCm} cm
                    </td>

                    <td className="py-5 pr-4">
                      {model.category}
                    </td>

                    <td className="py-5 pr-4">
                      <Link
                        to={'/agency/models/edit/' + model.id}
                        className="inline-block rounded-xl border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white"
                      >
                        Edit
                      </Link>
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
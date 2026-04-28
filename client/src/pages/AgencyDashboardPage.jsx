import { Link } from 'react-router-dom';
/* Keyla Paguaga 

Description: 
Agency Dashboard Page.

This page serves as the main landing page for agency users after logging in. 
It provides quick access to key features such as viewing the model list and adding new models. 
The design is simple and clean, following the overall aesthetic of the application.

*/
export default function AgencyDashboardPage() { 
  return (
    <main className="min-h-screen px-4 py-8"> 
      <div className="mx-auto max-w-4xl p-8 bg-white rounded-2xl shadow">
        <h1 className="text-3xl font-bold mb-4">Agency Dashboard</h1>
        <p className="mb-6 text-gray-600">Quick links for agency tasks.</p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/agency/models"
            className="rounded-xl bg-accent px-4 py-2 text-white"
          >
            Model List
          </Link>

          <Link
            to="/agency/models/add"
            className="rounded-xl border px-4 py-2"
          >
            Add Model
          </Link>
        </div>
      </div>
    </main>
  );
}

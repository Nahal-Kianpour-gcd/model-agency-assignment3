/*
  Nahal Kianpour

  Description:
  Main routing setup for the frontend.

  This file controls navigation between pages
  using React Router.

  It also contains the Browse Models page
  and Model Profile page components.
*/

import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams
} from 'react-router-dom';
import { models } from './data/models';
import { useState } from 'react';
import HomePage from "./pages/HomePage";
import ModelListDashboardPage from './pages/ModelListDashboardPage';
import AddModelPage from './pages/AddModelPage';
import EditModelPage from './pages/EditModelPage';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AgencyDashboardPage from './pages/AgencyDashboardPage';
/*
  Keyla Paguaga Jarquin

  Shared layout components for consistent
  navigation and footer across pages.
*/
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/*
  Nahal Kianpour

  Description:
  This component implements the Browse Models page.

  It displays model listings using mock data,
  provides frontend search/filter interface elements,
  and allows navigation to the individual model profile view.

  This component represents the client browsing flow
  defined in Assignment 1 wireframes.
*/

function BrowseModelsPage() {
{/*
  Nahal Kianpour

  Stores current filter values
  selected by the user.
*/}
const [searchTerm, setSearchTerm] = useState('');
const [selectedLocation, setSelectedLocation] = useState('');
const [selectedCategory, setSelectedCategory] = useState('');

{/* Nahal Kianpour
  Filters models based on:
  - search input
  - selected location
  - selected category
*/}
const filteredModels = models.filter(function(model) {

  const matchesSearch =
    model.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

  const matchesLocation =
    selectedLocation === '' ||
    model.location === selectedLocation;

const matchesCategory =
  selectedCategory === '' ||
  model.category === selectedCategory;

return matchesSearch && matchesLocation && matchesCategory;

});
/*
  Shared contribution - Nahal Kianpour / Keyla Paguaga Jarquin

  Updated page styling using Assignment 1 design system.
*/
  return (
<main
  className="min-h-screen px-4 pt-8 pb-0"
style={{
  backgroundImage: "url('/cities-paris-black-and-white-city-wallpaper.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgba(0,0,0,0.45)",
  backgroundBlendMode: "darken",
}}
>
<div className="mx-auto max-w-7xl rounded-3xl bg-[rgba(35,35,35,0.78)] backdrop-blur-xl shadow-2xl overflow-hidden">

  {/* Page heading */}
  <div className="bg-[rgba(25,25,25,0.85)] px-16 py-12 text-white">

    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-secondary">
      Welcome to our agency
    </p>

    <h1 className="font-heading text-4xl md:text-5xl text-gray-100 leading-tight">
      Browse Professional Models
    </h1>

    <p className="mt-4 max-w-xl text-lg text-gray-300">
      Explore our curated talent portfolio for fashion,
      editorial and commercial campaigns.
    </p>

  </div>

  {/* Search and filter + cards */}
  <div className="px-10 py-10 bg-[rgba(55,55,55,0.55)]">

    {/* Search and filter interface */}
    <div className="mb-8 flex flex-wrap gap-4">

      <input
        type="text"
        placeholder="Search models"
        value={searchTerm}
        onChange={function(e) {
          setSearchTerm(e.target.value);
        }}
        className="rounded-xl border border-white/10 bg-white/95 px-5 py-3 text-textmain shadow-md"
      />

      <select
        value={selectedLocation}
        onChange={function(e) {
          setSelectedLocation(e.target.value);
        }}
        className="rounded-xl border border-white/10 bg-white/95 px-5 py-3 text-textmain shadow-md"
      >
        <option value="">Location</option>
        <option value="Dublin">Dublin</option>
        <option value="Cork">Cork</option>
        <option value="Galway">Galway</option>
      </select>

      <select
        value={selectedCategory}
        onChange={function(e) {
          setSelectedCategory(e.target.value);
        }}
        className="rounded-lg border border-secondary bg-surface px-4 py-3 text-textmain shadow-sm"
      >
        <option value="">Category</option>
        <option value="Fashion">Fashion</option>
        <option value="Editorial">Editorial</option>
        <option value="Commercial">Commercial</option>
      </select>

    </div>

  {/* 
  Nahal Kianpour

  Loops through filtered models
  and creates one card for each.
*/}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {filteredModels.map(function(model) {
        return (
          <div
            key={model.id}
            className="rounded-2xl bg-white/95 p-5 shadow-xl hover:scale-[1.02] transition-all"
          >

                {/* Placeholder image area */}
<img
  src={model.imageUrl}
  alt={model.name}
  className="mb-5 h-56 w-full rounded-xl object-cover object-top"
/>

            {/* Basic model summary information */}
            <h2 className="font-semibold">
              {model.name}
            </h2>

            <p>
              {model.category} | {model.location}
            </p>

            {/* Link to model profile route */}
            <Link
              to={'/models/' + model.id}
              className="mt-5 inline-block rounded-lg bg-accent px-5 py-2 text-white transition hover:opacity-90"
            >
              View Profile
            </Link>

          </div>
        );
      })}

    </div>

  </div>

</div>

</main>
);
}

/*
  Nahal Kianpour

  Displays full details for
  one selected model.
*/
function ModelProfilePage() {

  const params = useParams();
{/*
  Nahal Kianpour

  Finds the selected model
  using the ID from the URL.
*/
}
  const model = models.find(function(item) {
    return item.id === Number(params.id);
  });

  if (!model) {
    return <h1>Model not found</h1>;
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-5xl rounded-xl bg-white p-6 shadow-sm">

        <Link
          to="/models"
          className="inline-block mb-6 border px-4 py-2 rounded"
        >
          Back to Models
        </Link>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Placeholder image area */}
          <div className="h-80 bg-gray-200"></div>

          <div>

            <h1 className="text-3xl font-bold mb-4">
              {model.name}
            </h1>

            <p className="mb-2">
              Category: {model.category}
            </p>

            <p className="mb-2">
              Location: {model.location}
            </p>

            <p className="mb-2">
              Height: {model.heightCm} cm
            </p>

            <p className="mb-6">
              Availability: {model.availability}
            </p>

            <button className="border px-4 py-2 rounded">
              Book / Contact
            </button>

            {/* Model biography section */}
            <p className="mt-6 mb-6">
              {model.bio}
            </p>

          </div>

        </div>

      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
  {/* 
  Nahal Kianpour

  All frontend routes are defined here.
*/}
<Routes>
  <Route path="/" element={<><Navbar /><HomePage /><Footer /></>} />
  <Route path="/models" element={<><Navbar /><BrowseModelsPage /><Footer /></>} />
  <Route
  path="/agency/models/edit/:id"
  element={
    <>
      <Navbar />
      <EditModelPage />
      <Footer />
    </>
  }
/>
  <Route path="/agency/models" element={<><Navbar /><ModelListDashboardPage /><Footer /></>} />
    <Route
    path="/agency/models/add"
    element={
      <>
        <Navbar />
        <AddModelPage />
        <Footer />
      </>
    }
  />
  <Route path="/agency/models/edit/:id" element={<EditModelPage />} />
  <Route path="/register" element={<><Navbar /><RegisterPage /><Footer /></>} />
  <Route path="/login" element={<><Navbar /><LoginPage /><Footer /></>} />
  <Route
  path="/agency/dashboard"
  element={
    <>
      <Navbar />
      <AgencyDashboardPage />
      <Footer />
    </>
  }
/>
</Routes>
    </BrowserRouter>
  );
}
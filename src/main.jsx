import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import CharactersPage from './pages/CharactersPage.jsx';
import EpisodesPage from './pages/EpisodesPage.jsx';
import LocationsPage from './pages/LocationsPage.jsx';


const router = createBrowserRouter(
  [
    {
      element: <App />,
      children : [
    {
          path: "/",
          element: <LandingPage/>,
    },
{
  path:"/characters",
  element:<CharactersPage/>,
  loader: () => fetch("https://rickandmortyapi.com/api/character")
},
{
  path:"/episodes",
  element:<EpisodesPage/>,
  loader: () => fetch("https://rickandmortyapi.com/api/episode")
},
{
  path:"/locations",
  element:<LocationsPage/>,
  loader: () => fetch("https://rickandmortyapi.com/api/location")
},
]
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Consommation des routes déclarées dans la constante "router" au-dessus */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

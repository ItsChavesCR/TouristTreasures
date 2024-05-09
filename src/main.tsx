import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.tsx';
import CostaRicaPage from './pages/CostaRicaPage.tsx';
import PortugalPage from './pages/PortugalPage.tsx';
import IndiaPage from './pages/IndiaPage.tsx';
import JaponPage from './pages/JaponPage.tsx';
import AustraliaPage from './pages/AustraliaPage.tsx';
import NewPlace from './pages/NewPlace.tsx';
import '../src/index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/costarica",
    element: <CostaRicaPage/>,
  },
  {
    path: "/portugal",
    element: <PortugalPage/>
  },
  {
    path: "/india",
    element: <IndiaPage/>
  },
  {
    path: "/japon",
    element: <JaponPage/>
  },
  {
    path: "/australia",
    element: <AustraliaPage/>
  },
  {
    path: "/addplace",
    element: <NewPlace/>
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

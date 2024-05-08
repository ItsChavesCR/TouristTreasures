import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.tsx';
import CostaRicaPage from './pages/CostaRicaPage.tsx';
import NewPlace from './pages/NewPlace.tsx';


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
    path: "/addplace",
    element: <NewPlace/>

  }
  
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

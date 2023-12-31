import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home';
import PageCluedo from './pages/PageCluedo';
import PageQuiz from './pages/PageQuiz';
import BlindTestCocktail from './pages/BlindTestCocktail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/PageCluedo",
        element: <PageCluedo />,
      },
      {
        path: "/PageQuiz",
        element: <PageQuiz />,
      },

      {
        path: "/BlindTestCocktail",
        element: <BlindTestCocktail />,
      },

    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

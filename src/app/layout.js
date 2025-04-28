"use client";
import React, { useState, useEffect } from "react";

import "./globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Work from "../Pages/Work";
import Blog from "../Pages/Blog";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const metadata = {
  title: "Ahmed Sherif's Portfolio",
  description: "Welcome to Ahmed Sherif's personal portfolio showcasing modern web development projects.",
};

export default function RootLayout({ children }) {
  const [router, setRouter] = useState(null);

  useEffect(() => {
    const browserRouter = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
        errorElement: <h1>Page Not Found</h1>,
      },
      {
        path: "/Blog",
        element: <Blog />,
        errorElement: <h1>Page Not Found</h1>,
      },
      {
        path: "/About",
        element: <About />,
        errorElement: <h1>Page Not Found</h1>,
      },
      {
        path: "/Work",
        element: <Work />,
        errorElement: <h1>Page Not Found</h1>,
      },
    ]);
    setRouter(browserRouter);
  }, []);

  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <main className="content">
            <React.StrictMode>
              {router && <RouterProvider router={router} />}
            </React.StrictMode>
          </main>
        </div>
              </body>
    </html>
  );
}
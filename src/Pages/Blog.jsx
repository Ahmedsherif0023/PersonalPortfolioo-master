import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../app/globals.css"; // Import the global CSS file
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
const Home = () => {

  
  return (
<div className="BlogContainer">
  <Header />
      <div className="container">
      <h1>Coming soon....</h1>
      </div>
      <Footer />
</div>
  );
};

export default Home;

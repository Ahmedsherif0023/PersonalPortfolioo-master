import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../app/globals.css"; // Import the global CSS file
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Card from "../components/Card/Card"; // Import the Card component
import projects from "../data/projects.json"; // Import the projects data
const Home = () => {
  return (
    <div className="WorkContainer">
      <Header />
      <div className="wcontainer">
      {projects.map((project, index) => (
        <Card
          key={index}
          header={project.header}
          image={project.image}
          description={project.description}
          link1={project.link1} // Assuming each project has a 'link' property
          link2={project.link2} // Assuming each project has a 'github' property
        />
      ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;

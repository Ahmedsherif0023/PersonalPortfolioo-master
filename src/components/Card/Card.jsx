// src/components/Card/Card.jsx
import React from "react";
import "./Card.css"; // Import the CSS file for styling

const Card = ({ header, image, description , link1 , link2}) => {
  return (
    <div className="cardd">
      <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{header}</h2>
      <img src={image} alt={header} className="projimg" />
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    <div className="card-button-container">
        <a href={link1} target="_blank" rel="noopener noreferrer" className="card-button">
          View Project
        </a>
        <a href={link2} target="_blank" rel="noopener noreferrer" className="card-button">
          Github repo
        </a>
    </div>
    </div>
  );
};

export default Card;

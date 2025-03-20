
import "./About.css";
import React from "react";
import "./About.css"; // Import the new CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About FlashCard App</h1>
        <p className="about-text">
          This <strong>FlashCard App</strong> helps users create and review flashcards to improve
          their learning experience. You can add custom questions and answers,
          making it easy to study and retain information efficiently.
        </p>
        <p className="about-text">
          Built with <strong>React</strong> and <strong>Vite</strong>, this app provides a seamless user
          experience with a simple and interactive interface.
        </p>
        <button className="about-button" onClick={() => alert("Start Learning!")}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;

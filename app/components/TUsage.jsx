import React from "react";
import { Typewriter } from "./TypeWriter";

const HomePage = () => {
  const texts = [
    "Welcome to My Portfolio...",
    "I'm a Full Stack Developer...",
    "Let's Build Something Amazing...",
  ];

  return (
    <div className="landing-page">
      <h1>
        <Typewriter texts={texts} speed={100} deleteSpeed={100} delay={2000} />
      </h1>
    </div>
  );
};

export default HomePage;

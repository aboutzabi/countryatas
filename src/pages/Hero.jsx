import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <main className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1>Explore the World, One Country at a Time.</h1>
          <p>
            Discover the history culture and beauty of every nation. Sort,
            search and filter throught countries to find details you need.
          </p>
          <button>
            Start Exploring <FaLongArrowAltRight />{" "}
          </button>
        </div>

        <div className="hero-img">
          <img src="/images/world.png" alt="awesome" />
        </div>
      </div>
    </main>
  );
};

export default Hero;

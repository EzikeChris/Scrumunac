import React from "react";
import "./herosection.scss";

const HeroSection = () => {
  return (
    <section className="hero is-info is-large hero-image">
      <div className="hero-body">
        <div className="container">
          <h1 className="title hero-title">Games Reimagined in Valhalla</h1>
          <div className="shop-now-btn">
            <button className="button is-black" id="shop-now">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

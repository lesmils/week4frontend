import React from "react";
import Fan from "/home/milton/Code/projectw4frontend/src/components/Fan.png";

function Hero() {
  return (
    <div className="inner-hero">
      <div className="title">
        <h1>TheShop</h1>
      </div>
      <div className="image">
        <img className="image1" src={Fan} alt="alt" />
      </div>
    </div>
  );
}

export { Hero };

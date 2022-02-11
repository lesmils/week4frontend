import React from "react";
import Fan from "../Fan.png";

function Hero() {
  return (
    <div className="inner-hero">
      <div className="title">
        <h3 style={{ color: "whitesmoke" }}>
          <br />
          <br />
          <br />
          <br />
          Products for every need, <br />
          at the distance of a click
        </h3>
      </div>
      <div>
        <h3 style={{ color: "#8568ff" }}>
          this is nothing just pushing the image to the left lol{" "}
        </h3>
      </div>
      <div className="image">
        <img className="image1" src={Fan} alt="alt" />
      </div>
    </div>
  );
}

export { Hero };

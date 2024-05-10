import React from "react";
import logo from "./../logo.svg";
import Carousel from "./Carousel";
import Event from "./Event";

const Main = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto my-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Event</h2>
        {/* <Carousel /> */}
        <Event />
      </div>
    </div>
  );
};

export default Main;

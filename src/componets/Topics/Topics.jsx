import React, { useState } from "react";
import "./Topics.css";

import {
  topicsImage,
  frequencies,
  mixing,
  mixingConsole,
  vocalsProcessing,
  daw,
  bgElement1,
} from "../../assets/index";
const Topics = () => {
  const [currentImage, setCurrentImage] = useState(frequencies);

  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What you will learn ?</h2>
        <div className="content-container">
          <ul className="topics-list">
            <li onMouseEnter={() => setCurrentImage(frequencies)}>
              What are frequencies ?
            </li>
            <li onMouseEnter={() => setCurrentImage(daw)}>Using DAW</li>
            <li onMouseEnter={() => setCurrentImage(vocalsProcessing)}>
              Vocals Processing
            </li>
            <li onMouseEnter={() => setCurrentImage(mixing)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImage(mixingConsole)}>
              Mixing Console
            </li>
            <li onMouseEnter={() => setCurrentImage(topicsImage)}>Mastering</li>
          </ul>
          <div className="topic-image">
            <img src={currentImage}></img>
          </div>
        </div>
        <img src={bgElement1} className="bg-element-1"></img>
      </div>
    </section>
  );
};

export default Topics;

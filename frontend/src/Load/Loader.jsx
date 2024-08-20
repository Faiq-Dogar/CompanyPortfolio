import React from 'react';
import './load.css'

const Loader = () => {
  return (
    // <div className="loader-container">
    //   <div className="loader"></div>
    //   {/* You can add a loading message or spinner here */}
    //   <p>Loading...</p>
    // </div>

    <main class="main-landing">
        <div class="b-name-container">
        <span class="b-name">D</span>
            <span class="b-name">E</span>
            <span class="b-name">V</span>
            <span class="b-name">B</span>
            <span class="b-name">E</span>
            <span class="b-name">R</span>
            <span class="b-name">R</span>
            <span class="b-name">Y</span>
        </div>
        <div class="upper-boundary"></div>
        <div class="lower-boundary"></div>
    </main>
  );
};

export default Loader;

import React, { useState } from "react";

export default function ColorChanger() {
    const[bgColor, setBgColor] = useState("#FFFFFF");


    function hexColor() {
        setBgColor("#" +
        Math.floor(Math.random() * 256).toString(16) +
        "" +
        Math.floor(Math.random() * 256).toString(16) +
        "" +
        Math.floor(Math.random() * 256).toString(16));
    }

    function copyColor() {
      navigator.clipboard.writeText(bgColor)
    }

  return (
    <div className="color-changer-container" style={{backgroundColor: `${bgColor}`}}>
      <h1 className="color-changer-title">
        Change The Background By Clicking The Following Button
      </h1>
      <div className="hex-display">
        <input type="text" name="hex-field" id="hex-field" value={bgColor.toString()} />
        <button className="btn-copy" style={{backgroundColor: `${bgColor}`}} onClick={copyColor}>copy</button>
      </div>
      <button
        className="btn-change"
        onClick={hexColor}
      >
        CHANGE COLOR
      </button>
    </div>
  );
}

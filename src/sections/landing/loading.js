import React from "react";

function Loading() {
  window.onload = () => {
    setTimeout(() => {
      document.querySelector("body").classList.add("display");
    }, 2500);
  };

  return (
    <div className="spinner-container">
      <div className="circles">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;

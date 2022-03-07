import React from "react";

function Landing() {
  return (
    <>
      <div id="landing" className="section">
        <img
          src={
            "https://images.unsplash.com/photo-1544847558-3ccacb31ee7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          id="background"
          alt=""
        />
        <div id="background-layover"></div>
        <div className="welcome">
          <h2 id="slogan">level up your small business</h2>
          <h1 id="landing-header">with a custom built website</h1>
          <a href="https://squareup.com/appointments/book/d7qnlrk1kvpvmb/LZ690ANSV2YT7/start">
            <button id="start">Schedule Consultation</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Landing;

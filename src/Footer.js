import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="coder">
      <small>
        This project was coded by:{" "}
        <a
          href="https://www.linkedin.com/in/tatiana-pereira-82a55445/"
          target="_blank"
          rel="noreferrer"
        >
          Tatiana Pereira
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/tatz23/vanilla-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
          {" "}
          hosted on Netlify
        </a>
      </small>
    </div>
  );
}

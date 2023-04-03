import React from "react";
import "../styles/Home.css";
import { LinkedIn } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Nijat</h2>
        <div className="prompt">
          <p>
            I'm a front-end developer with 1.5 years of experience building
            responsive and user-friendly websites using the MERN stack (MongoDB,
            Express, React, and Node.js).<br></br>
          </p>
          <div></div>

          <a href="https://www.linkedin.com/in/nicat-zaman/">
            <LinkedIn />
          </a>
          <a
            href=""
            to="#"
            onClick={() => (window.location = "mailto:nijatlz@code.edu.az")}
          >
            <Email />
          </a>
          <a href="https://github.com/nicatzamanwork">
            <GitHub />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ul>
          <li>
            <h2>Front-End</h2>
            <span>
              JavaScript, ReactJS, Redux Toolkit, Bootstrap, MaterialUI, HTML,
              CSS, TypeScript
            </span>
          </li>
          <li>
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MongoDB, MS SQL</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

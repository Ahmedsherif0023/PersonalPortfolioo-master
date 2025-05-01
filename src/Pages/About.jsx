import React from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";

import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../app/globals.css"; // Import the global CSS file
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <div className="AboutContainer">
        <div className="containerz">
          <div className="First-section">
            <h1>About</h1>
            <h2>
              Hey, I'm Ahmed Sherif | a Ftront-End Developer who builds slick
              UIs, solves
              real problems, and vibes with clean code.
            </h2>
            <p>
              When I'm not coding , I'm probably lifting at the gym, cooking up
              cool ideas, or helping brands grow online.
            </p>
          </div>
          <div className="Second-section">
            <h1>Developer Journey</h1>
            <p>
              How I went from "console.log("Hello")" to shipping real stuff.
            </p>
            <div className="JourneyHistory">
              <ul className="HistoryList">
                <li>2019</li>
                <li>2020</li>
                <li>2021</li>
                <li>2022</li>
                <li>2023</li>
                <li>2024</li>
                <li>2025</li>
              </ul>
              <ul className="HistoryDone">
                <li>started coding (and got hooked)</li>
                <li>Built my first project </li>
                <li>Chose Front-end as it is the easist </li>
                <li>learnt javascript and made responsive apps</li>
                <li>Learnt React , Next js</li>
                <li>Freelancer for startups and grew my skills</li>
                <li>Working on cool projects and always exploring</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="containerz2">
          <div className="First-section">
            <h1>My Stack</h1>
            <p className="para">
              I love building with tools that get out of the way and let
              creativity flow
            </p>
            <div className="MyStackIcons">
              <ul>
                <li>
                  <div>
                    <FaReact />
                    <p>React</p>
                  </div>
                </li>
                <li>
                  <div>
                    <RiNextjsLine />
                    <p>Next.Js</p>
                  </div>
                </li>
                <li>
                  <div>
                    <TbBrandTypescript />
                    <p>TypeScript</p>
                  </div>
                </li>
                <li>
                  <div>
                    <RiTailwindCssFill />
                    <p>Tailwind CSS</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="Second-section">
            <h1>Fun Facts</h1>
            <ul>
              <li>
                <p>🦾I lift heavy and debug harder</p>
              </li>
              <li>
                <p>☕Coffe + dark mode = Peak productivity</p>
              </li>
              <li>
                <p>😍Lana del rey while Coding ugh</p>
              </li>
              <li>
                <p>😅Dreaming of launching my own dev product oneday</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

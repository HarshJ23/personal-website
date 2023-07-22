import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import About from "../components/About";
import Education from "../components/Education";
import Projects from "@/components/Projects";
import { useState } from "react";

export default function Home() {
  const componentsArray = [About, Education , Projects];
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const handleButtonClick = (index) => {
    setCurrentComponentIndex(index);
  };

  const CurrentComponent = componentsArray[currentComponentIndex];

  return (
    <main className="flex flex-col">
      <div className="hero-content text-center p-5 w-full my-5 rounded-lg flex flex-col ">
        <div>
          <h3 className="text-5xl font-bold">Hey!</h3>
          <p className="font-bold text-xl my-2">I am Harsh Jawajiwar</p>
          <p>
            PUNE | HYDERABAD, INDIA-
            <span className="font-semibold hover:underline hover:cursor-pointer hover:text-blue-400">
              EMAIL
            </span>
          </p>
        </div>

        <ul className="flex flex-row space-x-4">
          <li>
            <BsLinkedin />
          </li>
          <li>
            <BsGithub />
          </li>
          <li>
            <BsTwitter />
          </li>
          <li>
            <FaInstagramSquare />
          </li>
        </ul>

        <div className="mt-7">
          <div className="tabs tabs-boxed font-semibold">
            <a
              className={`tab ${currentComponentIndex === 0 ? "tab-active" : ""}`}
              onClick={() => handleButtonClick(0)}
            >
              ABOUT ME
            </a>
            <a
              className={`tab ${currentComponentIndex === 1 ? "tab-active" : ""}`}
              onClick={() => handleButtonClick(1)}
            >
              EDUCATION
            </a>
            <a  className={`tab ${currentComponentIndex === 2 ? "tab-active" : ""}`}
              onClick={() => handleButtonClick(2)}>PROJECTS</a>
            <a className="tab">ACHIEVEMENTS</a>
          </div>
        </div>

        <div>
          <section>
            <div
              className={`transition-opacity duration-500 ease-in-out ${currentComponentIndex !== 0 ? 'hidden' : 'opacity-100'}`}
            >
              <About />
            </div>
            <div
              className={`transition-opacity duration-500 ease-in-out ${currentComponentIndex !== 1 ? 'hidden' : 'opacity-100'}`}
            >
              <Education />
            </div>

            <div
              className={`transition-opacity duration-500 ease-in-out ${currentComponentIndex !== 2 ? 'hidden' : 'opacity-100'}`}
            >
              <Projects/>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

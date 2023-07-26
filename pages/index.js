import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import About from "../components/About";
import Education from "../components/Education";
import Projects from "@/components/Projects";
import Achievement from "@/components/Achievement";
import { useState } from "react";

export default function Home() {
  const componentsArray = [About, Education , Projects , Achievement];
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
             <a href="mailto:hjawajiwar@gmail.com"> EMAIL</a>
            </span>
          </p>
        </div>

        <ul className="flex flex-row space-x-4 bg-primary p-2 rounded-xl  md:rounded-lg">
          <li>
            <a href="https://www.linkedin.com/in/harsh-jawajiwar-086320215/" target="_blank" className="text-white"><BsLinkedin className="h-4 w-4 md:h-5 md:w-5  lg:h-6 lg:w-6"  /></a>
          </li>
          <li>
           <a href="https://github.com/HarshJ23" target="_blank" className="text-white"><BsGithub className="h-4 w-4 md:h-5 md:w-5  lg:h-6 lg:w-6" /></a> 
          </li>
          <li>
            <a href="https://twitter.com/HJawajiwar" target="_blank" className="text-white"><BsTwitter className="h-4 w-4 md:h-5 md:w-5  lg:h-6 lg:w-6" /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/harshj_23/" target="_blank" className="text-white"><FaInstagramSquare className="h-4 w-4 md:h-5 md:w-5  lg:h-6 lg:w-6"  /></a>
          </li>
        </ul>

        <div className="mt-7">
          <div className="tabs tabs-boxed font-semibold">
            <a
              className={`tab tab-xs sm:tab-md ${currentComponentIndex === 0 ? "tab-active" : ""}`}
              onClick={() => handleButtonClick(0)}
            >
              ABOUT ME
            </a>
            <a
              className={`tab tab-xs sm:tab-md ${currentComponentIndex === 1 ? "tab-active" : ""}`}
              onClick={() => handleButtonClick(1)}
            >
              EDUCATION
            </a>
            <a  className={`tab tab-xs sm:tab-md ${currentComponentIndex === 2 ? "tab-active" : ""}`}
              onClick={() => handleButtonClick(2)}>PROJECTS</a>

             <a  className={`tab tab-xs sm:tab-md ${currentComponentIndex === 3 ? "tab-active" : ""}`}
              onClick={() => handleButtonClick(3)}>ACHIEVEMENTS</a>
          </div>
        </div>

        <div>
          <section>
            <div
              className={`transition-opacity duration-500 ease-in-out ${currentComponentIndex !== 0 ? 'hidden' : 'opacity-100 animate-fadeIn'}`}
            >
              <About />
            </div>
            <div
              className={`transition-opacity duration-500 ease-in-out ${currentComponentIndex !== 1 ? 'hidden' : 'opacity-100 animate-fadeIn'}`}
            >
              <Education />
            </div>

            <div
              className={`transition-opacity duration-500 ease-in-out ${currentComponentIndex !== 2 ? 'hidden' : 'opacity-100 animate-fadeIn'}`}
            >
              <Projects/>
            </div>

            <div
              className={`transition-opacity duration-500 ease-in-out ${currentComponentIndex !== 3 ? 'hidden' : 'opacity-100 animate-fadeIn'}`}
            >
              <Achievement/>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}





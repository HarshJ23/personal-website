import {BsLinkedin , BsTwitter,BsGithub} from "react-icons/bs";
import {FaInstagramSquare} from "react-icons/fa";
import About from "../components/About";



export default function Home() {

 

  return (
    <main className="flex flex-col" >
<div className="hero-content text-center p-5 w-full my-5 rounded-lg flex flex-col ">

    <div>
      <h3 className="text-5xl font-bold">Hey!</h3>
      <p className="font-bold text-xl my-2">I am Harsh Jawajiwar</p>
      <p>PUNE | HYDERABAD , INDIA-<span className="font-semibold hover:underline hover:cursor-pointer hover:text-blue-400">EMAIL</span></p>
    </div>

<ul className="flex flex-row space-x-4">
<li><BsLinkedin/></li>
<li><BsGithub/></li>
<li><BsTwitter/></li>
<li><FaInstagramSquare/></li>
</ul>

<div className="mt-7">
<div className="tabs tabs-boxed bg-indigo-950 font-semibold">
  <a className="tab">ABOUT ME</a> 
  <a className="tab tab-active">EDUCATION</a> 
  <a className="tab">PROJECTS</a>
</div>
</div>

<div>
  <section>
    <About/>
  </section>
</div>

</div>
</main>
  )
}

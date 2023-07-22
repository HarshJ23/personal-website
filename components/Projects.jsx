import {  BsGithub } from "react-icons/bs";

export default function Projects() {
    return (
      <div className="my-2">
      <div className="hero bg-[#f0ecec] shadow-xl rounded-md">
    <div className="hero-content">
      <div>
       <h2 className="text-left text-3xl font-semibold mb-5">PROJECTS</h2>
  
  <div className="flex flex-col space-y-10">
  
      <div className="space-y-1">
          <p className="text-left  font-bold">DATA CHATBOT</p>
          <p className="text-left text-[#8c8c94] font-medium">Chatbot where you can chat with a large set of custom data and get specific answers quickly</p>
          <div className=" flex flex-row justify-between">
          <p className="text-left font-medium text-[#8c8c94] ">Stack : React.js , Firebase and Tailwind CSS for styling</p>
         <a href="https://github.com/HarshJ23/data_chatbot"><BsGithub className="w-6 h-6 my-1 mx-2"/></a>
          </div>
      </div>
  
      <div className="space-y-1">
          <p className="text-left  font-bold">tele_GPT</p>
          <p className="text-left text-[#8c8c94] font-medium">Integrated ChatGPT features into a Telegram chatbot</p>
          <div className=" flex flex-row justify-between">
          <p className="text-left font-medium text-[#8c8c94] ">Stack : React.js , Firebase and Tailwind CSS for styling</p>
         <a href="https://github.com/HarshJ23/TeleGPT"><BsGithub className="w-6 h-6 my-1 mx-2"/></a>
          </div>
      </div>
  
      <div className="space-y-1">
          <p className="text-left  font-bold">Blogstack</p>
          <p className="text-left text-[#8c8c94] font-medium">Blog website with text-voice feature</p>
          
          <div className=" flex flex-row justify-between">
          <p className="text-left font-medium text-[#8c8c94] ">Stack : React.js , Firebase and Tailwind CSS for styling</p>
         <a href="https://github.com/HarshJ23/blogstack"><BsGithub className="w-6 h-6 my-1 mx-2"/></a>
          </div>
  

      </div>
  
  
  
  </div>
  
      </div>
      
    </div>
    
  </div>

  <p className="text-sm font-semibold mt-4 flex flex-row items-center space-x-1"> <span>Check my github profile for other projects: </span><a href="https://github.com/HarshJ23"><BsGithub className="w-6 h-6 my-1 mx-2"/></a></p>

      </div>
    )
  }
  
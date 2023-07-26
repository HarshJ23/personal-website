import {  BsGithub } from "react-icons/bs";

export default function Projects() {
  const project = [
    { value:0,
      name:"DATA CHATBOT",
      description:"Chatbot where you can chat with a large set of custom data and get specific answers quickly",
      details: "Stack : Javascript, Next.js, Langchain, PineconeDB, OpenAI API",
      link: "https://github.com/HarshJ23/data_chatbot",
    },

    { value:1,
      name:"tele_GPT",
      description:"ChatGPT right into your Telegram App",
      details: "Stack : Node.js , OpenAI API ",
      link: "https://github.com/HarshJ23/TeleGPT",
    },

    { value:3,
      name:"BlogStack",
      description:"Blog website with text-voice feature",
      details: "Stack : React.js , Firebase and Tailwind CSS for styling",
      link: "https://github.com/HarshJ23/blogstack",
    },
 ]

return (
      <div className="my-2">
      <div className="hero rounded-md">
    <div className="hero-content">
      <div>
       <h2 className="text-left text-3xl font-bold mb-5">PROJECTS</h2>
  
<div className="flex flex-col space-y-10">
{project && project.map(({value , name ,description,details , link})=>(
      <div className="space-y-1" key={value}>
          <p className="text-left  font-semibold">{name}</p>
          <p className="text-left text-[#8c8c94] font-medium">{description}</p>
          <div className=" flex flex-row justify-between">
          <p className="text-left font-medium text-[#8c8c94] ">{details}</p>
         <a href={link}><BsGithub className="w-6 h-6 my-1 mx-2"/></a>
          </div>
      </div>
))}
</div>
  
      </div>
      
    </div>
    
  </div>

  <p className="text-sm font-semibold mt-4 flex flex-row items-center space-x-1"> <span>Check my github profile for other projects: </span><a href="https://github.com/HarshJ23"><BsGithub className="w-6 h-6 my-1 mx-2"/></a></p>

      </div>
    )
  }
  


export default function Achievement() {

    const hackathon = [

   {    value:0,
        title:"AFTERHOURS",
        description:"BITS Pilani , Hyderabad campus : Placed first in campus wide 12-Hr Hackathon organized by Innovation Cell and CIIE , BITS Pilani Hyderabad Campus",
    },

    {   value:1,
        title : "Capgemini CodeX",
        description:"Selected as one of the top 10 finalist out of 200+ participants. Our team developed a full-stack health and medicine management app for elderly people along with a pitch deck presented to CISCO senior employees"
    },

    ]

    const cocurricular = [

      {    value:0,
           title:"VICE PRESIDENT - Entrepreneurship Cell",
           description:"Currently serving as Vice President of Entrepreneurship Cell,BITS Pilani Hyderabad campus for AY 2023-24. As VP , I will be responsible for leading a team of 80+ members to handle various projects,initiatives along with our annual E-Summit,'Launchpad'. ",
       },

       {    value:1,
        title:"Internship Co-ordinator - IIC , BITS Pilani Hyderabad Campus",
        description:"Appointed as Internship Co-ordinator for Institite Innovation Council (IIC) , BITS Pilani Hyderabad Campus" ,
    },
   
      
   
       ]

  return (
    <div className="my-2">
<div className="hero rounded-md">
  <div className="hero-content">
    <div>
     <h2 className="text-left text-3xl font-bold mb-5">ACHIEVEMENTS</h2>

<div>
<h1 className="text-left mt-6 mb-2 font-semibold ">HACKATHONS & COMPETITIONS</h1>
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
{hackathon && hackathon.map(({value,title,description})=>(
<div className="card bg-primary text-white hover:scale-95 transition ease-in-out duration-300 hover:shadow-lg" key={value}>
  <div className="card-body">
    <h2 className=" font-bold text-xl text-center">{title}</h2>
    <p>{description}</p>
  </div>
</div>
))}
</div>
</div>

<div>
<h1 className="text-left mt-6 mb-2 font-semibold ">CO-CURRICULARS</h1>
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
{cocurricular && cocurricular.map(({value,title,description})=>(
<div className="card bg-primary text-white hover:scale-95 transition ease-in-out duration-300 hover:shadow-lg" key={value}>
  <div className="card-body">
    <h2 className=" font-bold text-xl text-center">{title}</h2>
    <p>{description}</p>
  </div>
</div>
))}
</div>
</div>

    </div>
  </div>
</div>
</div>

  )
}

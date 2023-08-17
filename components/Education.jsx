

export default function Education() {

  const education = [
    { value:0,
      institute:"BIRLA INSTITUTE OF TECHNOLOGY AND SCIENCE, PILANI, HYDERABAD CAMPUS, INDIA",
      standard:"BE Computer Science , MSc Physics",
      grade : "CGPA : 7.76 (in progress)",
      year :  "2021-present",
    },

    { value:1,
      institute:"RAJIV GANDHI INSTITUTE OF E-LEARNING AND JUNIOR SCIENCE COLLEGE,HSC,PUNE",
      standard:"HSC 12th grade",
      grade : " Board percentage : 83.33%",
      year :  "2019-2021",
    },

    { value:2,
      institute:"DAV PUBLIC SCHOOL,CBSE,PUNE",
      standard:"CBSE UKG-10th",
      grade : "Board percentage : 93.4%",
      year :  "2019",
    },
 ]
  
return (
    <div className="my-2">
    <div className="hero rounded-md">
  <div className="hero-content">
    <div>
     <h2 className="text-left text-3xl font-bold mb-5">EDUCATION</h2>

<div className="flex flex-col space-y-10">

  {education && education.map(({value,institute,standard,grade,year}) =>(

    <div className="space-y-1" key={value}>
        <p className="text-left  font-semibold">{institute}</p>
        <p className="text-left text-[#8c8c94] font-medium">{standard}</p>
        <div className="sm:flex sm:flex-row justify-between">
        <p className="text-left font-medium text-[#8c8c94]">{grade}</p>
        <p className="text-left">{year}</p>
        </div>
    </div>
))}

</div>

    </div>
  </div>
</div>
    </div>
  )
}

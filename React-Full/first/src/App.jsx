import React from 'react'

import "./index.css"
import Card from './components/Card'
const App = () => {
  const jobArr = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    name: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    name: "Meta (Facebook)",
    datePosted: "1 week ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    datePosted: "2 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    name: "Netflix",
    datePosted: "4 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    name: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    name: "Tesla",
    datePosted: "3 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    name: "Adobe",
    datePosted: "1 day ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    name: "NVIDIA",
    datePosted: "5 days ago",
    post: "ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    name: "OpenAI",
    datePosted: "2 weeks ago",
    post: "Research Intern",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Remote, India"
  },
  {
  brandLogo: "https://logo.clearbit.com/anthropic.com",
  name: "Anthropic",
  datePosted: "4 days ago",
  post: "Prompt Engineer",
  tag1: "Full Time",
  tag2: "Senior Level",
  pay: "$85/hr",
  location: "Remote, India"
},
{
  brandLogo: "https://logo.clearbit.com/deepmind.com",
  name: "Google DeepMind",
  datePosted: "1 week ago",
  post: "Research Scientist - AI Safety",
  tag1: "Full Time",
  tag2: "Senior Level",
  pay: "$100/hr",
  location: "London, UK (Remote option)"
},
{
  brandLogo: "https://logo.clearbit.com/ibm.com",
  name: "IBM",
  datePosted: "6 days ago",
  post: "Data Analyst",
  tag1: "Part Time",
  tag2: "Mid Level",
  pay: "$55/hr",
  location: "Pune, India"
},
{
  brandLogo: "https://logo.clearbit.com/oracle.com",
  name: "Oracle",
  datePosted: "3 days ago",
  post: "Database Administrator",
  tag1: "Full Time",
  tag2: "Senior Level",
  pay: "$70/hr",
  location: "Hyderabad, India"
}

];
return(
  <div className="parent">
    {jobArr.map((job,idx)=>{
      return <Card key={idx} job={job}/>
    })}
  </div>

)
  
}

export default App;

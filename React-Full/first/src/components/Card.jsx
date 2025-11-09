import React from 'react'
import {Bookmark} from "lucide-react"
const Card = ({job}) => {
  return (
    <div className="card">
        <div>
          <div className="top">
          <img src={job.brandLogo} alt="" />
          <button>Save <Bookmark size={14}
          /> </button>
        </div>

        <div className="center">
           <h3>{job.name}<span>{job.datePosted}</span> </h3>
           <h2>{job.post}</h2>
           <div className="tag">
            <h4>{job.tag1}</h4>
            <h4>{job.tag2}</h4>
           </div>
           
        </div>
        </div>

        <div className="bottom">
          
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai,India</p>
            </div>
            <button>Apply now</button>
          </div>



      </div>
  )
}

export default Card

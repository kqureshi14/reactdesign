import React from 'react'
import "./Info.css";

import  {videoIcon,
studentIcon,
bgElement2} from "../../assets/index";

const Info = () => {
  return (
    <section id="info" className="dark-gray">
     <div className="wrapper">
      <div className="content-container">
        <div className="info-content">
         <img src={studentIcon}></img>
         <div className="amount">23000</div>
         <div className="type">Students</div>
        </div>
        <div className='info-content'>
         <img src={videoIcon}></img>
         <div className='amount'>26 Hrs</div>
         <div className='type'>Video Content</div>
        </div>
      </div>

      <img  className='bgElement2' src ={bgElement2}></img>
     </div>

    </section>
  )
}

export default Info

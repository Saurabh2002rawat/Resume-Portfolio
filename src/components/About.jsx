import React, { useState } from 'react'

const About = () => {

  const [activeTab, setActiveTab ] = useState ('hobbies') ;

  const handleTab = (tab) => {
   setActiveTab (tab) ;
  }

  return (
    <div id="about">
    <div className="container">
        <div className="row">
            <div className="about-col-1">
                <img src="/about.png" />
            </div>
            <div className="about-col-2">
                <h1 className="sub">About Me</h1>
                <p> 
                  Hi! I 'm Saurabh Rawat, currently pursuing Master of Computer Applications from National Institute of Technology, Warangal.
                  I have done Bachelor of Computer Applications from Graphic Era, Dehradun. I have been a member of National Service Scheme for 3 years.
                  I like Sketching, coding, trekking and much more. 
                  I believe in living life to the fullest. That's all there !
                </p>

                <div className="tab-titles">
                  <p className={`tab-links ${activeTab==='hobbies' ? 'active-link' : ''}`} 
                     onClick={ ()=> handleTab('hobbies')} >  
                     Hobbies
                  </p>
                  <p className={`tab-links ${activeTab==='responsibilities' ? 'active-link' : '' }`}
                     onClick={ ()=> handleTab('responsibilities')} >
                     Responsibilites
                  </p>
               </div>

               <div className={`tab-contents ${activeTab==='hobbies' ? 'active-tab' : ''}`}>
                  <ul>
                     <li><span>Defence</span><br/> Exploring about Armed Forces</li>
                     <li><span>Sketching</span><br/> Drawing and Painting</li>
                     <li><span>Trekking</span><br/> Hiking and adventure trips</li>
                  </ul>
               </div>
               <div className={`tab-contents ${activeTab==='responsibilities' ? 'active-tab' : ''}`} >
                  <ul>
                     <li><span>Joint Secretary</span><br/> EA&HAM Club (2024-25) </li>
                     <li><span>CRC</span><br/> MCA Iyr Class Representative Committee (2023-24) </li>
                     <li><span>House Captain</span><br/> Class XII (2018-19) </li>
                  </ul>
               </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default About

import React from 'react'

const About = () => {

   


  return (
    <div id="about">
    <div className="container">
        <div className="row">
            <div className="about-col-1">
                <img src="/about.png" />
            </div>
            <div class="about-col-2">
                <h1 className="sub">About Me</h1>
                <p> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem magnam voluptas quo culpa quia doloremque quod voluptates recusandae quidem nobis itaque, esse dicta quibusdam suscipit voluptatum laudantium rem fugiat voluptate at reprehenderit nam deleniti possimus! Consequatur, soluta nobis enim qui sunt maiores perspiciatis doloremque eligendi. Quibusdam distinctio sed iste! 
                </p>
                <div className="tab-titles">
                    <p className="tab-links active-link" onClick="opentab('skills')">Skills</p>
                    <p className="tab-links" onClick="opentab('exp')">Experience</p>
                    <p className="tab-links" onClick="opentab('hobbies')">Hobbies</p>
                </div>
                <div className="tab-contents active-tab" id="skills">
                    <ul>
                        <li><span>UI/UX</span><br />Designing</li>
                        <li><span>UI/UX</span><br />Designing</li>
                        <li><span>UI/UX</span><br />Designing</li>
                    </ul>
                </div>

                <div className="tab-contents" id="exp">
                    <ul>
                        <li><span>CDS</span><br />Designing</li>
                        <li><span>UI/UX</span><br />Designing</li>
                        <li><span>UI/UX</span><br />Designing</li>
                    </ul>
                </div>

                <div className="tab-contents" id="hobbies">
                    <ul>
                        <li><span>defense</span><br />Designing</li>
                        <li><span>UI/UX</span><br />Designing</li>
                        <li><span>UI/UX</span><br />Designing</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</div>
  )
}

export default About

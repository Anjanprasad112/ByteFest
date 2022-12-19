import React from 'react'
import Footer from './Footer'
import { useNavigate } from "react-router-dom";
const About = () => {
    let navigate = useNavigate();
    const routeChange = () =>{
        let pathfour = `/`;
        navigate(pathfour);
    }
  return (
    <div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center mt-4">ABOUT</h1>
          <div className="text-center text-[15px] md:text-xl p-5">
            <p>
Bytefest - 2022 is the right opportunity to showcase your coding abilities and nurture your interest as a coder. <br/>
Bytefest – 2022 will not only provide the new batch of students a practical approach to problem solving, experimenting and brainstorming, but will also encourage them to put forth their innovative ideas as versatile code. <br/>
Bytefest – 2022 is focused mainly on creating a proactive learning, socializing and innovative code-space for programmers with all levels of expertise. <br/>
The competition will be of three levels depending on the scores in the qualifying round. <br/>
</p>
          </div>
          <button className=" text-white flex justify-center items-center "
            onClick={routeChange}
              >
              Back
            </button>
        </div>
       
        <Footer/>
    </div>
  )
}

export default About
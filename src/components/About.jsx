import React from 'react'
import NavBar from './NavBar'
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
        <NavBar/>
        <div className="h-96"><p>Stay Tuned More Updates</p></div>
        <button className="m-auto p-auto text-white "
            onClick={routeChange}
              >
              Back
            </button>
        <Footer/>
    </div>
  )
}

export default About
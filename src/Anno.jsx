import React from 'react'
import Footer from './components/Footer'
import { useNavigate } from "react-router-dom";

const Anno = () => {
    let navigate = useNavigate();
    const routeChange = () =>{
        let paththree = `/`;
        navigate(paththree);
    }
  return (
    <div>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="m-5">ANNOUNCEMENTS</h1>
          <p className="m-5">Stay Tuned For More Updates</p>
        <button className=" text-white m-5"
            onClick={routeChange}
              >
              Back
            </button></div>
        <Footer/>
    </div>
  )
}

export default Anno
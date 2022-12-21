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
          <div className="m-5 text-xl">
            <p className='text-xl m-2 font-medium'>First Round Starts at 9:30 AM Today (21/12/22)</p> <br/>
            <p className='text-xl m-2 font-medium'>Offline Registrations at the Auditorium from 8:30 AM to 9:30 AM</p>
          </div>
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
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
        <div className="h-96"><p>stay tuned</p>
        <button className="m-auto p-auto text-white "
            onClick={routeChange}
              >
              Back
            </button></div>
        <Footer/>
    </div>
  )
}

export default Anno
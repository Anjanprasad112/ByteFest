import React from 'react'
import Footer from './Footer'
import { useNavigate } from "react-router-dom";

const Contact = () => {
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `/`;
        navigate(path);
    }
    const callone= () => {
        window.location.href = "tel:7899050307";
    }
    const calltwo= () => {
        window.location.href = "tel:7411734573";
    }
  return (
    <div>
        <div className="flex flex-col items-center justify-center"><h1 className="text-center m-2">Contact Us</h1>
        <div>
            <p className="m-4 text-base">Anoop R - <span><button onClick={callone} className="text-white">7899050307</button></span></p>
            <p className="m-4 text-base">IMPANA -  <span> <button onClick={calltwo} className="text-white">7411734573</button></span></p>
        </div>
         <button className="text-white "
            onClick={routeChange}
              >
              Back
            </button>
            </div>
        <Footer />

    </div>
  )
}

export default Contact

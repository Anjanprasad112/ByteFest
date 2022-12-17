import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { useNavigate } from "react-router-dom";

const Rule = () => {
    let navigate = useNavigate();
    const routeChange = () =>{
        let pathone = `/`;
        navigate(pathone);
    }
  return (
    <div className="h-96">
        <NavBar/>
        <div className="h-96"><p>
        Stay tuned for more updates...
            </p>
            <button className="m-auto p-auto text-white "
            onClick={routeChange}
              >
              Back
            </button>
            </div>
        <Footer/>
    </div>
  )
}

export default Rule
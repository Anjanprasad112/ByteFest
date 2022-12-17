import React from 'react'
import { useNavigate } from "react-router-dom";


const Error = () => {
    let navigate = useNavigate();
    const routeChange = () =>{
        let pathtwo = `/`;
        navigate(pathtwo);
    }
  return (
    
    <div>
        <h4>404 Page Not Found</h4>
        <button className="m-auto p-auto text-white "
            onClick={routeChange}
              >
              Back
            </button>
    </div>
  )
}

export default Error
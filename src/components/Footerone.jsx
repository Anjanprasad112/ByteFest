import React from 'react'

const Footerone = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-black w-full text-white inset-x-0 bottom-0 text-center">
        <div className="m-2 flex flex-col justify-center items-center">
            <p className="m-1 text-lg">Team Espoire</p>
            <p className="mt-2 text-xs sm:text-sm">Department of Artificial Intelligence and Data Science</p>
        </div>
        <div className="m-2 text-xs sm:text-sm">
            <p>Global Academy of Technology, RR Nagar, Bengaluru </p>
        </div>
    </footer>
  )
}

export default Footerone;
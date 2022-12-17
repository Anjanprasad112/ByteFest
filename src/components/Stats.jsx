import React from 'react'
import imgone from '../assets/calender.png';
import imgtwo from '../assets/location.png';
import imgthree from '../assets/ticket.png';

const Stats = () => {
  return (
    <div className="md:p-10 flex flex-row justify-between items-center w-full z-2 bg-white h-40">
        <div className=""><div className="flex flex-col justify-center items-center"><img src={imgone} alt="calender" className="h-12 md:h-20 m-2 " /> <p className="m-1"><p>21st & 23rd</p><p>December</p> </p></div> 
        </div>
        <div ><div className="flex flex-col justify-center items-center"><img src={imgtwo} alt="location" className="h-12 md:h-20 m-2 " /> <p className="m-1 text-center">GAT Campus</p></div> </div>
        <div><div className="flex flex-col justify-center items-center"><img src={imgthree} alt="ticket" className="h-12 md:h-20 m-2" /> <p className="m-1 text-center"><p>50rs</p><p>per head</p></p></div></div>
    </div>
  )
}

export default Stats
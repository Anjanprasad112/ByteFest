import React from 'react'
import Footerone from './components/Footerone'
import { useNavigate } from "react-router-dom";

const Rule = () => {
    let navigate = useNavigate();
    const routeChange = () =>{
        let pathone = `/`;
        navigate(pathone);
    }
  return (
    <div>
        <div className="flex flex-col justify-center items-center p-5 text-xs">
          <h1 className="mb-2">RULES</h1>
          <p className="md:text-xl">
            Disclaimer: Every decision taken with respect to the event is subject to change with or without prior notice. <br/>
        1.	Contest is open to all freshers@GAT who are interested in programming.<br/>
2.	Participants can be an individual or a team of upto 2 members.<br/>
3.	 Each participant will have to appear in the Qualifying round individually even if they are participating as teams. <br/> 
4.	 Team or individual participation needs to be declared before the ‘Show me the Code’ Round.<br/>
5.	Users are ranked according to the number of problems solved.<br/>
6.	 A participant can be a part of only one team.<br/>
7.	Teams may not accept assistance or advice from anyone not authorized to provide such assistance. No persons other than judges and host staff can address questions or provide assistance.<br/>
8.	Tie breakers will be executed based on the errors that occur during the programme execution. <br/><br/>
Judging System - <br/><br/>
	QUALIFYING ROUND : <br/>
1.	Each team will be awarded with five points per problem.<br/> <br/>

SHOW ME THE CODE ROUND : <br/>
1.	Each team will be awarded according to the size and efficiency of the program<br/>
2.	Participants will lose points for every Wrong answer, Runtime error and Compilation error that occurs during the final showcasing of their programme execution.<br/> <br/>


INNOCODE ROUND : <br/>

1.	Programmes should be error free and results should be as projected by the coders, during the time of Concept Submission in the InnoCode round.<br/>
2.	Every participating individual or team will be required to give a briefing of the functionality of their programme along with a mini documentation of the InnoCode created by them.<br/>
3.	Participants will lose points for every Wrong answer, Runtime error and Compilation error that occurs during the final showcasing of their programme execution.<br/>


            </p>
            <button className=" text-white flex justify-center items-center"
            onClick={routeChange}
              >
              Back
            </button>
            </div>
        <Footerone/>
    </div>
  )
}

export default Rule
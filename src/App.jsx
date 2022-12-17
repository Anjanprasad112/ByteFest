import React ,{Suspense , lazy} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = lazy(()=>import('./Home'));
const About = lazy(()=>import('./components/About.jsx'));
const Anno = lazy(()=>import('./Anno'));
const Contact = lazy(()=>import('./components/Contact'));
const Error = lazy(()=>import('./Error'));
const Rule = lazy(()=>import('./Rule'));
import img from './assets/lodinggears.svg';

function App() {
  return (
    <div>
       <BrowserRouter>
          <Suspense fallback={<div className="flex flex-col justify-center items-center align-middle bg-slate-200 h-full w-full"><img src={img} alt="loding..." /><h3 className="mt-15">LODING...</h3></div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/annoucements" element={<Anno />} />
          <Route exact path="/rules" element={<Rule/>}/>
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
          </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

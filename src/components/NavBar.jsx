
import { useState,useEffect,useRef } from "react";
import {Link,Outlet} from "react-router-dom";
import { icons8menusquared,icons8closewindow } from "../assets";
import img from "../assets/GAT-logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  // let menuRef = useRef();
  let Links =[
          {name:"About",link:"about",id:1},
          {name:"Annoucements",link:"annoucements",id:2},
          {name:"Rules",link:"rules",id:3},
          {name:"Contact",link:"contact",id:4},
          
        ];
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);


  
  useEffect(() => {
    document.addEventListener("click",handleClickOutside, true);
})
const refOne = useRef();
  const handleClickOutside = (e) => {
    if(!refOne.current.contains(e.target)){
      // console.log("clicked outside");
      setToggle(false);
    }
    else{
      // console.log("clicked inside");
      setToggle(true);
    }
  }
  const logo = () => {
    let p = `/`;
        navigate(p);

  }


  return (

    <nav className="w-full flex p-4 justify-between items-center bg-black z-10">
      <img src={img} alt="gat-logo" className="h-12 md:h-20" onClick={logo} />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {Links.map((link) => (
          <li
            key={link.id}
            className={`font-montserrat font-normal cursor-pointer text-[20px] ${
              active === link.name ? "text-blue-600" : "text-gray-400"
            } `}   
            onClick={() => setActive(link.name)}
          >
            <Link to={`${link.link}`}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? icons8closewindow : icons8menusquared}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div 
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black text-white  absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul  className="list-none flex justify-end items-start flex-1 flex-col">
            {Links.map((link) => (
              <li
                key={link.id}
                className={`font-montserrat font-medium cursor-pointer text-[20px]${
                  active === link.name ? "text-white" : "text-slate-400"
                } `}
                ref={refOne}
                onClick={() => setActive(link.name)}
              >
                <Link to={`${link.link}`}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Outlet/>
    </nav>
  );
};

export default Navbar;

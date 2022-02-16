import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";

function NavbarItem(props) {
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(props.navigate);
      }}
      className="p-3 cursor-pointer transition-all hover:scale-105"
    >
      {props.navItem}
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex flex-col items-center bg-[#347ab4] text-white h-full w-[100px] md:w-[230px] fixed">
      <div className="py-[20px] text-lg font-bold">LOGO</div>
      <div className="flex flex-col items-center">
        <NavbarItem navItem="Home" navigate="" />
        <NavbarItem navItem="About" navigate="/about" />
        <NavbarItem navItem="Contact" navigate="/contact" />
      </div>
    </div>
  );
}

export default Navbar;

import { Link, NavLink } from "react-router";
import logo from '../../../assets/logo/logo.png'
import { PrimaryButton } from "../../Button/PrimaryButton/PrimaryButton";
import { IoIosArrowRoundForward } from "react-icons/io";

export const Navbar = () => {
  const menu = (
    <>
      <li>
        <NavLink className={({isActive})=>isActive ? "font-bold text-white":"text-deem"} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>isActive ? "font-bold text-white":"text-deem"} to="/about">About us</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>isActive ? "font-bold text-white":"text-deem"} to="/sub">Sub brand</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>isActive ? "font-bold text-white":"text-deem"} to="/choose">Choose</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>isActive ? "font-bold text-white":"text-deem"} to="/contact">Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar pt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg"
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className="">
        <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{menu}</ul>
      </div>
      <div className="navbar-end">
     <PrimaryButton name={"Explore Fowzi Prints " }  />
      </div>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <div className="w-full ">
        <Link to="/">
            <div className=" border-white  text-sky-500 text-2xl font-bold md:text-4xl lg:text-5xl ml-6 pt-2 ">
                Movie Website
            </div>
            </Link>
<div className="w-full flex flex-row border-solid border-white mt-5">

            <Link
                className=" text-white  w-full font-bold md:text-4xl lg:text-3xl flex items-end self-end ml-6 pt-2"
                activeClassName="is-active"
                to="/latest"
                exact
            >
                Latest Movies
            </Link>

            <Link
                className=" text-white  w-full font-bold md:text-4xl lg:text-3xl flex items-end self-end ml-6 pt-2"
                activeClassName="is-active"
                to="/popular"
                exact
            >
                Popular Movies
            </Link>

            <Link
                className=" text-white  w-full font-bold md:text-4xl lg:text-3xl flex items-end self-end ml-6 pt-2"
                activeClassName="is-active"
                to="/top"
                exact
            >
                TopRated Movies
            </Link>

            <Link
                className=" text-white  w-full font-bold md:text-4xl lg:text-3xl flex items-end self-end ml-6 pt-2"
                activeClassName="is-active"
                to="/upcoming"
                exact
            >
                Upcoming Movies
            </Link>
</div>
            
        </div>
    );
};

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className="w-full ">
        <Link to="/">
            <div className="text-white text-2xl font-bold md:text-4xl lg:text-5xl ml-6 pt-2">
                Movie Website
            </div>
            </Link>

            <Link to="/">
            <div className="text-white text-xl font-bold md:text-2xl lg:text-3xl ml-6 pt-2 ">
                <h2>Latest</h2>
            </div>
            </Link>
        </div>
    );
};

export default Navbar;
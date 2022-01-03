import React from "react";
import { Link } from "react-router-dom";

function MovieCard({movie}) {
    return(
        <Link to ={`/movie/${movie.id}`} >
        <div className="w-[21rem] max-w-[100%] bg-black rounded-xl text-white p-2 m-5 flex flex-col cursor-pointer text-xl hover:scale-110">
            <img alt="poster" className="w-full self-center rounded-lg h-[476px]" src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} />
            <h3 className="my-1">{movie.title}</h3>
            
        
        </div>

        </Link>

       
    );
};

export default MovieCard;
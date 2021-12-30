import React from "react";


function MovieCard({movie}) {
    return(
        <div className="w-[21rem] max-w-[100%] bg-black rounded-xl text-white p-2 m-5 flex flex-col cursor-pointer text-xl hover:scale-110">
            <img alt="poster" className="w-full self-center rounded-lg h-[476px]" src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} />
            <h3 className="my-1">{movie.title}</h3>
            <h3 className="my-1">{movie.vote_average}</h3>
        
        </div>

        
    );
};

export default MovieCard;
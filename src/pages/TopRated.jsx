import React from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";
import { useEffect, useState } from "react";

const TopRated = () => {
    const [Movies, setMovies] = useState([]);
  
    useEffect(()=> {
      const requestTopRatedMovies= async() => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`);
        setMovies(res.data.results);
      };
      requestTopRatedMovies();
    },[]);
  
return(
   
<div className="flex flex-wrap justify-evenly bg-gray-700">

                            {Movies.map((movie) => (
                                <MovieCard movie={movie}/>
                            ))}
                        
                    </div>
);



};

export default TopRated;
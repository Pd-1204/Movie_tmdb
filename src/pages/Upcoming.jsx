import React from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";
import { useEffect, useState } from "react";
import Navbar  from "../Components/Navbar";

const Upcoming = () => {
    const [Movies, setMovies] = useState([]);
  
    useEffect(()=> {
      const requestUpcomingMovies= async() => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`);
        setMovies(res.data.results);
      };
      requestUpcomingMovies();
    },[]);
  
return(
   
<div className="flex flex-wrap justify-evenly bg-gray-700">
<Navbar />
                            {Movies.map((movie) => (
                                <MovieCard movie={movie}/>
                            ))}
                        
                    </div>
);



};

export default Upcoming;
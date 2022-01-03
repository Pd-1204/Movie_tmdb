import React from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

const Latest = () => {
    const [Movies, setMovies] = useState([]);
  
    useEffect(()=> {
      const requestLatestMovies= async() => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`);
        setMovies(res.data.results);
      };
      requestLatestMovies();
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

export default Latest;
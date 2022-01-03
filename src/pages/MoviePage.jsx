import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

async function getMovie(movieId){
    const res =await  axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`)
    return res.data;
}

async function getClips(movieId){
  const res =await  axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
  return res.data.results;
}


function MoviePage() {
    const {movieId} = useParams();
    const [movie, setMovie] = useState("loading");
    const navigate = useNavigate();
    const [width, setWidth] = useState(window.screen.availWidth);
    const[clips, setClips]= useState([]);


    let mt = width>786 ? (width*9)/16 - 250:0
    window.addEventListener("resize", ()=>{
        setWidth(window.screen.availWidth);
    });

    useEffect(()=>{
        getMovie(movieId)
          .then((res)=>{
            setMovie(res);
            getClips(movieId)
              .then((res)=>{
                setClips(movieId);
              })
            
        })
        .catch((err)=>{
            alert(err);
            navigate("/", {replace: true});
        });
        if(width>786){
          window.scroll({top: mt - 100, behavior: "smooth"})
      }
    }, []);
    
    if(movie === "loading" || !movie){
        return <div className="bg-gray-700 text-white h-screen flex items-center justify-center">
            <h1>Loading...please wait !</h1>
        </div>
    }
    
    return (
        <div className='bg-gray-700 min-h-[100vh] text-white text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-6xl font-bold'>
          {width < 768 ? (
            <Navbar />
          ) : (
            <img
              src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path}
              alt='backdrop'
              className='w-screen aspect-video absolute top-0'
            />
          )}
          <div
            className='flex flex-col items-center justify-center md:flex-row md:ml-[50px]'
            style={{
              marginTop: `${mt}px`,
            }}
          >
            <img
              src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
              alt='poster'
              className='rounded-xl border-white border-4 max-w-[min(400px,90%)] sm:max-w-[50%]  md:h-[576px] z-10'
            />
            <h1 className='z-10 md:ml-10 text-center'>{movie.title}</h1>
          </div>
    
         {/* Overview */}
         <div className='mt-7 ml-9 md:mt-10'>OverView</div>
            <div className='mt-5 md:mt-10 ml-9  text-lg md:text-xl lg:text-2xl'>
              {movie.overview}
            </div>
      

        
           
          </div>
       
      );

      
    

    
};

export default MoviePage;
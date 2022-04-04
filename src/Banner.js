import React, { useEffect, useState } from "react";
import axios from "./axios";
import request from "./request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  // const imageURL = 'http://image.tmdb.org/t/p/w342/';
  const imageURL = 'http://image.tmdb.org/t/p/original/';

  

  useEffect(() => {
    async function fetchBanner() {
      const req = await axios.get(request.fetchNetflixoriginals);
      const bannerMovie =
        req.data.results[Math.floor(Math.random() * req.data.results.length)];

      setMovie(bannerMovie);

    }

    fetchBanner();
  }, []);

  

  const bannerStyle = {
    backgroundImage: `${movie && `url(${imageURL}${movie?.backdrop_path})`}`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  }

  function truncate(str, max) {
    return str.length > max ? str.substr(0, max-1) + '…' : str;
  }

  return (
    <header className="banner" style={movie?.backdrop_path && bannerStyle} >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original__name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h2 className="banner__description">
          {movie?.overview && truncate(movie?.overview, 150)}
        </h2>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;


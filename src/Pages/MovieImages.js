import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Masonry from "react-masonry-css";
import "../components/MovieDetail/movieImages.css";
import { options } from "../utils/constant";
import { TMDB_IMG_BASE_URL } from "../utils/constant";

const MovieImages = () => {
  const [movieImages, setMovieImages] = useState({
    backdrops: [],
    posters: [],
    logos: [],
  });
  const { movieId } = useParams();

  const fetchMovieImages = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/images`,
      options
    );
    const data = await response.json();
    setMovieImages(data);
  };

  useEffect(() => {
    fetchMovieImages();
  }, [movieId]);

  return (
    <div className="movie-images-container">
      <h1 className="page-title mt-8">Movie Images</h1>
      <div className="image-section">
        <h2 className="section-title mt-1">Backdrops</h2>
        <Masonry
          breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {movieImages.backdrops.map((image) => (
            <img
              key={image.file_path}
              src={`${TMDB_IMG_BASE_URL}${image.file_path}`}
              alt="Backdrop"
              className="image-item"
            />
          ))}
        </Masonry>
      </div>
      <div className="image-section">
        <h2 className="section-title">Posters</h2>
        <Masonry
          breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {movieImages.posters.map((image) => (
            <img
              key={image.file_path}
              src={`${TMDB_IMG_BASE_URL}${image.file_path}`}
              alt="Poster"
              className="image-item"
            />
          ))}
        </Masonry>
      </div>
      <div className="image-section">
        <h2 className="section-title">Logos</h2>
        <Masonry
          breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {movieImages.logos.map((image) => (
            <img
              key={image.file_path}
              src={`${TMDB_IMG_BASE_URL}${image.file_path}`}
              alt="Logo"
              className="image-item"
            />
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default MovieImages;
